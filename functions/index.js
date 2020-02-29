const functions = require('firebase-functions');
const express = require('express');
const app = express();
app.use(express.static('public'))
var hbs  = require('express-handlebars');

app.engine('hbs', hbs({
    partialsDir   : __dirname +'/views/partials',
    defaultLayout : __dirname +'/views/layouts/main',
    extname       : '.hbs',
    layoutsDir    : __dirname +'/views/layouts',
    helpers:{
        "seed": () => "z2z7"
    }
}));
app.set("views", "./views");
app.set("view engine", 'hbs');
app.get('/', (req, res) => {
    let assets = {
        path: "/dist/assets/",
        css:[
            "/dist/assets/css/bundle.css"
        ],
        js:[
            "/dist/assets/js/bundle.js",
            "https://kit.fontawesome.com/2c7ccbb05b.js"
        ]
    };
    res.render("index", {
        assets,
        hotjar:true
    });
});

exports.app = functions.https.onRequest(app);
