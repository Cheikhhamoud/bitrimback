const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();
const  apiCtrl  = require('../controller/apiCtrl');


router.get('/',apiCtrl.api_index_get );
router.post('/',apiCtrl.api_post );
router.put('/', apiCtrl.api_put);
router.delete('/', apiCtrl.api_delete)

module.exports = router;