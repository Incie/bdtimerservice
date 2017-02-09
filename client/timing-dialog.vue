<script>
    module.exports = {
        data: function () {
            return {
                enabled: false,
                server: {},
                tier: 1,
                time: 0
            }
        },
        created: function () {
            eventBus.$on('update-dialog', data => {
                this.server = data;
                this.enabled = true;
            });
        },
        methods: {
            onClose: function () {
                this.enabled = false;
            },
            onSend: function () {
                const payload = {
                    region: this.server.region,
                    serverid: this.server.id,
                    horseClass: this.tier,
//TODO: Only add the extra 5 minutes if a "registration is available" checkbox is unchecked
                    time: new Date().getTime() + seconds(Number(this.time) * 60) + 300000,
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
                }).then(() => {
                    eventBus.$emit('refresh-timings');
                    this.time = 0;
                    this.onClose();
                }).catch(() => alert("failed to send"));
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
</style>

<template>
    <div v-if="enabled" class="outer-dialog">
        <div class="inner-dialog bg-primary">
            <h4>Update race timing for <strong>{{server.servername}} on {{server.region}}</strong></h4>
            <input class="bg-info text-black" type="text" v-model="time" placeholder="number in minutes"><br/>
            <span v-for="n in 8">
                <label><input class="btn btn-info" v-model="tier" type="radio" v-bind:value="n"/>{{n}}</label>
            </span>
            <br/>
            <button class="btn btn-success btn-sm" @click="onSend">Send</button>
            <button class="btn btn-danger btn-sm" @click="onClose">Close</button>
        </div>
    </div>
</template>