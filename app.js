const express = require('express');
const app = express();
// init
// app.get('/',(req,res)=>{
//     res.send("Bees")
// })
const routes = require('./routes/api');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/api',routes);

module.exports = app;
