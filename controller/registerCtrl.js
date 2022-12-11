const User = require('../models/users.model')

const register_index_get = async  (req, res) =>{
    const register = await User.find()
    res.send(register)
  
}
 const register_index_post = async  (req, res, next) => {
    const {
      name,
      email,
      password,
 
    } = req.body
  
  //ckeck if user exist
let error =false 
  const user = await User.findOne({ email})

  if (user) {
     error = true 
      res.send({msg : 'Email already register',ok: false})
  
    }
if (!error) {
    const newUser = await User.create({
        name,
        email,
        password,
      })
      res.send({newUser , ok:true})
}
  
  }
  //login
  const login_post =  async (req, res)=> {
    const {email,password} = req.body

    const user = await User.findOne({ email,password,})

      if (user) {
          
          res.send({ name: user.name, state : 'done' , ok: true ,_id: user._id })
      }else{
          res.send({state : 'error data' ,ok :false})
      }
  }
  //register update
  const register_put = async function (req, res, next) {
    const {_id } = req.body
    const newUser = await User.findByIdAndUpdate(_id, {
      

    }, { new: true })
    res.send(newUser)
  }
   //register delete
  const register_delete = async function (req, res, next) {
    const { _id } = req.body

    const newUser = await User.findByIdAndUpdate(_id,
        {
            isVisible: false
        }, { new: true })
    res.send(newUser)
  }
  module.exports = {
    register_index_post,
    register_index_get,
    login_post,
    register_delete,
    register_put,
  
  };