const { collection, addDoc, getDocs, 
		getDoc, doc, where, query
	} = require('firebase/firestore');
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
	console.log(data00);
	const docRef = query(collection(db, "searching"), where("name", "==", data00));
	const docSnap = await getDocs(docRef);
	
	docSnap.forEach(doc => {
		//console.log(doc.data());
		console.log(doc.get('name'));
	});
	return true;
}

module.exports = { queries, query00 };
