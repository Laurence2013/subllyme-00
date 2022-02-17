const queries = require('../queries/queries');
const express = require('express');
let router = express.Router();

router.get('/',(req, res, next) => {
	queries.queries().then(data => {
		res.json(data);
	});
});
router.post('/', (req, res, next) => {
	var data = req.body;

	if(typeof data.name === 'string'){
		queries.query00(data.name).then(data => {
			console.log(data);
		});
	}
});

module.exports = router;
