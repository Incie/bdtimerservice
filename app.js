/* TODO
- Don't show horse tier highlight after race is over?
*/

let express = require('express');
let path = require('path');
let morgan = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let db = require('./modules/db');
let discordBot = require('./modules/discordbot');

let apiRouter = require('./modules/api.js');

let app = express();

app.use(morgan(':date[iso] - (HTTP :http-version :status :method) [ip] :real-ip [time] :response-time[3] ms [response-size] :res[content-length] [url] :url'));

if( process.env.ENVIRONMENT === "NGINX" )
    morgan.token('real-ip', function(req, res) { return req.headers['x-real-ip']; });
else
    morgan.token('real-ip', function(req, res) { return req.connection.remoteAddress; });


app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '2mb'}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', apiRouter );

const port = (process.env.PORT || 3000);
app.listen(port, function () {
    console.log('Node Server (' + process.version + ')');
    console.log('Listening on ' + port);
    console.log('Platform: ' + process.platform + ' ' + process.arch + '(' + process.pid + ')');
    console.log('cwd: ' + process.cwd());

    console.log('Initializing discordbot.. ');
    discordBot.init();
});