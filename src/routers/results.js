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
				})
				resolve(data[0].id);
			}))
			.then(id => new Promise((resolve) => {
				queries.query01(id).then(data => {
					data01.trial 	= data[0] || false;	
					data01.days 	= data[0].days || false;
				})
				resolve(id);
			}))
			.then(id => new Promise((resolve) => {
				queries.query02(id).then(data00 => {
					data00.forEach(data => {
						data01.monthly_plan = data.monthly_plan || false;
						data01.monthly_03 	= data.monthly_03 || false;
						data01.monthly_06 	= data.monthly_06 || false;
						data01.yearly_plan	= data.yearly_plan || false;
					})
				})
				resolve(id);
			}))
			.then(id => {
				queries.query03(id).then(data00 => {
					data00.forEach(data => {
						data01.weekly_00 			= data.weekly || false;
						data01.monthly_00 		= data.monthly || false;
						data01.monthly_03_00	=	data.monthly_03 || false;
						data01.monthly_06_00	=	data.monthly_06 || false;
						data01.yearly 				= data.yearly || false;

						res.json({
							'Data': data01.data, 
							'Trial Period': data01.trial.trail,
							'Trail Period in Days': data01.days,
							'Monthly Plan': data01.monthly_plan,
							'3 Months': data01.monthly_03,
							'6 Months': data01.monthly_06,
							'Yearly Plan': data01.yearly_plan,
							'Weekly Package': data01.weekly_00,
							'Monthly Package': data01.monthly_00,
							'3 Months Package': data01.monthly_03_00,
							'6 Months Package': data01.monthly_06_00,
							'Yearly Package': data01.yearly
						});
					})
				})
			})
	}
});

module.exports = router;
