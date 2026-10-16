const path = require('path');
const express = require('express'); 
//const expressHbs = require('express-handlebars');
const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');
const errorController = require('./controllers/error');


// 1. Initialize express FIRST
const app = express();



// 3: PUG SETUP 
app.set('view engine', 'ejs');
app.set('views', 'views');

// 4. Middleware and Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// 5. Routes import and usage


app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 6. 404 Error Handler
app.use(errorController.error404);

// 7. Start server
app.listen(3000);