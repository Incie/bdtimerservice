function initVue() {
    Vue.component('horse-race', {
        props: ['servername', 'data', 'now'],
        template: '<div class="timingRow"> <h4>{{servername}}</h4> <div><horse-tier v-for="n in 8" :tier="n" :currentTier="data.horseClass"></horse-tier><time-status :now="now" :start="data.startTime" :registered="data.registeredTime"></time-status></div> </div>',
        methods: {
            currentStatus: function (diffInMinutes) {
                if (diffInMinutes > 1)
                    return "Last observed race was";
                else if (diffInMinutes >= -5)
                    return "Registration is currently available and closes";
                else if (diffInMinutes > -10)
                    return "Registration will be available very soon";
                else
                    return "Registration will be available";
            }
        }
    });

    Vue.component('time-status', {
        props: ['start', 'registered', 'now'],
        data: function(){
            return {
                timeLeftInMinutes: 0
            }
        },
        methods: {
            parseTime: function(time){
                if( time < -60 ) return `Last observed race was over ${Math.floor(Math.abs(time / 60))} hours ago`;
                if( time < -5 ) return `Last observed race was ${time} minutes ago`;
                if( time > -5 && time < 0 ) return "registration active";

                return `next race in ${time} minutes`;
            }
        },
        computed: {
            timeLeft: function(){
                let startTime = new Date();
                startTime.setTime(this.start);

                const diffInSeconds = (startTime.getTime() - this.now) / 1000;
                this.timeLeftInMinutes = Math.floor( diffInSeconds / 60 );
                return this.parseTime(this.timeLeftInMinutes);
            },
            cssClass: function(){
                return {
                    'btn-success': (this.timeLeft > 0)
                }
            }
        },
        template: '<div v-bind:class="cssClass" style="font-size: 120%"> {{this.timeLeft}} </div>'
    });

    Vue.component('horse-tier', {
        props: ['currentTier', 'tier'],
        computed: {
            cssClass: function() {
                let condition = (this.currentTier == this.tier);
                console.log(this.currentTier, this.tier, condition);
                return {
                    'btn': true,
                    'btn-primary': !condition,
                    'btn-success': condition
                }
            }
        },
        template: '<span v-bind:class="cssClass" style="padding: 5px 10px">{{tier}}</span>'
    });

    Vue.component('region-select', {
        props: ['region', 'selectedRegion'],
        computed: {
            cssClass: function () {
                let thisRegion = (this.region === this.selectedRegion);
                return {
                    'btn': true,
                    'btn-danger': !thisRegion,
                    'btn-success': thisRegion
                }
            }
        },
        methods: {
            name: function () {
                return this.region.toUpperCase();
            },
            changeRegion: function () {
                this.$emit('new-region');
            }
        },
        template: '<button v-bind:class="cssClass" style="font-size: 125%" @click="changeRegion">{{this.name()}}</button>'
    });

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
                console.log(hash);
                if( hash !== 'eu' && hash !== 'us' )
                    hash = 'eu';
                this.setRegion(hash);
                setInterval( () => this.now = new Date().getTime(), 1000 );
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
                console.log(this.region);
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