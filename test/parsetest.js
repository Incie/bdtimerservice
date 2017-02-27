const parser = require('./../modules/parser');
const testdata = require('./parsetestdata');

function tierTest(input) {
    return parser.parseTier(input);
}

console.log('----------------------- TESTING TIER ------------------------');

testdata.tierTestData.forEach(t =>{
    const testResult = tierTest(t.value);
    if( testResult.success !== t.expect )
        console.log(`FAILED TEST '${testResult.reason}' -[ ${JSON.stringify(t)}` );
});

console.log('-- TEST DONE --');
console.log('----------------------- TESTING MINUTES ------------------------');

function minuteTest(input){
    return parser.parseMinutes(input);
}

testdata.minuteTestData.forEach( m => {
    const testResult = minuteTest(m.value);
    if( testResult.success !== m.expect )
        console.log(`FAILED TEST '${testResult.reason}' -[ ${JSON.stringify(m)}` );
} );

console.log('-- TEST DONE --');
console.log('----------------------- TESTING SERVER ------------------------');

function serverTest(input){
    return parser.parseServer(input);
}

testdata.serverTestData.forEach( s => {
    const testResult = serverTest(s.value);
    if( testResult.success !== s.expect || (testResult.success === true && testResult.value.name !== s.expectValue) )
        console.log(`FAILED TEST '${testResult.reason}' -[ ${JSON.stringify(s)}` );
} );

console.log('-- TEST DONE --');

