const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    pincode:{type:Number, required:true},
    city:{type:String, required:true},
    state:{type:String, required:true},
    dob:{type:String, required:true},
    degree:{type:String, required:true},
    course:{type:String, required:true},

})

module.exports = mongoose.model("account",accountSchema)