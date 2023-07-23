const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function (req, res) {
    res.render('pages/home')
});

app.get('/links',function (req, res) {
    var items = [
        { name:'node.js',url:'https://nodejs.org/en/' },
        { name:'ejs',url:'https://ejs.co' },
        { name:'expressjs',url:'https://expressjs.com' },
        { name:'vuejs',url:'https://vuejs.org' },
        { name:'nextjs',url:'https://nextjs.org' }
    ];

    res.render('pages/links',{
        links:items
    })
});

app.get('/list',function (req, res) {
    let items = ['node.js','expressjs','ejs','javascript','bootstarp'];
    res.render('pages/list',{
        list:items
    })
});

app.get('/table',function (req, res) {
    const items = [
        { name:'node.js',url:'https://nodejs.org/en/' },
        { name:'ejs',url:'https://ejs.co'},
        { name:'expressjs',url:'https://expressjs.com' },
        { name:'vuejs',url:'https://vuejs.org'},
        { name:'nextjs',url:'https://nextjs.org' }];

    res.render('pages/table',{
        table:items
    })
});

function messages(req,res,next){
    let message;
    res.locals.message = message;
    next();
}

app.get('/form',messages,function (req, res) {
    res.render('pages/form');
});

app.post('/form',function (req, res) {
    let message = req.body;
    res.locals.message = message;
    res.render('pages/form');
});

app.listen(port, () => console.log(`EJS app started on port ${port}...`));
