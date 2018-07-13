require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const cors = require('cors');

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => { app.set('db', dbInstance) });

app.use( bodyParser.json());
app.use( cors() );


let PORT = process.env.PORT || 4000;
app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`);});