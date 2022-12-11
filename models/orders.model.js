const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
amount :{type :Number},
convertTo :{type :Number},
fullname :{type :String},
binaneID :{type :Number},
email :{type :String},
phone :{type :Number},
total :{type :Number},
isVisible :{type :Boolean, default :true},

},{timestamps : true}

);
// Create a model based on that schema
const Orders =mongoose.model('Orders' ,OrdersSchema,'Orders');

// export the model
module.exports = Orders