const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', require('./routes/auth.routs'))
//app.use('api/link', require('./routes/link.routes'))
app.use('/api/link', require('./routes/links.routers'))
app.use('/api/university', require('./routes/university.routs'))

const PORT = config.get("port") || 5000;

async function start(){
    try {
        await mongoose.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
