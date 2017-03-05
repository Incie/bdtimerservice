const db = require('./db');
const parser = require('./parser');

let BotApi = {};

const authorizedChannels = [
    "bot-test",
    "eu-racing_times",
    "na-racing_times"
];

const vroomUrl = `http://horsevroomvroom.com:${process.env.PORT || 3000}`;

const helpTexts = [
    "!race :channel :tier :time :registration",
    "!race [Velia|Balenos|Serendia|Calpheon|Mediah|Valencia] [Tier?|1|2|3|4|5|6|7|8] [50m] [registration]",
    "Example: !race med t8 60m"
];

const pipeline = [
    parser.parseRegion,
    parser.parseMinutes,
    parser.parseServer,
    parser.parseTier,
    parser.parseRegistration
];

function parseParameter(parameter){
    let success = false;
    let result = undefined;
    pipeline.every( func => {
        const parseResult = func(parameter);

        if( parseResult.success === true ){
            result = parseResult;
            success = true;
            return false;
        }

        return true;
    });

    return {
        success: success,
        result: result
    };
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

BotApi.ParseRace = function(botCommand, channelName) {
    let commandData = {
        region: undefined,
        channel: undefined,
        tier: undefined,
        minutes: undefined,
        registration: false
    };

    //Region might be in channelName, so start by checking that (TODO: Is it okay that channel names are hardcoded in here?)
    if (channelName == "eu-racing_times")
        commandData['region'] = 'eu';
    else if (channelName == "na-racing_times")
        commandData['region'] = 'us';

    //Iterate through entire string
    const splits = botCommand.toLowerCase().split(' ');
    let num = 0;
    while (1) {
        num++;
        if (num >= splits.length)
            break;

        let result = parseParameter(splits[num]);

        if( result.success === false && (num+1) < splits.length ){
            result = parseParameter(splits[num] + splits[num+1]);
        }

        if( result !== undefined && result.success === true ){
            if( commandData[result.result.type] === undefined ){
                commandData[result.result.type] = result.result.value;
            }
        }
    }

    for( let key in commandData ){
        if( commandData[key] === undefined ){
            //TODO: Give more information to user
            return {
                reason: `Missing or invalid information in race announcement. '${key}'` ,
                success: false
            };
        }
    }

    if (commandData.registration == true)
        commandData.minutes -= 5;

    return {
        success: true,
        values: commandData
    };
};

/**
 * @return {string}
 */
BotApi.CommitResult = function(values){
    let timestamp = new Date().getTime() + Number(values.minutes) * 60 * 1000;
    if( this.registrationAvailable )
        timestamp -=  (5 * 60 + 15) * 60 * 1000;

    db.update(values.region, values.channel.index, timestamp, values.tier);

    let minuteString = values.registration ?
        "registration closes in " + (values.minutes+5) + "m" :
        values.minutes + "m until registration";

    return `${values.channel.name}[${values.region}] with Tier ${values.tier} & ${minuteString}`;
};

module.exports = BotApi;