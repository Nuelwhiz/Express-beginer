const path = require('path');
const express = require('express');
//const expressHbs = require('express-handlebars');

// 1. Initialize express FIRST
const app = express();

// 2. Template engine setup (handlebars)
// Note: Use expressHbs.engine() if you are on express-handlebars v4+
//app.engine('handlebars', expressHbs.engine ? expressHbs.engine() : expressHbs());
//app.set('view engine', 'handlebars');
//app.set('views', 'views');

// 3: PUG SETUP 
app.set('view engine', 'ejs');
app.set('views', 'views');

// 4. Middleware and Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// 5. Routes import and usage
const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

// 6. 404 Error Handler
app.use((req, res, next) => {
    res.status(404).render('not-found', { pageTitle: "Page Not Found" });
});

// 7. Start server
app.listen(3000);