<script>
    module.exports = {
        props: ['start', 'registered', 'now'],
        data: function () {
            return {
                timeLeftInMinutes: 0
            }
        },
        methods: {
            minutesToHours: function (minutes) {
                return Math.floor(Math.abs(minutes / 60));
            },
            parseTime: function (minutes) {
                if (minutes < -60) return `Last observed race was over ${this.minutesToHours(minutes)} hours ago`;
                if (minutes < -5) return `Last observed race was ${Math.abs(minutes)} minutes ago`;
                if (minutes > -5 && minutes < 0) return "Registration active";

                return `Next race in ${minutes} minutes`;
            }
        },
        computed: {
            timeLeft: function () {
                let startTime = new Date();
                startTime.setTime(this.start);

                const diffInSeconds = (startTime.getTime() - this.now) / 1000;
                this.timeLeftInMinutes = Math.floor(diffInSeconds / 60);
                return this.parseTime(this.timeLeftInMinutes);
            },
            cssClass: function () {
                return {
                    'btn-success': (this.timeLeftInMinutes >= 0),
                    'btn-warning': (this.timeLeftInMinutes >= -5 && this.timeLeftInMinutes < 0)
                }
            }
        }
    }
</script>
<template>
    <div v-bind:class="cssClass" style="border-radius: 20px; margin: 6px auto; padding: 2px; left: 5%; width: 90%; font-size: 120%">
        {{this.timeLeft}}
    </div>
</template>

