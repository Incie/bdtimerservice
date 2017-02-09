require('./components.js');

console.log("loading app");

window.eventBus = new Vue();
window.initAppz = initVue;

function initVue() {
    let timingapp = new Vue({
        el: '#bd-app',
        data: {
            region: "eu",
            allRegions: {},
            servernames: [],
            timings: {},
            now: new Date().getTime()
        },
        methods: {
            init: function () {
                this.fetchServerNames();
                let hash = document.location.hash.substr(1, 2);
                if( hash !== 'eu' && hash !== 'us' )
                    hash = 'eu';
                this.setRegion(hash);
                setInterval( () => this.now = new Date().getTime(), 1000 );
                eventBus.$on('updateTiming', abc => {
                    eventBus.$emit('update-dialog', {
                        region: this.region,
                        id: this.servernames.indexOf(abc),
                        servername: abc
                    });
                });

                eventBus.$on('refresh-timings', () =>{
                    this.refreshData();
                });
            },
            fetchServerNames: function () {
                fetch('/servernames')
                    .then(r => r.json())
                    .then(jsonResponse => {
                        this.servernames = jsonResponse.names;
                        this.refreshData();
                    });
            },
            setRegion: function (newRegion) {
                this.region = newRegion;
                document.location.hash = this.region;

                this.updateTimings();
            },
            updateTimings: function () {
                if( this.allRegions[this.region] === undefined ) return;
                this.timings = this.allRegions[this.region].data;
            },
            refreshData: function () {
                fetch('/data')
                    .then(r => r.json())
                    .then(jsonResponse => {
                        this.allRegions = jsonResponse;
                        this.updateTimings();
                    });
            }
        }
    });

    timingapp.init();
}