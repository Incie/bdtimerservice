const db = require('./db');

let BotApi = {};

const authorizedChannels = [
    "bot-test",
    "eu_seasoned_race_times",
    "us_seasoned_race_times"
];

const vroomUrl = "https://horsevroomvroom.com:3001";

const serverNames = ["velia 2","balenos 2","serendia 2","calpheon 2","mediah 2","valencia 2"];

const helpTexts = [
    "!race :region :server :tier :time :registration",
    "!race [us|eu] [Velia|Balenos|Serendia|Calpheon|Mediah|Valencia] [Tier?|1|2|3|4|5|6|7|8] [50m] [registration]"
];


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * @return {boolean}
 */
BotApi.IsValidChannel = function(channel){
    return authorizedChannels.indexOf(channel) !== -1;
};

BotApi.HelpTexts = function(){
    return helpTexts;
};

/**
 * @return {string}
 */
BotApi.GetVroomUrl = function(){
    return vroomUrl;
};

/**
 * @return {string}
 */
BotApi.ParseRace = function(botCommand){
    const splits = botCommand.toLowerCase().split(' ');

    if( splits.length !== 5 && splits.length !== 6 ){
        return "Invalid Parameter Count: " + splits.length;
    }

    const region = splits[1];
    if( region !== 'us' && region !== 'eu' ){
        return `Invalid Parameter for 'region': '${region}'`;
    }

    const server = splits[2];
    const serverIndex = serverNames.indexOf( server + " 2");

    if( serverIndex === -1 ){
        return `Invalid Parameter for 'server': ${server}`;
    }

    const tier = splits[3];
    const tierId = Number(tier.replace("tier", ''));
    if (!tier.startsWith("tier") || isNaN(tierId) || (typeof(tierId) !== "number" || tierId < 1 || tierId > 8) && tierId !== '?') {
        return `Invalid Parameter for 'tier': ${tier}[${tierId}]`
    }

    const minuteParameter = splits[4];
    let minutes = minuteParameter.replace('m', '');
    if (Number(minutes) < 0 || Number(minutes) > 60  ) {
        return "Invalid Parameter for 'minutes': " + minutes;
    }


    let registrationActive = false;
    if( splits[5] !== undefined && splits[5] === "registration" ){
        if( Number(minutes) < 0 || Number(minutes) > 5 ){
            return "Invalid value for 'minutes' when parameter 'registration' is specified: " + minutes;
        }

        registrationActive = true;
        minutes -= 5;
    }

    let timestamp = new Date().getTime() + Number(minutes) * 60 * 1000;
    if( this.registrationAvailable )
        timestamp -=  (5 * 60 + 15) * 60 * 1000;


    db.update(region, serverIndex, timestamp, tierId);


    let minuteString = registrationActive ?
                        "registration closes in " + (minutes+5) + "m" :
                        minutes + "m until registration";

    return `${capitalizeFirstLetter(serverNames[serverIndex])}[${region}] with Tier ${tierId} & ${minuteString}`;
};


module.exports = BotApi;