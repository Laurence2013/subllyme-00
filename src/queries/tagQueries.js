const { collection, addDoc, getDocs, getDoc, doc, where, query, documentId } = require('firebase/firestore');
const queries = require('./queries'); 
const db = require('../config');

async function tagQuery00(tag){
	const objIds 		= []; 
	const objData00 = [];
	const objData 	= {};
	const qSnapshot = query(collection(db, "tags"), where("books", "array-contains", tag));	
	const snapshot 	= await getDocs(qSnapshot);

	snapshot.forEach(doc => { 
		if(doc.exists() === true){
			objData.exists = doc.exists();
			objIds.push(doc.data().tags_company.id);
		};
	});
	const data01 = await tagQuery01(objIds);
	data01.forEach(data00 => {
		objData00.push(data00);
	});	
	const data02 = query01(objIds);
	objData00.forEach(data04 => {
		data02.then(data03 => new Promise((resolve) => {
			data03.forEach(data05 => {
				if(data04.id === data05.trail_company.id){
					objData.data.trails = data05;
				}
			});
			resolve(objData);
		})).then(d => console.log(d));
	});
	objData.data = objData00;
	return objData;
}
async function tagQuery01(doc00){
	const objData 	= [];
	const qSnapshot = await getDocs(collection(db, "brief_company_info"));	

	qSnapshot.forEach(doc => {
		doc00.forEach(id => {
			if(doc.id === id){
				objData.push({'id': doc.id, 'data': doc.data()});
			}
		});
	});
	return objData;
}
async function query01(doc01){
	const objData = [];
	const qSnapshot = await getDocs(collection(db, 'trail_period'));
	
	qSnapshot.forEach(doc => {
		doc01.forEach(doc02 => {
			if(doc02 === doc.data().trail_company.id){
				objData.push(doc.data());
			}
		});	
	});
	return objData;
}

module.exports = { tagQuery00 }
