const { collection, addDoc, getDocs, getDoc, doc, where, query } = require('firebase/firestore');
const db = require('../config');

async function queries(){
	const objData = [];
	const querySnapshot = await getDocs(collection(db, 'searching'));

	querySnapshot.forEach(doc => {
		objData.push({'id': doc.id, 'data': doc.data()});
	});
	return objData;
}
async function query00(data00){
	const objData = [];
	const docRef = query(collection(db, "searching"), where("name", "==", data00));
	const docSnap = await getDocs(docRef);
	
	docSnap.forEach(doc => {
		objData.push(doc.data());
	});	

	if(objData.length === 0){
		return false;
	}else{
		return objData;
	}
}

module.exports = { queries, query00 };
