const Discord = require('discord.js');
const db = require('./db');

const discordClient = new Discord.Client();

const token = process.env.TOKENBOT;

discordClient.on('ready', () => {
    console.log('discord-bot is ready..');
});

discordClient.on('message', message => {
    if( message.author.bot === true )
        return;

    if( message.channel.name !== "bot-test" )
        return;

    /** Authorize **/
     // channel == seasoned_eu_race && role == eu_race_timing
    //or
    // channel == seasoned_us_race && role == us_race_timing

    /** Parse Command **/

    // tokenize
     //foreach token

    if( message.content === "!cmd" || message.content === "!command" || message.content === "!race" || message.content === "!help" ){
        message.channel.sendMessage("!race :region :server :tier :time :registration");
        message.channel.sendMessage("!race [us|eu] [Velia|Balenos|Serendia|Calpheon|Mediah|Valencia] [Tier?|1|2|3|4|5|6|7|8] [50m] [optional:registration]");
        message.channel.sendMessage("[Notes: I am very sensitive to case, so e.g. 'Tier' is not the same as 'tier']");
        return;
    }

    else if( message.content === "!link" ){
        message.channel.sendMessage("https://rolfdev.net");
        return;
    }

    else if( message.content.startsWith('!race ') ){
        const moderatorRole = message.member.roles.has("283937603345186816");

        if( moderatorRole === false ) {
            message.channel.sendMessage("Apologies, but only moderators may register races");
            return;
        }

        const splits = message.content.split(' ');

        if( splits.length !== 5 && splits.length !== 6 ){
            message.channel.sendMessage("Invalid Parameter Count: " + splits.length);
            return;
        }
        const serverNames = ["Velia 2","Balenos 2","Serendia 2","Calpheon 2","Mediah 2","Valencia 2"];

        const region = splits[1];

        if( region !== 'us' && region !== 'eu' ){
            message.channel.sendMessage("Invalid Parameter for 'region': " + region);
            return;
        }

        const server = splits[2];
        const serverIndex = serverNames.indexOf( server + " 2");

        if( serverIndex === -1 ){
            message.channel.sendMessage("Invalid Parameter for 'server': " + server);
            return;
        }

        const tier = splits[3];
        const tierId = tier.replace("Tier", '');
        if ( tier.startsWith("Tier") && (Number(tierId) < 1 || Number(tierId) > 8) && tierId !== '?' ) {
            message.channel.sendMessage(`Invalid Parameter for 'tier': ${tier}[${tierId}]`);
            return;
        }

        const minuteParameter = splits[4];
        let minutes = minuteParameter.replace('m', '');
        if (Number(minutes) < 0 || Number(minutes) > 60  ) {
            message.channel.sendMessage("Invalid Parameter for 'minutes': " + minutes);
            return;
        }


        if( splits[5] !== undefined && splits[5] === "registration" ){
            if( Number(minutes) < 0 || Number(minutes) > 5 ){
                message.channel.sendMessage("Invalid value for 'minutes' when parameter 'registration' is specified: " + minutes);
                return;
            }

            minutes -= 5;
        }

        let timestamp = new Date().getTime() + Number(minutes) * 60 * 1000;
        if( this.registrationAvailable )
            timestamp -=  (5 * 60 + 15) * 60 * 1000;


        db.update(region, serverIndex, timestamp, tierId);

        message.channel.sendMessage(`User ${message.author.username} just updated ${serverNames[serverIndex]}[${region}] with Tier ${tierId} & ${minutes}m left` )
    }
});

function init() {
    discordClient.login(token);
}

module.exports = {
    init: init
};