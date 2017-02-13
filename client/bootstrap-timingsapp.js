let vueApp = require('./timing-app.vue');

window.bootstrapTimingsApp = function(){
    window.eventBus = new Vue();
    new Vue(vueApp);
};