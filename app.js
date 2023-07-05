const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
const path = require("node:path");
const ImgRouter = require('./src/img/ImgRouter')

const app = express();

app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({extended: false, limit: '500kb'}));

app.use(cors({origin: ['http://localhost:4173','http://localhost:5173'], credentials: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/img', ImgRouter)

const start = async () => {
    const PORT = 5000
    try {
        await mongoose.connect('mongodb://localhost:27017/svg_s')
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT} !!!!`))

    } catch (e) {
        console.error("SERVER ERROR", e.message)
        // process.exit(1)
    }
}
start()

module.exports = app;
