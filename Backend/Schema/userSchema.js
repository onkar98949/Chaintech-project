const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true}
})

module.exports = mongoose.model("registered",memberSchema)