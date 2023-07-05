const express = require('express')
const ImgController = require('./ImgController')
const router = express.Router()

// const fileService = require("../FileService")
// const upload = fileService('images')

router.get('/', ImgController.getAll)
router.get('/:id',ImgController.getOne)
router.post('/create', ImgController.create)
router.put('/update', ImgController.update)
router.post('/remove-image', ImgController.delete)

module.exports = router