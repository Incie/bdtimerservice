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

    if( message.content === "!cmd" || message.content === "!command" || message.content === "!race" || message.content === "!help" ){
        botApi.HelpTexts().forEach(t => message.channel.sendMessage(t) );
    }
    else if( message.content === "!link" ){
        message.channel.sendMessage(botApi.GetVroomUrl());
    }
    else if( message.content.startsWith('!race ') ){
        console.log(`Race Command from '${message.author.username}': '${message.content}'`);
        const response = botApi.ParseRace(message.content, message.channel.name);
        if( response.success === true ){
            const responseMessage = botApi.CommitResult(response.values);
            message.channel.sendMessage(`${message.member.displayName}: ${responseMessage}`);
        } else {
            message.channel.sendMessage(`${message.member.displayName}: ${response.reason}`);
        }
    }
});

function init() {
    discordClient.login(token);
}

module.exports = {
    init: init
};