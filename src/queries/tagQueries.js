const { collection, addDoc, getDocs, getDoc, doc, where, query, documentId } = require('firebase/firestore');
const queries 	= require('./queries'); 
const db 				= require('../config');

async function tagQuery00(tag){
	const objIds 									= []; let objTags00 = [];
	const booksSnapshot00 				= query(collection(db, "tags"), where("books", "array-contains", tag));	
	const app_downloadSnapshot00	= query(collection(db, "tags"), where("app_download", "array-contains", tag));
	const booksSnapshot01 				= await getDocs(booksSnapshot00);
	const app_downloadSnapshot01 	= await getDocs(app_downloadSnapshot00);

	booksSnapshot01.forEach(doc => {
		if(doc.exists() === true)
			console.log('line 14: ' + doc.data().tags_company.id);
	});
	app_downloadSnapshot01.forEach(doc => {
		if(doc.exists() === true)
			console.log('line 18: ' + doc.data().tags_company.id);
	});

	return {'data': true}

	/*booksSnapshot01.forEach(doc => { 
		if(doc.exists() === true)
			objIds.push(doc.data().tags_company.id);
	});
	await tagQuery01(objIds).then(doc => doc.forEach(doc => objTags00.push({'brief_company_info': doc})));
	await tagQuery02(objIds).then(doc => doc.forEach(doc => objTags00.push({'trail_period': doc})));

	if(objTags00.length != 0)
		objTags00.push({'ids': objIds});

	return objTags00;*/
}
async function tagQuery01(doc00){
	const objData 	= [];
	const qSnapshot = await getDocs(collection(db, "brief_company_info"));	

	qSnapshot.forEach(doc => {
		doc00.forEach(id => {
			if(doc.id === id)
				objData.push({'id': doc.id, 'data': doc.data()});
		});
	});
	return objData;
}
async function tagQuery02(doc01){
	const objData = [];
	const qSnapshot = await getDocs(collection(db, 'trail_period'));
	
	qSnapshot.forEach(doc => {
		doc01.forEach(doc02 => {
			if(doc02 === doc.data().trail_company.id)
				objData.push(doc.data());
		});
	});
	return objData;
}

module.exports = { tagQuery00 }
