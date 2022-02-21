const { collection, addDoc, getDocs, getDoc, doc, where, query, documentReference } = require('firebase/firestore');
const db = require('../config');

async function queries(){
	const objData = [];
	const qSnapshot = await getDocs(collection(db, 'brief_company_info'));

	qSnapshot.forEach(doc => objData.push({'id': doc.id, 'data': doc.data()}));
	return objData;
}
async function query00(data00){
	const objData = [];
	const docRef = query(collection(db, "brief_company_info"), where("name", ">=", data00), where("name", "<=", data00 + "~"));
	const docSnap = await getDocs(docRef);

	docSnap.forEach(doc => { 
		objData.push({'id': doc.id, 'data': doc.data()}) 
	});	
	return objData.length === 0 ? false : objData;
}
async function query01(id){
	console.log(id);
	const objData = [];
	const qSnapshot = await getDocs(collection(db, 'trail_period'));
	
	qSnapshot.forEach(doc => {
		if(id === doc.data().trail_company.id){
			console.log(doc.data());
		}
	});

	return true;
}

module.exports = { queries, query00, query01 };
