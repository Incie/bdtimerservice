const Discord = require('discord.js');
const botApi = require('./bot-api');

const discordClient = new Discord.Client();

const token = process.env.TOKENBOT;

discordClient.on('ready', () => {
    console.log('discord-bot is ready..');
});

discordClient.on('message', message => {
    if( message.author.bot === true )
        return;

    if( !botApi.IsValidChannel(message.channel.name) )
        return;

    /** TODO: Authorize Roles **/


    /** Parse Command **/

    // tokenize
     //foreach token

    if( message.content === "!cmd" || message.content === "!command" || message.content === "!race" || message.content === "!help" ){
        botApi.HelpTexts().forEach(t => message.channel.sendMessage(t) );
        return;
    }

    else if( message.content === "!link" ){
        message.channel.sendMessage(botApi.GetVroomUrl());
        return;
    }

    else if( message.content.startsWith('!race ') ){
        console.log(`Race Command from '${message.author.username}': '${message.content}'`);
        const response = botApi.ParseRace(message.content, message.channel.name);
        message.channel.sendMessage(message.member.displayName+ ": " + response);
    }
});

function init() {
    discordClient.login(token);
}

module.exports = {
    init: init
};