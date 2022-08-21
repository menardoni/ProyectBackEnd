const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const CliSchema = new Schema ({
    name:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    dni: {
        type: Number,
        require: true,
        unique: true
    },
    active:{
        type: Boolean
    }

})

const Cliente = mongoose.model('Cliente', CliSchema)

module.exports = {Cliente}