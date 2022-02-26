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
			if(data[0].data === false){
				res.json('No search found!');
			}else{
				res.json(data[0].data);
			}
		}).catch(e => console.log(e));
	}
});


module.exports = router;
