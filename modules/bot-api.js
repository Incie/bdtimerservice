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
    "!race :channel :tier :time :registration",
    "!race [Velia|Balenos|Serendia|Calpheon|Mediah|Valencia] [Tier?|1|2|3|4|5|6|7|8] [50m] [registration]",
    "Example: !race med t8 60m"
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
BotApi.ParseRace = function(botCommand, channelName){
    
    //Vars for tracking parse progress
    let acquiredRegion = false, acquiredChannel = false, acquiredTier = false, acquiredTime = false, acquiredRegistration = false; 
    
    //Parsed race values
    let region, channelResult, tierResult, minuteResult, registration = false; 

    //Region might be in channelName, so start by checking that (TODO: Is it okay that channel names are hardcoded in here?)
    if(channelName == "eu_seasoned_race_times")
    {
        region = "eu";
        acquiredRegion = true;
    }
    else if (channelName == "na_seasoned_race_info")
    {
        region = "us";
        acquiredRegion = true;
    }

    //Iterate through entire string
    const splits = botCommand.toLowerCase().split(' ');
    let num = 0;
    while(1)
    {
        num++;
        if(num >= splits.length)
            break;
        if(!acquiredRegion)
        {
            if(splits[num] == "us" || splits[num] == "na")
            {
                region = "us";
                acquiredRegion = true;
                continue;
            }
            else if(splits[num] == "eu")
            {
                region = "eu";
                acquiredRegion = true;
                continue;
            }
        }
        if(!acquiredChannel)
        {
            channelResult = parser.parseServer(splits[num])
            if(channelResult.success)
            {
                acquiredChannel = true;
                continue;
            }
        }
        if(!acquiredTier)
        {
            tierResult = parser.parseTier(splits[num])
            if(tierResult.success)
            {
                acquiredTier = true;
                continue;
            }
        }
        if(!acquiredTime)
        {
            minuteResult = parser.parseMinutes(splits[num])
            if(minuteResult.success)
            {
                acquiredTime = true;
                continue;
            }
        }
        if(!acquiredRegistration)
        {
            if(splits[num] == 'registration' || splits[num] == 'reg')
            {
                acquiredRegistration = true;
                registration = true;
                continue;
            }
        }
    }
    
    if(!acquiredRegion || !acquiredChannel || !acquiredTier || !acquiredTime)
    {
        //TODO: Give more information to user
        return "Missing or invalid information in race announcement.";
    }
    
    if(registration == true)
        minuteResult.value -= 5;
    
    let timestamp = new Date().getTime() + Number(minuteResult.value) * 60 * 1000;
    if( this.registrationAvailable )
        timestamp -=  (5 * 60 + 15) * 60 * 1000;
    
    db.update(region, channelResult.value.index, timestamp, tierResult.value);

    let minuteString = registration ?
                        "registration closes in " + (minuteResult.value+5) + "m" :
                        minuteResult.value + "m until registration";
                        
    return `${channelResult.value.name}[${region}] with Tier ${tierResult.value} & ${minuteString}`;
    
/*
    const splits = botCommand.toLowerCase().split(' ');

    if( splits.length !== 5 && splits.length !== 6 ){
        return `Invalid Parameter Count: ${splits.length} -> ${helpTexts[0]}`;
    }

    let region = splits[1];
    if( region !== 'us' && region !== 'eu' && region !== 'na' ){
        return `Invalid Parameter for 'region': '${region}', must be eu or us (or na)`;
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
    */
};


module.exports = BotApi;