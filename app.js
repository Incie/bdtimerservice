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


let app = express();

app.use(morgan(':date[iso] - (HTTP :http-version :status :method) [ip] :remote-addr [time] :response-time[3] ms [response-size] :res[content-length] [url] :url'));

app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '2mb'}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

function getAbsolutePath(relativePath){
    return path.join(__dirname, '/public/', relativePath);
}

const files = {
    index: getAbsolutePath('timers.html'),
};

app.get('/', function(req, res){res.sendFile(files.index);});

app.get('/servernames', function(req, res){
    res.send({
        names:[
            "Velia 2",
            "Balenos 2",
            "Serendia 2",
            "Calpheon 2",
            "Mediah 2",
            "Valencia 2"
        ]
    });
});

app.post('/update', function(req, res){
    const payload = req.body;

    // if( payload.user === 'superadmin' || payload.password === 'hoorayforrolf'){
        db.update(payload.region, payload.serverid, Number(payload.time), payload.horseClass);
    // }

    res.send();
});

app.get('/data', function(req, res) { res.send( db.getAll() ) });
// app.use( '/api', apiRouter );

app.all('*', function(req, res){
    res.status(404).send({message:'The hamster did not find this page in the registry'});
});

const port = (process.env.PORT || 3000);
app.listen(port, function() {
    console.log('Node Server ('+process.version+')');
    console.log('Listening on '+port);
    console.log('Platform: '+process.platform + ' '+process.arch+'('+process.pid+')');
    console.log('cwd: '+process.cwd() );
});