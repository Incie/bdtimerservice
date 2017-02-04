let serverNames = {};
function initApp(){

    fetch('/servernames')
        .then( response => response.json() )
        .then( jsonServerNames => {
            serverNames = jsonServerNames;
            refreshTimings();
        }).catch( e => alert("Failed to fetch servernames"));
}

function seconds(s){
    return 1000 * s;
}

function refreshTimings(){
    fetch('/data')
        .then( response => response.json() )
        .then( json => {
            updateTimings(json);
            setTimeout(refreshTimings, seconds(15) );
        } );
}

function elementValue(id){
    return document.getElementById(id).value;
}

function sendTimingUpdate(){
    let region = elementValue("update-region");
    let serverid = elementValue("update-serverid");
    let horseclass = elementValue("update-horseclass");
    let time = elementValue("update-time");

    const payload = {
        region: region,
        serverid: serverid,
        horseClass: horseclass,
        time: new Date().getTime() + seconds( Number(time) * 60),
        user: elementValue('update-user'),
        password: elementValue('update-password'),
    };

    fetch("/update", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(payload)
    }).then( () => {
        refreshTimings();
    });
}

function updateTimings(data){
    updateRegionData(document.getElementById("timings-eu"), data.eu);
    updateRegionData(document.getElementById("timings-us"), data.us);
}

function updateRegionData(regionElement, regionData){
    regionElement.innerHTML = "";
    regionData.data.forEach( (e,i) => {
        let date = new Date();
        date.setTime(e.startTime);

        let timeSpanString = timeSpanInMinutes(date);

        let text = createDiv(serverNames.names[i], "(ID:"+i+')', "timingServer") + createHorseClassDiv(e.horseClass) + createDiv('Time', timeSpanString + ' (' + formatDate(date)+')' );
        regionElement.innerHTML += '<div class="timingRow">' + text + '</div>';
    });
}

function createHorseClassDiv(horseClass){
    let data = '';
    for( let i = 1; i <= 8; i += 1 ){
        let className = 'btn-warning';
        if( i == horseClass )
            className = 'btn-success';

        data += '<span style="padding: 3px; border-radius: 4px; margin: 2px;" class="'+className+'">' + i + '</span>';
    }

    return '<div style="margin: 2px;">'+data+'</div>';
}

function createDiv(type, text, className){
    let divStartTag = '<div>';
    if( className !== undefined )
        divStartTag = '<div class=' + className + '>';

    let e = '<span style="width:50%; padding-right: 5px;">' + type + '</span>';
    e += '<span style="width:50%">' + text + '</span>';
    return divStartTag + e + '</div>';
}

function simpleDiv(text, className){
    return "<div class="+className+">"+text+"</div>";
}

function timeSpanInMinutes(date){
    const diff = new Date().getTime() - date.getTime();
    const diffInMinutes = Math.floor((diff / 1000) / 60);

    if( diffInMinutes < 1 ){
        let className = "btn-success";
        if( diffInMinutes > -10 ) className = "btn-warning";
        return simpleDiv("in " + (diffInMinutes * -1) + "minutes", className);
    }


    return simpleDiv(diffInMinutes + " minutes ago", "btn-danger");
}

function formatDate(date){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dev"];
    return date.getFullYear() + '-' + monthNames[date.getMonth()] + '-' + date.getDate() + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}