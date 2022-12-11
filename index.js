const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config()
// var connection = require('./connection');
const ordersRouter = require('./routes/orders');
const registerRouter = require('./routes/register');
// const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');


const app = express();
app.use(express.json())


app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});


app.get('/p', function (req, res, next) {

  res.send({

    "success": true,
    "base": "Usdt",
    "rates": "Usdt",
    "rates": {
      "MRO": 500,
      "USD": 1.1,
      "BUSD": 1,
    },
  })
})
app.use('/register', registerRouter);
app.use('/orders', ordersRouter);
// app.use('/users' , usersRouter);
app.use('/api', apiRouter);

// CONNECT TO MONGODB
mongoose.connect(process.env.MONGO_URI, () => console.log('db conected'));


const port = process.env.PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


