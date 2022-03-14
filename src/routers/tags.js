const queries = require('../queries/tagQueries');
const express = require('express');
let router 		= express.Router();

router.get('/', (req, res, next) => {
	res.json('Hello from Tag');
});
router.post('/', (req, res, next) => {
	let body = req.body;

	Object.entries(body).forEach((entry) => {
		const [key, value] = entry;
		const value00 = value.toLowerCase();

		if(value00.toLowerCase())
			queries.tagQuery00(value00).then(tags => console.log(tags));
	});
	
	/*let tag00 = body.tag00.toLowerCase();

	if(tag00 === body.tag00.toLowerCase()){
		queries.tagQuery00(tag00).then(tags => {
			if(tags.length === 0)
				res.json('Search not found!');
			else
				res.json(tags);
		}).catch(e => console.log(e));
	}*/
});


module.exports = router;
