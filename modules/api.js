const path = require('path');
const express = require('express');
const db = require('./db');

let router = express.Router();

function getAbsolutePath(relativePath) {
    return path.join(__dirname, '../public/', relativePath);
}

const files = {
    index: getAbsolutePath('timers.html'),
};

router.get('/', function (req, res) {
    res.sendFile(files.index);
});

const serverNames = {
    names: [
        "Velia 2",
        "Balenos 2",
        "Serendia 2",
        "Calpheon 2",
        "Mediah 2",
        "Valencia 2"
    ]
};
router.get('/servernames', function (req, res) {
    res.send(serverNames);
});

router.post('/update', function (req, res) {
    const payload = req.body;

    if (payload.id < 0 || payload.id > 5)
        res.status(400).send("Invalid serverId: " + payload.id);
    else if(payload.region !== 'eu' && payload.region !== 'us')
        res.status(400).send("Invalid region: " + payload.region);
    else if (Number(payload.horseClass) < 1 || Number(payload.horseClass) > 8 || (typeof(payload.horseClass) !== "number" && payload.horseClass !== '?') )
        res.status(400).send("Invalid horse tier: " + payload.horseClass);
    else if( typeof(payload.time) !== "number" || payload.time === null || payload.time === undefined )
        res.status(400).send("Invalid time");
    else {
        db.update(payload.region, payload.serverid, Number(payload.time), payload.horseClass);
        res.send();
    }
});

router.get('/data', function (req, res) {
    res.send(db.getAll())
});

router.all('*', function (req, res) {
    res.status(404).send({message: 'The hamster did not find this page in the registry'});
    console.log('404 body', req.body);
});

module.exports = router;