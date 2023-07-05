const {Schema, model} = require('mongoose')

const schema = new Schema({
    body: {type: String, require: true},
    title: {type: String, required: true},
    seats: [{type: Schema.Types.Mixed}],
}, {timestamps: true})

module.exports = model('Img', schema)