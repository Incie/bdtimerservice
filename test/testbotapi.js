const botApi = require('./../modules/bot-api');

const data = [
    {value: "!race 61 m t ? valencia 2", expect: false},
    {value: "!race va t? 5m", expect: true},
    {value: "!race valencia 2 tier ? 5 min", expect: true},
    {value: "!race t ? 5 m val", expect: true},
    {value: "!race 5 m t ? val", expect: true},
    {value: "!race va t? 5m reg", expect: true},
    {value: "!race va t? 5m registration", expect: true},
    {value: "!race va 5m t?", expect: true},
    {value: "!race va 5m t1", expect: true},
    {value: "!race va 5m t2", expect: true},
    {value: "!race 5m t3 va", expect: true},
    {value: "!race va t0 5m", expect: false},
    {value: "!race va t1 banana", expect: false},
    {value: "!race va t1 banana milkshake smoothie strawberry meow 5m", expect: true},
    {value: "!race va reg t1 banana milkshake smoothie strawberry meow 5m", expect: true},
    {value: "!race reg va t1 banana milkshake smoothie strawberry meow 5m", expect: true},
];

const channels = ["eu_seasoned_race_times", "na_seasoned_race_info"];

console.log('---testing---');
data.forEach( command => {
    channels.forEach( channel => {
        const result = botApi.ParseRace(command.value, channel);
        if( result.success !== command.expect ){
            console.log(`Expected ${command.expect} but was ${result.success} - Failed Test '${channel}' ::: '${JSON.stringify(command)}' :: '${JSON.stringify(result)}'` );
        }
    });
});
console.log(' --done-- ');