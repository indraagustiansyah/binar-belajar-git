const router = require('express').Router()

const controller = require('../controllers/authControllers')

router.get('/registasi',controller.viewRegistrasi)

module.exports = router