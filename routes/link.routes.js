///отвечает за генерацию ссілок
const {Router} = require("express")
const Link = require("../models/Link")
const auth = require('../midleware/auth.midleware')
const router = Router()
const config = require('config')

router.post("/generate", async (req, res )=>{
    try{
        //модель новой ссылки уже необходимо привязать к пользователю
        const baseUrl = config.get('baseUrl')
        const {from} = res.body
    }catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/', auth, async (req, res)=>{///за счет того, что есть midleware есть поле user.userId получается делаем запрос в базуб где находятся все ссылки к текущему пользователю
    try{
    const links = await Link.find({owner: null})  ////?????????????????надо с фронта получать данные можно это сделать серез jwtToken так как через него закодировали id
        res.json(links)
    }catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get("/:id", async (req, res)=>{
    try{
        const links = await Link.findById(req.params.id)
        res.json(links)

    }catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router