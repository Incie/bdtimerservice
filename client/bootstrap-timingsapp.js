let vueApp = require('./timing-app.vue');

window.bootstrapTimingsApp = function(){
    new Vue(vueApp);
};