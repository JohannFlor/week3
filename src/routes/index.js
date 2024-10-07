const express = require('express');
const routerCountry = require('./country.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/country', routerCountry)
module.exports = router;