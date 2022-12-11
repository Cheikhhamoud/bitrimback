const Api = require('../models/api.model')

const api_index_get = async function (req, res, next) {
    const apis = await Api.find()
    res.json(apis)
  
}

const api_post = async function (req, res, next) {
    const {
      success,
      base,
      rates,
     
    } = req.body
  
    const newApi = await Api.create({
      success,
      base,
  
      rates,
    })
    res.send(newApi)
  }
  const api_put = async function (req, res, next) {
    const {
       
        _id
    } = req.body
    const newApi = await Api.findByIdAndUpdate(_id, {
      
  
    }, { new: true })
    res.send(newApi)
  }
  const api_delete = async function (req, res, next) {
    const {
  
        _id
    } = req.body
    const newApi = await Api.findByIdAndUpdate(_id,
        {
            isVisible: false
        }, { new: true })
    res.send(newApi)
  }

module.exports = {
    api_index_get,
    api_post,
    api_delete,
    api_put,
  
  };