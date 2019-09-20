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
        "seed": () => "1231kjdawdawkdb"
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
            "/dist/index/assets/js/bundle.min.js"
        ]
    };
    res.render("index", {
        assets,
        works: [
            {
                name: "Design 3",
                bg: assets.path + "/img/design3.png",
                href:"/design3"
            },
            {
                name: "Design 2",
                bg: assets.path + "/img/design2.png",
                href:"/design2"
            },
            {
                name: "Design 1",
                bg: assets.path + "/img/design1.png",
                href:"/design1"
            },
        ]
    });
});
app.get('/design1', (req, res) => {
    res.render("design1", {        
        assets:{
            path: "/dist/design1/assets/",
            css:[
                "/dist/design1/assets/css/bundle.min.css"
            ],
            js:[
                "/dist/design1/assets/js/bundle.min.js",
                "https://kit.fontawesome.com/2c7ccbb05b.js"
            ]
        }
    });
});
app.get('/design2', (req, res) => {
    res.render("design2", {        
        assets:{
            path: "/dist/design2/assets/",
            css:[
                "/dist/design2/assets/css/bundle.min.css"
            ],
            js:[
                "/dist/design2/assets/js/bundle.min.js",
                "https://kit.fontawesome.com/2c7ccbb05b.js"
            ]
        }
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
