<script>
    module.exports = {
        props: ['start', 'registered', 'now'],
        data: function () {
            return {
                timeLeftInMinutes: 0
            };
        },
        methods: {
            minutesToHours: function (minutes) {
                return Math.floor(Math.abs(minutes / 60));
            },
            parseTime: function (minutes) {
                if (minutes < -600) return `Over ${this.minutesToHours(5 + minutes)} hours ago`;
				else if (minutes < -5) {
					let nextEstimatedRace = 71 - (Math.abs(5 + minutes) % 71);
					if (minutes < -120) return `${this.minutesToHours(5 + minutes)} hours ago (Next estimated race in ${nextEstimatedRace} minutes)`;
					else if (minutes < -5) return `${Math.abs(5 + minutes)} minutes ago (Next estimated race in ${nextEstimatedRace} minutes)`;		
				}
                else if (minutes >= -5 && minutes <= 0) return `${5 - Math.abs(minutes)} minutes`;
				return `${minutes} minutes`;
            },
            currentStatus: function (diffInMinutes) {
                if (diffInMinutes < -5 )
                    return "Last observed race was";
                else if (diffInMinutes <= 0 )
                    return "Registration is available and closes in";
                else if (diffInMinutes < 10)
                    return "Registration will be available very soon";
                else
                    return "Registration will be available in";
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
            secondaryStatus: function(){
                let startTime = new Date();
                startTime.setTime(this.start);
                const diffInSeconds = (startTime.getTime() - this.now) / 1000;
                this.timeLeftInMinutes = Math.floor(diffInSeconds / 60);

                return this.currentStatus(this.timeLeftInMinutes);
            },
            cssClass: function () {
                return {
                    'btn-success': (this.timeLeftInMinutes > 5),
                    'btn-warning': (this.timeLeftInMinutes >= -5 && this.timeLeftInMinutes <= 5)
                };
            }
        }
    };
</script>
<template>
    <div v-bind:class="cssClass" style="border-radius: 20px; margin: 6px auto; padding: 2px; left: 5%; width: 90%; font-size: 120%">
        <div>{{this.secondaryStatus}}</div>
        <div><strong>{{this.timeLeft}}</strong></div>
    </div>
</template>

