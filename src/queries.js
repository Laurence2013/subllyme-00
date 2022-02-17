const { collection, addDoc, getDocs } = require('firebase/firestore');
const db = require('./config');

async function results(){
	const objData = [];
	const querySnapshot = await getDocs(collection(db, 'searching'));
	querySnapshot.forEach(doc => {
		objData.push({'id': doc.id, 'data': doc.data()});
	});
	return objData;
}

module.exports = { results };
