<script>
    import * as RadioButtonComponent from './radio-button.vue';

    module.exports = {
        data: function () {
            return {
                enabled: false,
                server: {},
                tier: 1,
                minutes: undefined
            }
        },
        components: {
            'radio-button': RadioButtonComponent
        },
        created: function () {
            eventBus.$on('update-dialog', data => {
                this.server = data;
                this.enabled = true;
            });
        },
        methods: {
            radio: function(newTierValue){
                this.tier = newTierValue;
            },
            onClose: function () {
                this.enabled = false;
            },
            secondsToMilliseconds: function(seconds){
                return 1000 * seconds;
            },
            onSend: function () {
                const payload = {
                    region: this.server.region,
                    serverid: this.server.id,
                    horseClass: this.tier,
                    //TODO: Only add the extra 5 minutes if a "registration is available" checkbox is unchecked
                    time: new Date().getTime() + this.secondsToMilliseconds( Number(this.minutes) * 60),
                };

                fetch("/update", {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(payload)
                }).then(() => {
                    eventBus.$emit('refresh-timings');
                    this.time = 0;
                    this.onClose();
                }).catch(() => alert("failed to send"));
            },
            onTier: function(n){
                this.tierz = n;
                console.log('onTier', n);
            }
        }
    };
</script>

<style>
    .outer-dialog {
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.1);
        position: fixed;
        left: 0;
        width: 100%;
        top: 0;
        height: 100%;
    }

    .inner-dialog {
        position: absolute;
        border-radius: 4px;
        border: 1px solid black;
        left: 50%;
        top: 50%;
        right: 50%;
        width: 50%;
        min-width: 200px;
        max-width: 400px;
    }

    .radio {
        padding-right: 5px;
    }

    .minutes {
        background-color: black;
        color: white;
        border-radius: 5px;
        border: 1px solid gray;
    }
</style>

<template>
    <div v-if="enabled" class="outer-dialog">
        <div class="inner-dialog bg-primary text-danger">
            <h4>Update race timing for <strong style="font-size: 140%">{{server.servername}} on {{server.region}}</strong></h4>
            <div style="margin:5px">
                Minutes until race
                <div>
                    <input style="padding: 4px;" class="minutes" type="text" v-model="minutes" placeholder="[0-99]"><br/>
                </div>
            </div>
            <div style="margin:5px">
                Horse-Tier
                <div>
                <span v-for="t in 8">
                    <radio-button @radioupdate="radio" :value="t" :groupvalue="tier"></radio-button>
                </span>
                </div>
            </div>
            <div style="margin:5px">
            <button class="btn btn-success btn-sm" @click="onSend">Send</button>
            <button class="btn btn-danger btn-sm" @click="onClose">Close</button>
            </div>
        </div>
    </div>
</template>