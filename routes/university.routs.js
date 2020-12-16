const {Router} = require('express')
const University = require('../models/University')
const config = require('config')

const router = Router();

router.get("/", async (req, res)=>{
    try {
        const universitys = await University.find({})
        res.json(universitys)
    }catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так c БД, попробуйте снова' })
    }
    /*University.find({})
        .then(university =>{
            res.send(university)
        })*/
})

module.exports = router
