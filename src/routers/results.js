const queries = require('../queries/queries');
const express = require('express');
let router = express.Router();

router.get('/',(req, res, next) => {
	queries.queries().then(data => res.json(data));
});
router.post('/', (req, res, next) => {
	let data = req.body;
	let id = {};

	if(typeof data.name === 'string'){
		queries.query00(data.name.toLowerCase())
			.then(data => new Promise((resolve) => { 
				data === false ? res.json('Search was not found!') : data.forEach(data00 => res.json(data00.data));
				resolve(data[0].id);
			}))
			.then(id => {
				queries.query01(id).then();
			})
	}
});

module.exports = router;
