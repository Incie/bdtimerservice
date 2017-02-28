<script>
    import * as HorseTierComponent from './horse-tier.vue';
    import * as TimeStatusComponent from './time-status.vue';

    module.exports = {
        components: {
            'horse-tier': HorseTierComponent,
            'time-status': TimeStatusComponent
        },
        computed: {
            horseTier() {
                if( this.now > this.data.startTime + 300 * 1000 )
                    return '?';
                return this.data.horseClass;
            },
            submitEnabled() {
                return this.submitAllowed;
            }
        },
        props: ['servername', 'data', 'now', 'submitAllowed'],
        methods: {
            updateTiming: function (e) {
                let pos = {posX: e.clientX, posY: e.clientY};
                window.eventBus.$emit('updateTiming', this.servername, pos);
            }
        }
    };
</script>

<style>
    .serverHeader {
        border-bottom: 1px solid black;
        width: 90%;
        margin: 5px auto 15px;
    }

    .submitButton {
        position:absolute;
        right: 3px;
        top:3px;
        border-radius: 15px;
    }
</style>

<template>
    <div class="timingRow">
        <h3 class="serverHeader">{{servername}}</h3>
        <div>
            <horse-tier title="Unknown Tier" tier="?" :currentTier="horseTier"></horse-tier>
            <horse-tier v-for="n in 8" :tier="n" :currentTier="horseTier"></horse-tier>
            <time-status :now="now" :start="data.startTime" :registered="data.registeredTime"></time-status>
            <button v-if="submitEnabled" class="btn btn-xs btn-info glyphicon glyphicon-cloud-upload submitButton" @click="updateTiming($event)"></button>
        </div>
    </div>
</template>