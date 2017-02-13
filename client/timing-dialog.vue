<script>
    import * as RadioButtonComponent from './radio-button.vue';

    module.exports = {
        props: ['submitAllowed'],
        data: function () {
            return {
                enabled: false,
                server: {},
                tier: 1,
                minutes: undefined,
                posX: 0,
                posY: 0
            }
        },
        components: {
            'radio-button': RadioButtonComponent
        },
        computed: {
            isEnabled: function(){
                return this.enabled && this["submitAllowed"];
            },
            positioning: function(){
                let style = {
                    right: (window.innerWidth - this.posX) +  'px'
                };

                if( this.posY > window.innerHeight * 0.5 ){
                    style['bottom'] = (window.innerHeight - this.posY) + 'px';
                }
                else
                    style['top'] = this.posY + 'px';
                return style;
            }
        },
        created: function () {
            eventBus.$on('update-dialog', data => {
                this.server = data;
                this.enabled = true;
                this.posX = data.posX;
                this.posY = data.posY;
            });
        },
        methods: {
            radio: function(newTierValue){
                this.tier = newTierValue;
            },
            onClose: function () {
                this.enabled = false;
            },
            prevent: function(e) {
                e.preventDefault();
                e.stopPropagation();
            },
            secondsToMilliseconds: function(seconds){
                return 1000 * seconds;
            },
            onSend: function () {
                if( this.minutes === undefined )
                    return;

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
                this.tier = n;
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
    <div v-if="isEnabled" class="outer-dialog" @click="onClose">
        <div class="inner-dialog bg-primary text-danger" v-bind:style="positioning" @click="prevent($event)">
            <h4>Update race timing for <strong style="font-size: 140%">{{server.servername}} on {{server.region}}</strong></h4>
            <div style="margin:5px">
                Minutes until race
                <div>
                    <input style="padding: 4px;" class="minutes" type="text" v-model="minutes" placeholder="[0-60]"><br/>
                </div>
            </div>
            <div style="margin:5px">
                Horse-Tier
                <div>
                    <radio-button @radioupdate="radio" value="?" :groupvalue="tier"></radio-button>
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