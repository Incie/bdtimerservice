<script>
    import * as timingDialog from './timing-dialog.vue';
    import * as horseRace from './horse-race.vue';
    import * as regionSelect from './region-select.vue';

    module.exports = {
        el: '#bd-app',
        data: {
            region: "eu",
            allRegions: {},
            servernames: [],
            timings: {},
            now: new Date().getTime()
        },
        created: function(){
            window.eventBus = new Vue();
            console.log("loading app");

            this.fetchServerNames();
            let hash = document.location.hash;
            hash = hash.substr(1, hash.length-1);

            if( hash.includes('&submitallowed') ){
                console.log("submitAllowed");
                window.submitAllowed = true;
                hash.replace('&submitallowed', '');
            }

            if( hash !== 'eu' && hash !== 'us' )
                hash = 'eu';
            this.setRegion(hash);
            setInterval( () => this.now = new Date().getTime(), 1000 );
            eventBus.$on('updateTiming', (serverName, pos) => {
                eventBus.$emit('update-dialog', {
                    region: this.region,
                    id: this.servernames.indexOf(serverName),
                    servername: serverName,
                    posX: pos.posX,
                    posY: pos.posY
                });
            });

            eventBus.$on('refresh-timings', () => {
                this.refreshData();
            });

            setInterval(this.refreshData, 15 * 1000);
        },
        components: {
            'timing-dialog': timingDialog,
            'horse-race': horseRace,
            'region-select': regionSelect
        },
        methods: {
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
    }
</script>
<template>
    <span>
        <timing-dialog></timing-dialog>
        <div style="margin-bottom: 15px;">
            <span style="font-size: 150%">Region</span>
            <region-select region="us" :selected-region="region" v-on:new-region="setRegion('us')"></region-select>
            <region-select region="eu" :selected-region="region" v-on:new-region="setRegion('eu')"></region-select>
        </div>
        <div>
            <horse-race class="horseRace bg-info" v-for="(data,i) in timings" :now="now" :data="data" :servername="servernames[i]"></horse-race>
        </div>
    </span>
</template>