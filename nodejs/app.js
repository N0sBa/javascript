const express = require('express');
const bodyParser = require('body-parser');
const locationRouters = require('./routes/location');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(locationRouters);

// app.use((req, res, next)=> {
//     res.setHeader('Content-Type', 'text/html');
//     next();
// });

// app.use((req, res, next)=> {
//     console.log(req);
//     const userName = req || 'Unknown user';
//     res.render('index', {
//         user: userName
//     });
// });

app.listen(3000, ()=>{
    console.log("Server listening port:3000");
});