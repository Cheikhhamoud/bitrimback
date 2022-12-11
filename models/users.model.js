const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
name :{type :String},
email :{type :String},
password :{type :String},
isVisible :{type :Boolean, default :true},

},{timestamps : true}


)

const model =mongoose.model('UserData' ,User,'Users');

module.exports = model