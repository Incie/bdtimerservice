const Discord = require('discord.js');

const discordClient = new Discord.Client();

const token = '<SNIPPED TOKEN>';

discordClient.on('ready', () => {
    console.log('discord-bot is ready..');
});

discordClient.on('message', message => {
    if( message.content.startsWith('!echo ') ){
        const splicedMessage = message.content.replace('!echo ', '');
        const moderatorRole = message.member.roles.has("283937603345186816");

        if( moderatorRole === true )
            message.channel.sendMessage("Moderator says: " + splicedMessage);
        else
            message.channel.sendMessage("not a mod");
    }
});

function init() {
    discordClient.login(token);
}

module.exports = {
    init: init
};