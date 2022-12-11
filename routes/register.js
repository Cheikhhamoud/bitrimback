const express = require ('express');
const  registerCtrl  = require('../controller/registerCtrl');
const router = express.Router();
  
router.get('/',registerCtrl.register_index_get);
router.post('/',registerCtrl.register_index_post)
router.put('/', registerCtrl.register_put);
router.delete('/', registerCtrl.register_delete)
  //login post
router.post('/login', registerCtrl.login_post)



module.exports = router;