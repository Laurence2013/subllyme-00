const queries = require('../queries/tagQueries');
const express = require('express');
let router 		= express.Router();

router.get('/', (req, res, next) => {
	res.json('Hello from Tag');
});
router.post('/', (req, res, next) => {
	let body = req.body;
	let tag00 = body.tag00.toLowerCase();

	if(tag00 === body.tag00.toLowerCase()){
		queries.tagQuery00(tag00).then(data => {
			data.forEach(data00 => {
				if(Object.entries(data00).length != 0){
					res.json(data00)
				}else{
					res.json('Search not found!');
				}
			});
		}).catch(e => console.log(e));
	}
});


module.exports = router;
