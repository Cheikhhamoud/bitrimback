const mongoose = require('mongoose');

// const RatesSchema = mongoose.Schema({
//     MRO: {type :Number},
//     USD: {type :Number},
//     BUSD: {type :Number},
//     USDT: {type :Number}

//   });

const ApiSchema = new mongoose.Schema({
    success :{type :Boolean},
    base :{type :String},
   
  //  rates :{type :RatesSchema},
  rates: {
    MRO: Number,
    USD:  Number,
    BUSD:  Number,
    USDT:  Number
  },
  
   isVisible :{type :Boolean, default :true},
 
},
{timestamps : true}
)
// Create a model based on that schema
const Api =mongoose.model('Api' ,ApiSchema,'Api');

module.exports = Api