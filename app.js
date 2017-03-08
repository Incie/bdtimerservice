/* TODO
- Don't show horse tier highlight after race is over?
*/

let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let db = require('./modules/db');
let discordBot = require('./modules/discordbot');

let logger = require('./modules/logging');
let apiRouter = require('./modules/api.js');

let app = express();

app.use(logger);

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

    if( process.env.DISCORDBOT === "ENABLE" ){
        discordBot.init();
    } else {
        console.log("Discord Bot Disabled [DISCORDBOT !== 'enable']");
    }
});