const Order = require('../models/orders.model')


const order_index_get = async function (req, res, next) {
    const Orders = await Order.find()
    res.send(Orders)
}


const order_post = async function (req, res, next) {
    const {
        amount,
        convertTo,
        fullname,
        binaneID,
        email,
        phone,
        total

    } = req.body
    const newOrder = await Order.create({
        amount,
        convertTo,
        fullname,
        binaneID,
        email,
        phone,
        total
    })
    res.send(newOrder)
}

const order_put = async function (req, res, next) {
    const {
        amount,
        convertTo,
        fullname,
        binaneID,
        email,
        phone,
        total,
        _id
    } = req.body
    const newOrder = await Order.findByIdAndUpdate(_id, {
        amount,
        convertTo,
        fullname,
        binaneID,
        email,
        phone,
        total
    }, { new: true })
    res.send(newOrder)
}

const order_delete = async function (req, res, next) {
    const {

        _id
    } = req.body
    const newOrder = await Order.findByIdAndUpdate(_id,
        {
            isVisible: false
        }, { new: true })
    res.send(newOrder)
}

module.exports = {
    order_index_get,
    order_post,
    order_delete,
    order_put,

};