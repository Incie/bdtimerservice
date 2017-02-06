Vue.component('horse-race', {
    props: ['prop'],
    template: '<div> {{prop}} </div>'
});


function initVue() {
    var timingapp = new Vue({
        el: '#bd-app',
        data: {
            meow: [1, 2, 3, 4, 5, 6, 7],
            message0: "myaa",
            message1: "myee",
            servernames: [],
            timing: {}
        },
        methods: {
            init: function(){
                console.log("abc");
            },
            refreshRaceData: function(){

            },
            click: function(){
                for( let i = 0; i < this.meow.length; i += 1 )
                    Vue.set(this.meow, i, this.meow[i] + 1);

                this.message0 += "0";
                this.message1 += "0";
            }
        }
    });

    timingapp.init();
}