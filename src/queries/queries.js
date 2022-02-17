const { collection, addDoc, getDocs, getDoc, doc } = require('firebase/firestore');
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
	const docRef = doc(db, "searching", "4on3ZhzxvUJ3zbXjN7LL");
	const docSnap = await getDoc(docRef);

	console.log(`Document data: ${docSnap.get("url")}`);

	/*if(docSnap.exists()){
		console.log(`Document data: ${docSnap.data()}`);
	}else{
		console.log(`Nothing found! ${docSnap.data()}`);
	}*/

	return true;
}

module.exports = { queries, query00 };
