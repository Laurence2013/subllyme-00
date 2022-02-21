const queries = require('../queries/queries');
const express = require('express');
let router 		= express.Router();

router.get('/',(req, res, next) => {
	queries.queries().then(data => res.json(data));
});
router.post('/', (req, res, next) => {
	let data		= req.body;
	let data01 	= {};

	if(typeof data.name === 'string'){
		queries.query00(data.name.toLowerCase())
			.then(data => new Promise((resolve) => {
				data === false ? res.json('Search was not found!') : data.forEach(data00 => { 
					data01.id 	= data00.id;
					data01.data = data00.data;
					res.json(data00.data) 
				})
				resolve(data[0].id);
			}))
			.then(id => {
				queries.query01(id)
			})
	}
});

module.exports = router;
