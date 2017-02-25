const db = require('./db');
const parser = require('./parser');

let BotApi = {};

const authorizedChannels = [
    "bot-test",
    "eu_seasoned_race_times",
    "na_seasoned_race_info"
];

const vroomUrl = `http://horsevroomvroom.com:${process.env.PORT || 3000}`;

const helpTexts = [
    "!race :region :server :tier :time :registration",
    "!race [us|eu] [Velia|Balenos|Serendia|Calpheon|Mediah|Valencia] [Tier?|1|2|3|4|5|6|7|8] [50m] [registration]"
];

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
        return `Invalid Parameter Count: ${splits.length} -> ${helpTexts[0]}`;
    }

    let region = splits[1];
    if( region !== 'us' && region !== 'eu' && region !== 'na' ){
        return `Invalid Parameter for 'region': '${region}', must be eu or us`;
    }

    const serverParameter = splits[2];
    const serverResult = parser.parseServer(serverParameter);
    if( serverResult.success === false ){
        return serverResult.reason;
    }

    const tierParameter = splits[3];
    const tierResult = parser.parseTier(tierParameter);
    if( tierResult.success === false ){
        return tierResult.reason;
    }

    const minuteParameter = splits[4];
    let minuteResult = parser.parseMinutes(minuteParameter);
    if( minuteResult.success === false ){
        return minuteResult.reason;
    }


    let registrationActive = false;
    if( splits[5] !== undefined && splits[5] === "registration" ){
        if( minuteResult.value < 0 || minuteResult.value > 5 ){
            return `Invalid value for 'minutes' when parameter 'registration' is active: ${minuteResult.value}, must be between [0-5]`;
        }

        registrationActive = true;
        minuteResult.value -= 5;
    }

    let timestamp = new Date().getTime() + Number(minuteResult.value) * 60 * 1000;
    if( this.registrationAvailable )
        timestamp -=  (5 * 60 + 15) * 60 * 1000;


    let regionIndex = region;
    if( region === 'na' ) regionIndex = 'us';

    db.update(regionIndex, serverResult.value.index, timestamp, tierResult.value);


    let minuteString = registrationActive ?
                        "registration closes in " + (minuteResult.value+5) + "m" :
                        minuteResult.value + "m until registration";

    return `${serverResult.value.name}[${region}] with Tier ${tierResult.value} & ${minuteString}`;
};


module.exports = BotApi;