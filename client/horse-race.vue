<script>
    import * as HorseTierComponent from './horse-tier.vue';
    import * as TimeStatusComponent from './time-status.vue';

    module.exports = {
        components: {
            'horse-tier': HorseTierComponent,
            'time-status': TimeStatusComponent
        },
        props: ['servername', 'data', 'now'],
            methods: {
            updateTiming: function () {
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
    }
</script>

<template>
    <div class="timingRow"><h4>{{servername}}</h4>
        <div>
            <horse-tier v-for="n in 8" :tier="n" :currentTier="data.horseClass"></horse-tier>
            <time-status :now="now" :start="data.startTime" :registered="data.registeredTime"></time-status>
            <button style="position:absolute; right: 3px; top:3px; border-radius: 15px;" class="btn btn-xs btn-info glyphicon glyphicon-cloud-upload" @click="updateTiming"></button>
        </div>
    </div>
</template>