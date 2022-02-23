const queries = require('../queries/queries');
const express = require('express');
let router 		= express.Router();

router.get('/', (req, res, next) => {
	res.json('Hello from Tag');
});
router.post('/', (req, res, next) => {
	let body = req.body;

	console.log(body);
});


module.exports = router;
