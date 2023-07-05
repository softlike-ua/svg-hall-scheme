const multer = require("multer")
const path = require("node:path")
const uuid = require("uuid")
const fs = require("node:fs")

const getUpload = (_path) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            const p = path.join(__dirname, '..', 'public', _path);
            fs.mkdirSync(p, {recursive: true})
            cb(null, p)
        },
        filename: function (req, file, cb) {
            cb(null, uuid.v4() + path.extname(file.originalname))
        },
    })

    return multer({storage})
}

module.exports = getUpload