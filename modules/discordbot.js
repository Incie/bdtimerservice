const Discord = require('discord.js');
const logging = require('./logging');
const botApi = require('./bot-api');

function init() {
    console.log('discordbot init called...');
    logging.winston.info('discordbot init called...');

    let discordClient = new Discord.Client();

    discordClient.on('ready', () => {
        console.log('discord-bot is ready..');
    });

    discordClient.on('error', error => {
        logging.winston.error(`error happen ${error}`);
        console.log(`error happen ${error}`);
    });

    discordClient.on('disconnect', closeEvent => {
        logging.winston.error(`disconnect happen ${JSON.stringify(closeEvent)}`);
        console.log(`disconnect happen ${JSON.stringify(closeEvent)}`);

        setTimeout(() => {
            logging.winston.log('destroying current client..');
            discordClient.destroy().then(() => {
                logging.winston.warn('client destroyed');
                init();
            }).catch((e) => logging.winston.error('destroy failed..' + JSON.stringify(e)));
        }, 5000);
    });

    discordClient.on('message', message => {
        if( message.author.bot === true )
            return;

        if( !botApi.IsValidChannel(message.channel.name) )
            return;

        if( message.content === "!cmd" || message.content === "!command" || message.content === "!race" || message.content === "!r" || message.content === "!help" ){
            botApi.HelpTexts().forEach(t => message.channel.sendMessage(t) );
        }
        else if( message.content === "!link" ){
            message.channel.sendMessage(botApi.GetVroomUrl());
        }
        else if( message.content.startsWith('!race ') || message.content.startsWith('!r ') ){
            console.log(`Race Command from '${message.author.username}': '${message.content}'`);
            logging.winston.log(`Race Command from '${message.author.username}': '${message.content}'`);

            const response = botApi.ParseRace(message.content, message.channel.name);
            if( response.success === true ){
                const responseMessage = botApi.CommitResult(response.values);
                message.channel.sendMessage(`${message.member.displayName}: ${responseMessage}`);
            } else {
                message.channel.sendMessage(`${message.member.displayName}: ${response.reason}`);
            }
        }
    });

    discordClient.login(process.env.TOKENBOT).then(s => console.log(s));
}

module.exports = {
    init: init
};