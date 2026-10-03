
const express = require('express');
const app = express();
const adminRoutes = require('./Routes/admin');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);


app.use('/', (req, res, next)=>{
    // console.log("in the middleware"); 
    res.send('<h1>Hello from Express</h1>');
});



 app.listen(3000);