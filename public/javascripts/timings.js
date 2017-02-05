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

let refreshTimeout = undefined;

function refreshTimings(){
    if( refreshTimeout !== undefined ){
        clearTimeout(refreshTimeout);
        refreshTimeout = undefined;
    }

    fetch('/data')
        .then( response => response.json() )
        .then( json => {
            updateTimings(json);
            refreshTimeout = setTimeout(refreshTimings, seconds(15) );
        } );
}

function radioValue(name){
    let elements = document.getElementsByName(name);

    let checkedValue = "none";
    elements.forEach( e => {
        if( e.checked )
            checkedValue = e.value;
    });
    return checkedValue;
}

function elementValue(id){
    return document.getElementById(id).value;
}

function sendTimingUpdate(){
    let region = radioValue("update-region");
    let serverid = radioValue("update-serverid");
    let horseclass = radioValue("update-horseclass");
    let time = elementValue("update-time");

    const payload = {
        region: region,
        serverid: serverid,
        horseClass: horseclass,
        //TODO: Only add the extra 5 minutes if a "registration is available" checkbox is unchecked
        time: new Date().getTime() + seconds( Number(time) * 60) + 300000,
        // user: elementValue('update-user'),
        // password: elementValue('update-password'),
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

        const diffInMilliseconds = new Date().getTime() - date.getTime();
        let diffInMinutes = Math.floor((diffInMilliseconds / 1000) / 60);
        let curStatusString = currentStatus(diffInMinutes);
        let timeSpanString = timeSpanInMinutes(diffInMinutes);

        //Commenting out some information to make it look tidier
        //let text = createDiv(serverNames.names[i], "(ID:"+i+')', "timingServer")
        let text = simpleDiv(serverNames.names[i], "timingServer")
        text += createHorseClassDiv(e.horseClass);
        text += createDiv('', curStatusString + timeSpanString /*+ ' (' + formatDate(date)+')'*/ );

        /*
        if( e.registeredTime != undefined ){
            let registeredTime = new Date();
            registeredTime.setTime(e.registeredTime);

            let milliseconds = new Date().getTime() - registeredTime.getTime();
            let minutes = Math.floor((milliseconds / 1000) / 60);
            text += simpleDiv(`Registered ${minutes} minutes ago`);
        }
        */

        regionElement.innerHTML += '<div class="timingRow">' + text + '</div>';
    });
}

function createHorseClassDiv(horseClass){
    let data = '';
    for( let i = 1; i <= 8; i += 1 ){
        let className = 'btn-info';
        if( i == horseClass )
            className = 'btn-danger';

        data += `<span style="padding: 3px; border-radius: 4px; margin: 6px 2px;" class="${className}">${i}</span>`;
    }

    return `<div style="margin: 2px;">Tier: ${data}</div>`;
}

function createDiv(type, text, className){
    let divStartTag = '<div>';
    if( className !== undefined )
        divStartTag = '<div class=' + className + '>';

    let e = `<span style="width:50%; padding-right: 5px;">${type}</span>`;
    e += `<span style="width:50%">${text}</span>`;
    return divStartTag + e + '</div>';
}

function simpleDiv(text, className){
    return `<div class=${className}>${text}</div>`;
}

function currentStatus(diffInMinutes){
    if( diffInMinutes > 1 )
        return simpleDiv("Last observed race was");
    else if( diffInMinutes > -5 )
        return simpleDiv("Registration is currently available and closes", "btn-warning");
    else if( diffInMinutes > -10 )
        return simpleDiv("Registration will be available very soon", "btn-primary");
    else
        return simpleDiv("Registration will be available", "btn-success");
}

function timeSpanInMinutes(diffInMinutes){
    if( diffInMinutes < 1 ){
        let minutesLeft = diffInMinutes * -1;

        let className = "btn-success";

        if( minutesLeft < 5 )
            className = "btn-warning";
        else if( minutesLeft < 10 )
            className = "btn-primary";
            
        if( minutesLeft > 5 )
            minutesLeft = minutesLeft - 5;

        if( minutesLeft < 1 )
            return simpleDiv(`in less than 1 minute`, className);
        else
            return simpleDiv(`in ${minutesLeft} minutes`, className);
    }

    return simpleDiv(diffInMinutes + " minutes ago"); //Removed colour to make it less distracting. An unavailable race should draw no one's attention.
}

function formatDate(date){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"];
    return `${date.getFullYear()}-${monthNames[date.getMonth()]}-${date.getDate()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}