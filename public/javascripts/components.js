console.log('loading components');


Vue.component('horse-race', {
    props: ['servername', 'data', 'now'],
    template: '<div class="timingRow"> <h4>{{servername}}</h4> <div><horse-tier v-for="n in 8" :tier="n" :currentTier="data.horseClass"></horse-tier><time-status :now="now" :start="data.startTime" :registered="data.registeredTime"></time-status><button style="position:absolute; right: 3px; top:3px; border-radius: 15px;" class="btn btn-xs btn-info glyphicon glyphicon-cloud-upload" @click="updateTiming"></button></div></div>',
    methods: {
        updateTiming: function(){
            eventBus.$emit('updateTiming', this.servername);
        },
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
        minutesToHours: function(minutes){
            return Math.floor(Math.abs( minutes / 60 ));
        },
        parseTime: function(minutes){
            if( minutes < -60 ) return `Last observed race was over ${this.minutesToHours(minutes)} hours ago`;
            if( minutes < -5 ) return `Last observed race was ${minutes} minutes ago`;
            if( minutes > -5 && minutes < 0 ) return "registration active";

            return `next race in ${minutes} minutes`;
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
            return {
                'btn': true,
                'btn-primary': !condition,
                'btn-success': condition,
                'horse-tier': true
            }
        }
    },
    template: '<span v-bind:class="cssClass">{{tier}}</span>'
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

Vue.component('timing-dialog', {
    data: function(){
        return {
            enabled: false,
            server: {},
            tier: 1,
            time: 0
        }
    },
    created: function(){
        eventBus.$on('update-dialog', data => {
            this.server = data;
            this.enabled = true;
        });
    },
    methods: {
        onClose: function(){
            this.enabled = false;
        },
        onSend: function(){
            const payload = {
                region: this.server.region,
                serverid: this.server.id,
                horseClass: this.tier,
                //TODO: Only add the extra 5 minutes if a "registration is available" checkbox is unchecked
                time: new Date().getTime() + seconds( Number(this.time) * 60) + 300000,
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
                eventBus.$emit('refresh-timings');
                this.time = 0;
                this.onClose();
            }).catch( () => alert("failed to send") );
        }
    },
    template: '<div v-if="enabled" class="outer-dialog"><div class="inner-dialog"><h4>Update race timing for {{server.servername}} on {{server.region}}<strong></strong> </h4><input type="text" v-model="time" placeholder="number in minutes"><br/> <span style="padding-right: 5px;" v-for="n in 8"><input v-model="tier" type="radio" v-bind:value="n">{{n}}</input></span><br/><button @click="onSend">Send</button><button @click="onClose">Close</button></div></div>'
});