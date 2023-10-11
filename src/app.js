const express = require('express')
const morgan = require('morgan');

const app = express();
const {db} = require('./firebase');


app.use(morgan('dev'));

app.get('/', async (req, res)=> {
    const querySnapshot = await db.collection('contacts').get();
    res.send(querySnapshot.docs);
})

module.exports = app;