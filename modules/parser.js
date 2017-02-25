const serverNames = [
    {aliases: ["velia2", "velia","ve", "vel"], name: "Velia 2"},
    {aliases: ["balenos2", "balenos", "ba", "bal"], name: "Balenos 2"},
    {aliases: ["serendia2", "serendia", "se", "ser"], name: "Serendia 2"},
    {aliases: ["calpheon2", "calpheon", "ca", "cal"], name: "Calpheon 2"},
    {aliases: ["mediah2", "mediah", "me", "med"], name: "Mediah 2"},
    {aliases: ["valencia2", "valencia", "va", "val"], name: "Valencia 2"},
];


const minuteEndings = ['m', 'min', 'minute', 'minutes'];
const tierStarts = ['tier', 't'];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function fail(value, reason) {
    return {
        success: false,
        reason: reason,
        value: value,
    };
}

function success(value, name) {
    return {
        success: true,
        value: value,
        type: name
    };
}


function parseServer(input){
    const serverInput = input.toLowerCase(input);

    let serverIndex = -1;
    serverNames.every( (s, i) => {
        let foundAlias = false;
        s.aliases.every( n => {
            if( serverInput === n ) {
                foundAlias = true;
                serverIndex = i;
            }
            return !foundAlias;
        });

        return !foundAlias;
    });

    if( serverIndex === -1 )
        return fail(input, `Invalid server alias '${input}'`);

    return success({index: serverIndex, name: capitalizeFirstLetter(serverNames[serverIndex].name)}, 'server');
}

function parseTier(input){
    let tier = input.toLowerCase();

    let tierId = undefined;
    tierStarts.every( ts => {
        if( tier.startsWith(ts) ){
            tierId = tier.replace(ts, '');
            return false;
        }
        return true;
    });


    if( Number.isInteger( Number(tierId) )){
        const n = Number(tierId);
        if( n >= 1 && n <= 8 ){
            return success(tierId, 'tier');
        }
    }
    else if( tierId === '?' ) {
        return success(tierId, 'tier');
    }

    return fail(input, `Tier must be between [1-8] or '?' -> '${input}'. Valid aliases t1, tier?`);
}

function parseMinutes(input){
    let minuteInput = input.toLowerCase();

    let minutes = undefined;
    minuteEndings.every( ending => {
        if( minuteInput.endsWith(ending) ){
            minutes = minuteInput.replace(ending, '');
            return false;
        }
        return true;
    });

    minutes = Number(minutes);

    if( Number.isInteger(minutes) ) {
        if (minutes >= 0 && minutes <= 60) {
            return success(minutes, 'minutes');
        }
    }

    return fail(input, 'Minutes must be between [0-60] (or [0-5] for active registrations). Valid aliases 15m, 20min, 35minutes, 1minute');
}



module.exports = {
    parseTier,
    parseMinutes,
    parseServer,
};