function initApp(){
    refreshTimings();
}

function refreshTimings(){
    fetch('/data')
        .then( response => response.json() )
        .then( updateTimings );
}

function updateTimings(data){
    updateRegionData(document.getElementById("timings-eu"), data.eu);
    updateRegionData(document.getElementById("timings-us"), data.us);
}

function updateRegionData(regionElement, regionData){
    regionElement.innerHTML = "";
    regionData.data.forEach( (e,i) => {
        let text = 'Server: ' + i + '  class: ' + e.horseClass + '  time: ' + e.startTime;
        let div = '<div>' + text + '</div>';
        regionElement.innerHTML += div;
    });
}