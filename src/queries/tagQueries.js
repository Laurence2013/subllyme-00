const { collection, addDoc, getDocs, getDoc, doc, where, query, documentId } = require('firebase/firestore');
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
	objData.data = objData00;
	return objData;
}
async function tagQuery01(doc00){
	const objData = [];
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

module.exports = { tagQuery00 }
