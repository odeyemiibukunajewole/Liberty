const { Router } = require('express');
const debug = require('debug')('app:HomeRouter');
const homecontroller = require('../controllers/HomeController');

const router = Router();

router.route('/')
.get(homecontroller);


module.exports = router;