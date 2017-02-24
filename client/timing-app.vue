<script>
    import * as timingDialog from './timing-dialog.vue';
    import * as horseRace from './horse-race.vue';
    import * as regionSelect from './region-select.vue';
    import * as K from 'konami-js';

    module.exports = {
        el: '#bd-app',
        data: {
            submitAllowed: false,
            region: "eu",
            allRegions: {},
            servernames: [],
            timings: {},
            now: new Date().getTime()
        },
        created: function () {
            this.fetchServerNames();
            this.handleHash();

            new K.default( () => this.submitAllowed = true );

            window.onhashchange = this.handleHash;

            setInterval(this.updateTime, 1000);

            window.eventBus.$on('updateTiming', (serverName, pos) => {
                window.eventBus.$emit('update-dialog', {
                    region: this.region,
                    id: this.servernames.indexOf(serverName),
                    servername: serverName,
                    posX: pos.posX,
                    posY: pos.posY
                });
            });

            window.eventBus.$on('refresh-timings', () => {
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
            handleHash: function () {
                let hash = document.location.hash;
                hash = hash.substr(1, hash.length - 1);

				this.submitAllowed = false;

                if (hash !== 'eu' && hash !== 'us')
                    hash = 'eu';
                this.setRegion(hash);
            },
            updateTime: function () {
                this.now = new Date().getTime();
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
                if (this.allRegions[this.region] === undefined) return;
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
    };
</script>
<template>
    <span>
        <!--<timing-dialog :submit-allowed="submitAllowed"></timing-dialog>-->
        <div style="margin-bottom: 15px;">
            <span style="font-size: 150%">Region</span>
            <region-select region="us" :selected-region="region" v-on:new-region="setRegion('us')"></region-select>
            <region-select region="eu" :selected-region="region" v-on:new-region="setRegion('eu')"></region-select>
        </div>
        <div>
            <horse-race class="horseRace bg-info" v-for="(data,i) in timings" :now="now" :data="data" :submit-allowed="submitAllowed" :servername="servernames[i]"></horse-race>
        </div>
    </span>
</template>