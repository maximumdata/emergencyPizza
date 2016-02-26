var express = require('express'),
    path = require('path'),
    http = require('http'),
    yelp = require('node-yelp'),
    app = express(),
    routes = require('./routes/index');

app.set('port', 5089);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 3600000 }));

app.use('/', routes);

var server = http.createServer(app);
server.listen(5089);
