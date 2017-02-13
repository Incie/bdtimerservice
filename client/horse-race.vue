<script>
    import * as HorseTierComponent from './horse-tier.vue';
    import * as TimeStatusComponent from './time-status.vue';

    module.exports = {
        components: {
            'horse-tier': HorseTierComponent,
            'time-status': TimeStatusComponent
        },
        computed: {
            submitAllowed: function(){
                return window.submitAllowed;
            }
        },
        props: ['servername', 'data', 'now'],
            methods: {
            updateTiming: function (e) {
                let pos = {posX: e.clientX, posY: e.clientY};
                eventBus.$emit('updateTiming', this.servername, pos);
            }
        }
    }
</script>

<template>
    <div class="timingRow"><h4>{{servername}}</h4>
        <div>
            <horse-tier title="Unknown Tier" tier="?" :currentTier="data.horseClass"></horse-tier>
            <horse-tier v-for="n in 8" :tier="n" :currentTier="data.horseClass"></horse-tier>
            <time-status :now="now" :start="data.startTime" :registered="data.registeredTime"></time-status>
            <button v-if="submitAllowed" style="position:absolute; right: 3px; top:3px; border-radius: 15px;" class="btn btn-xs btn-info glyphicon glyphicon-cloud-upload" @click="updateTiming($event)"></button>
        </div>
    </div>
</template>