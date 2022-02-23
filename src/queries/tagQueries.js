const { collection, addDoc, getDocs, getDoc, doc, where, query } = require('firebase/firestore');
const db = require('../config');

async function tagQuery00(tag){
	const objData = [];
	const qSnapshot = query(collection(db, "tags"), where("books", "array-contains", tag));	
	const snapshot = await getDocs(qSnapshot);

	snapshot.forEach(doc => doc.exists() === true ? objData.push({'data': true}) : objData.push({'data': false}));
	return objData;	
}

module.exports = { tagQuery00 }
