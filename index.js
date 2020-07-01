var express = require('express'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  colorRouter = require('./routes/color'),

  
    app = express(),
    port = process.env.PORT || 3000;
 
    app.get('/', (req, res) => {
        res.send('Hello world !');
        
    });

app.listen(port, () => {
    console.log('Server started on: ' + port);
});

  
app = express(),
server = require('http').createServer(app),
io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.use((request, response, next) => {

    request.io = io

    request.isFrench = () => {
        return (request.headers['accept-language'] && request.headers['accept-language'].includes('fr'))
    }

    next()

})

app.use(session({
  secret: 'hayek mathieu',
  cookie: {},
  resave: false,
  saveUninitialized: false
}))

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.use(colorRouter)
