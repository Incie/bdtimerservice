let jsonFile = require('jsonfile');

let dbModule = {};

let jsonDbFile = __dirname + '\\' + 'db.json';


const emptyRow = { horseClass: -1, startTime: 0 };
const emptyRegion = [emptyRow,emptyRow,emptyRow,emptyRow,emptyRow,emptyRow];
let dbData = {
    eu: {data:emptyRegion},
    us: {data:emptyRegion}
};

jsonFile.readFile(jsonDbFile, function(err, obj) {
    if( err )
        console.log('error reading data ', err);

    dbData = obj;
    saveDBToFile();
});

function saveDBToFile() {
    jsonFile.writeFile(jsonDbFile, dbData, function(err){
        if( err )
            console.log('write file error', err);
        else console.log('db saved');
    });
}

dbModule.getAll = function() {
    return dbData;
};

dbModule.update = function(region, id, time, horseClass){
    if( id < 0 || id > 5 )
        return;
    if( region != 'eu' && region != 'us' )
        return;
    if( horseClass < 1 || horseClass > 8 )
        return;

    dbData[region].data[id].startTime = time;
    dbData[region].data[id].horseClass = horseClass;
    dbData[region].data[id].registeredTime = new Date().getTime();
    saveDBToFile();
};

module.exports = dbModule;