const parser = require('./../modules/parser');

function tierTest(input) {
    return parser.parseTier(input);
}


const tierTestData = [
    {value: " ", expect: false},
    {value: "NaN", expect: false},
    {value: "", expect: false},
    {value: "t0", expect: false},
    {value: "t1", expect: true},
    {value: "t2", expect: true},
    {value: "t3", expect: true},
    {value: "t4", expect: true},
    {value: "t5", expect: true},
    {value: "t6", expect: true},
    {value: "t7", expect: true},
    {value: "t8", expect: true},
    {value: "t9", expect: false},
    {value: "t?", expect: true},
    {value: "t19", expect: false},
    {value: "tabcba", expect: false},
    {value: "tier0", expect: false},
    {value: "tier1", expect: true},
    {value: "tier2", expect: true},
    {value: "tier3", expect: true},
    {value: "tier4", expect: true},
    {value: "tier5", expect: true},
    {value: "T5", expect: true},
    {value: "Tier5", expect: true},
    {value: "TIER5", expect: true},
    {value: "TiEr5", expect: true},
    {value: "tier6", expect: true},
    {value: "tier7", expect: true},
    {value: "tier8", expect: true},
    {value: "tier9", expect: false},
    {value: "tierz5", expect: false},
    {value: "tier?", expect: true},
    {value: "tier55", expect: false},
    {value: "tier-1", expect: false},
    {value: "tier77", expect: false},
    {value: "tier9999", expect: false},
    {value: "0", expect: false},
    {value: "meow0", expect: false},
    {value: "tiermeow", expect: false}
];

console.log('----------------------- TESTING TIER ------------------------\n');

tierTestData.forEach(t =>{
    const testResult = tierTest(t.value);
    if( testResult.success !== t.expect )
        console.log(`FAILED TEST '${testResult.reason}' -[ ${JSON.stringify(t)}` );
});

console.log('-- TEST DONE --');
console.log('----------------------- TESTING MINUTES ------------------------\n');

function minuteTest(input){
    return parser.parseMinutes(input);
}

const minuteTestData = [
    {value:'', expect: false},
    {value:' ', expect: false},
    {value:'123', expect: false},
    {value:'2', expect: false},
    {value:'1m', expect: true},
    {value:'60m', expect: true},
    {value:'1min', expect: true},
    {value:'24min', expect: true},
    {value:'66min', expect: false},
    {value:'66m', expect: false},
    {value:'m66', expect: false},
    {value:'55m', expect: true},
    {value:'55M', expect: true},
    {value:'55MIN', expect: true},
    {value:'55MiN', expect: true},
    {value:'55Min', expect: true},
    {value:'55MiNuTeS', expect: true},
    {value:'55MiNuTe', expect: true},
    {value:'55MINUTE', expect: true},
    {value:'55n', expect: false},
    {value:'55s', expect: false},
    {value:'55l', expect: false},
    {value:'1minute', expect: true},
    {value:'2minutes', expect: true},
    {value:'-55m', expect: false},
    {value:'-1minutes', expect: false},
    {value:'1239812ajksdjkasfd', expect: false},
    {value:'1239812ajksdjkasfdminutes', expect: false},
    {value:'1239812ajksdjkasfdm', expect: false}
];

minuteTestData.forEach( m => {
    const testResult = minuteTest(m.value);
    if( testResult.success !== m.expect )
        console.log(`FAILED TEST '${testResult.reason}' -[ ${JSON.stringify(m)}` );
} );

console.log('-- TEST DONE --');



console.log('----------------------- TESTING SERVER ------------------------\n');

function serverTest(input){
    return parser.parseServer(input);
}

const serverTestData = [
    {expectValue: 'Velia 2', value:'velia2', expect: true},
    {expectValue: 'Velia 2', value:'velia', expect: true},
    {expectValue: 'Velia 2', value:'ve', expect: true},
    {expectValue: 'Velia 2', value:'vel', expect: true},
    {expectValue: 'Serendia 2', value:'serendia2', expect: true},
    {expectValue: 'Serendia 2', value:'serendia', expect: true},
    {expectValue: 'Serendia 2', value:'ser', expect: true},
    {expectValue: 'Serendia 2', value:'se', expect: true},
    {expectValue: 'Balenos 2', value:'balenos2', expect: true},
    {expectValue: 'Balenos 2', value:'balenos', expect: true},
    {expectValue: 'Balenos 2', value:'bal', expect: true},
    {expectValue: 'Balenos 2', value:'ba', expect: true},
    {expectValue: 'Calpheon 2', value:'calpheon2', expect: true},
    {expectValue: 'Calpheon 2', value:'calpheon', expect: true},
    {expectValue: 'Calpheon 2', value:'cal', expect: true},
    {expectValue: 'Calpheon 2', value:'ca', expect: true},
    {expectValue: 'Mediah 2', value:'mediah2', expect: true},
    {expectValue: 'Mediah 2', value:'mediah', expect: true},
    {expectValue: 'Mediah 2', value:'med', expect: true},
    {expectValue: 'Mediah 2', value:'me', expect: true},
    {expectValue: 'Valencia 2', value:'valencia2', expect: true},
    {expectValue: 'Valencia 2', value:'valencia', expect: true},
    {expectValue: 'Valencia 2', value:'val', expect: true},
    {expectValue: 'Valencia 2', value:'va', expect: true},
    {expectValue: 'Valencia 2', value:'VA', expect: true},
    {expectValue: 'Valencia 2', value:'vA', expect: true},
    {expectValue: 'Velia 2', value:'vE', expect: true},
    {value:'Va_', expect: false},

    {value:'meoww', expect: false},
    {value:'', expect: false},
    {value:' ', expect: false},
    {value:'  ', expect: false},
    {value:'sevU(IQ#WERT)(154jnacvLKJASDF', expect: false},
];

serverTestData.forEach( s => {
    const testResult = serverTest(s.value);
    if( testResult.success !== s.expect || (testResult.success === true && testResult.value.name !== s.expectValue) )
        console.log(`FAILED TEST '${testResult.reason}' -[ ${JSON.stringify(s)}` );
} );

console.log('-- TEST DONE --');

