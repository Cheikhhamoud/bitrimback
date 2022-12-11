const express = require('express')
var router = express.Router()
const orderCtrl  = require('../controller/orderCtrl');

router.get('/',orderCtrl.order_index_get );
router.post('/',orderCtrl.order_post );
router.put('/', orderCtrl.order_put);
router.delete('/', orderCtrl.order_delete)


module.exports = router;