const express = require('express');
const helmet = require('helmet');
const index = require('./routers/index');
const results = require('./routers/results');
const app = express();	

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', index);
app.use('/results', results);

app.listen(3000);
