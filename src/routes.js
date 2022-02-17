const { collection, addDoc, getDocs } = require('firebase/firestore');
const db = require('./config');
const express = require('express');
const helmet = require('helmet');
const app = express();

const queries = require('./queries');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req, res, next) => {
	res.json('Hello World');
});
app.get('/results',(req, res, next) => {
	queries.results().then(data => {
		res.json(data.id);
	});
});
app.post('/queries',(req, res, next) => {});

app.listen(3000);
