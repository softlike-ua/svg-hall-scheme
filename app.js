const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
const path = require("node:path");
require('dotenv').config()

const ImgRouter = require('./src/img/ImgRouter')

const app = express();

app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({extended: false, limit: '500kb'}));
app.use(cors({
    origin: [process.env.CLIENT_HOST_DEV, process.env.CLIENT_HOST_PREVIEW],
    credentials: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/img', ImgRouter)

const start = async () => {
    const PORT = process.env.PORT
    try {
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT} !!!!`))

    } catch (e) {
        console.error("SERVER ERROR", e.message)
        // process.exit(1)
    }
}
start()

module.exports = app;
