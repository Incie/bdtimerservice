let morgan = require('morgan');
let rfs = require('rotating-file-stream');

const logFormat = ':date[iso] - (HTTP :http-version :status :method) [ip] :real-ip [time] :response-time[3] ms [response-size] :res[content-length] [url] :url';
let logOptions = {};

if( process.env.LOG === 'file' ) {
    console.log("LOGGING TO FILE");
    logOptions.stream = rfs("access.log", {path: 'logs/', interval: '1d'});
} else {
    console.log("LOGGING TO CONSOLE");
}

if( process.env.ENVIRONMENT === "DEVELOPMENT" ){
    console.log('Setting DEVELOPMENT session configs');
    morgan.token('real-ip', function(req, res) { return req.connection.remoteAddress; });
} else {
    morgan.token('real-ip', function(req, res) { return req.headers['x-real-ip']; });
}

let logger = morgan(logFormat, logOptions);
module.exports = logger;
