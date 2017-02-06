Vue.component('horse-race', {
    props: ['servername', 'data'],
    template: '<div> <h4>{{servername}}</h4> Tier {{data.horseClass}}, start {{data.startTime}}  reg {{data.registeredTime}} </div>'
});

function initVue() {
    var timingapp = new Vue({
        el: '#bd-app',
        data: {
            region: "eu",
            servernames: [],
            timings: {}
        },
        methods: {
            init: function () {
                this.fetchServerNames();
            },
            fetchServerNames: function () {
                fetch('/servernames')
                    .then(r => r.json())
                    .then(jsonResponse => {
                        this.servernames = jsonResponse.names;
                        this.refreshData();
                    });
            },
            refreshData: function(){
                fetch('/data')
                    .then(r => r.json())
                    .then(jsonResponse => {
                        this.timings = jsonResponse[this.region].data;
                    });
            }
        }
    });

    timingapp.init();
}