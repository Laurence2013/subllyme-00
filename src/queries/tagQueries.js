const { collection, addDoc, getDocs, getDoc, doc, where, query, documentId } = require('firebase/firestore');
const db = require('../config');

async function tagQuery00(tag){
	const objData = [];
	const qSnapshot = query(collection(db, "tags"), where("books", "array-contains", tag));	
	const snapshot = await getDocs(qSnapshot);

	snapshot.forEach(doc => { 
		if(doc.exists() === true){
			tagQuery01(doc.data().tags_company.id).then(data => objData.push(data));
		};
	});
	if(objData.length != 0){
		return objData;
	}else{
		return false
	}
}
async function tagQuery01(id){
	const objData = {}
	const qSnapshot = await getDocs(collection(db, "brief_company_info"));	

	qSnapshot.forEach(doc => {
		if(doc.id === id){
			objData.data = doc.data();
		}
	});
	return objData.data;
}

module.exports = { tagQuery00 }
