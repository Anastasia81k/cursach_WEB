const {Router} = require('express');
const bcrypt = require("bcryptjs");  //хэширование паролей и в дальнейшем их сравнение
const config = require('config');
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");  //проверка валидации
const User = require("../models/User");
const router = Router();


/// /api/auth/register
router.post('/register',
    [
        check('email', 'Некоректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})//массив для валидации
    ],
    async (req, res)=>{
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return  res.status(400).json({
                errors: errors.array(),
                message: "Некорректные данные при регистрации"
            })
        }

        const {email, password} = req.body;

        const candidate = await User.findOne({email});
        if(candidate){
           return  res.status(400).json({message: "Такой пользователь уже существует"})
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({email, password: hashedPassword});

        await user.save();

        res.status(201).json({message: "Пользователь создан"})



    }catch (e) {
        res.status(500).json({message: "Что-то пощло не так, попробуйте еще раз"})
    }
});


router.post('/login',
    [
        check("email", "Введите корректный email").normalizeEmail().isEmail(),
        check("password", "Введите пароль").exists()
    ],
    async (req, res)=>{

    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return  res.status(400).json({
                errors: errors.array(),
                message: "Некорректные данные при входе в систему"
            })
        }

        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Пользователь не найден"})
        }

        const  isMatch = await  bcrypt.compare(password, user.password );  ///для проверки паролей
        if(!isMatch){   ///если пароли не совпадают
            return res.status(400).json({message: "Неверный пароль, попробуйте еще раз"})
        }

        const token = jwt.sign(
            {userId: user.id},
        config.get("jwtSecret"),
            {expiresIn: '1h'}//время через которое объект закончит свое существование
        )

        res.json({token, userId: user.id});


    }catch (e) {
        res.status(500).json({message: "Что-то пошло не так, попробуйте еще раз"})
    }


});

module.exports = router;