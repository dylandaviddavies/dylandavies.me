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
        "seed": () => "098023476716319"
    }
}));
app.set("views", "./views");
app.set("view engine", 'hbs');
app.get('/', (req, res) => {
    let assets = {
        path: "/dist/index/assets/",
        css:[
            "/dist/index/assets/css/bundle.min.css"
        ],
        js:[
            "/dist/index/assets/js/bundle.min.js",
            "https://kit.fontawesome.com/2c7ccbb05b.js"
        ]
    };
    res.render("index", {
        assets,
        hotjar:true
    });
});
app.get('/design3', (req, res) => {
    res.render("design3", {        
        assets:{
            path: "/dist/design3/assets/",
            css:[
                "/dist/design3/assets/css/bundle.min.css"
            ],
            js:[
                "/dist/design3/assets/js/bundle.min.js"
            ]
        }
    });
});

exports.app = functions.https.onRequest(app);
