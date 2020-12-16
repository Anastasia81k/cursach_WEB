///отвечает за генерацию ссілок
/*const {Router} = require("express")
const Link = require("../models/Link")
const auth = require('../midleware/auth.midleware')
const router = Router()
const config = require('config')
const shortid = require("shortid")

router.post("/generate", async (req, res )=>{//генерация асинхронной ссылки
    try{
        //модель новой ссылки уже необходимо привязать к пользователю
        const baseUrl = config.get('baseUrl')
        const {from} = res.body
        const code = shortid.generate()

        const existing = await Link.findOne({ from })

        if (existing) {
            return res.json({ link: existing })
        }
      ///не авторизованные пользователи не смогут создавать эти ссылки
        const to = baseUrl + '/t/' + code

        const link = new Link({
            code, to, from, owner: req.user.userId
        })

        await link.save()

        res.status(201).json({ link })
    }catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

//получение всех ссылок
router.get('/', auth, async (req, res)=>{///за счет того, что есть midleware есть поле user.userId получается делаем запрос в базуб где находятся все ссылки к текущему пользователю
    try{
        //найти ссылки которые относятся к текущему пользователю
        //данные о польщователе могут возвращаться через jwttoken
    const links = await Link.find({owner: req.user.userId})  ////?????????????????надо с фронта получать данные можно это сделать серез jwtToken так как через него закодировали id
        res.json(links)
    }catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

//получение отдельной ссылки и возвоат в json
router.get("/:id", async (req, res)=>{
    try{
        const links = await Link.findById(req.params.id)
        res.json(links)

    }catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router

 */

