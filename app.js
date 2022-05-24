var express = require('express');
var router = require('./router');
var bodyParser = require('body-parser')

var app = express();

app.use(express.static(__dirname));
app.use('/layui/', express.static('./public/layui'))

app.use(bodyParser.urlencoded({extended:false}))

app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(router);

app.listen(8080,function(){
    console.log('加载中.....');
});