/* TODO
- Don't show horse tier highlight after race is over?
- Add a "?" option to horse tier selection (we can 0 as unknown for horse tier) which makes it possible to submit a race time without knowing horse tier.
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

if( process.env.ENVIRONMENT === "DEVELOPMENT" ){
    console.log('Setting DEVELOPMENT session configs');
    morgan.token('real-ip', function(req, res) { return req.connection.remoteAddress; });
} else {
    morgan.token('real-ip', function(req, res) { return req.headers['x-real-ip']; });
}

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