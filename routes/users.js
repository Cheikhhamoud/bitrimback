// const express = require('express')
// var router = express.Router();
// const Users = require('../models/users.model')



// router.get('/', async function (req, res, next) {
//     const users = await Users.find()
//     res.send(users)
// });

// router.post('/', async function (req, res, next) {
//     const {
//         name,
//         email,
//         password,

//     } = req.body
//     const newUser = await Users.create({
//         name,
//         email,
//         password,

//         // createdAt:new Date()
//     })
//     res.send(newUser)
// })

// router.post('/login', async function (req, res, next) {
//     const {
//         username,
//         password,

//     } = req.body
//     const member = await Users.findOne({
//         username,
//         password,

//     })

//     if (member) {
//         res.send({ state: 'done' })
//     } else {
//         res.send({ state: 'error' })
//     }
// })


// router.put('/', async function (req, res, next) {
//     const {
//         username,
//         email,
//         password,
//         confirmpassword,
//         _id
//     } = req.body
//     const newUser = await Users.findByIdAndUpdate(_id, {
//         username,
//         email,
//         password,
//         confirmpassword,

//     }, { new: true })
//     res.send(newUser)
// })

// router.delete('/', async function (req, res, next) {
//     const {

//         _id
//     } = req.body
//     const newUser = await Users.findByIdAndUpdate(_id,
//         {
//             isVisible: false
//         }, { new: true })
//     res.send(newUser)
// })



// module.exports = router;