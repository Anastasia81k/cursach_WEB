const {Router} = require("express")
const bcrypt = require('bcryptjs') ///позволяет хэшировать пароли, а в дальнейшем еще и сравнивать
const User = require("../models/User")
const jwt = require('jsonwebtoken')
const config = require("config")
const {check, validationResult} = require("express-validator")

const router = Router()

//api/auth/register
router.post("/register",
    [
        check('email', 'Некорректный email').isEmail(),   //валидатор - isEmail
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({ min: 6 })
    ],///validation
    async (req, res)=>{
    try{
        console.log("Body: " , res.body)
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array(),
                message: 'Некорректный данные при регистрации'})
        }
        const {email, password} = req.body
        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }

        //шифрование пароля
        const hashPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashPassword})

        await user.save()

        res.status(201).json({ message: 'Пользователь создан' })


    }catch (e) {
        res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
    }
})

//api/auth/login
router.post("/login",
    [check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()],
    async (req, res)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array(),
                message: 'Некорректный данные при входе в систему'})
        }

        const {email, password} = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: 'Пользователь не найден' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
        }

        const token = jwt.sign( //jwt token
            { userId: user.id },  //в объекте указать даннные, которые будут зашифрованы
            config.get('jwtSecret'),  //строчка которая зависит от настроек
            { expiresIn: '1h' }  //срок жизни
        )

        res.json({ token, userId: user.id })



    }catch (e) {
        res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
    }
})

module.exports = router