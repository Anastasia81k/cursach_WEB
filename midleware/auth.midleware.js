///обычная функия, которая позволяет перехватывать определенные данные и делать описанную логику
const jwt = require("jsonwebtoken")
const config = require('config')
module.exports =(req, res, next)=>{
    if(req.method === "OPTIONS"){  //метод, который присутсвует в REST API и проверяет доступнсть сервера
        return next() /// продолжаем делать запрос

    }
    ///для запросов post get  используем  try catch
    try{
        const token = req.headers.authorization.split(" ")[1]//получить объект токен и у хэдэров с помощью специальношо поля authorization  передаем строку с фронта мы можем ее распарсить, чтоб болучить сам токен из массива первый элемент
        if(!token){
           return  res.status(401).json({message: "Нет авторизации"})
        }
        const decoded = jwt.verify(token, config.get('jwtSecret')) //если токен есть его надо раскодировать
        req.user = decoded //получаем раскодированный токен
        next()
    }catch (e) {
        res.status(401).json({message: "Нет авторизации"})
    }
}