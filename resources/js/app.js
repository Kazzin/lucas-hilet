/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

window.Vue = require('vue');

/**
 * Element UI.
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
let locale = require(`element-ui/lib/locale/lang/${process.env.MIX_APP_LANG}`).default;
Vue.use(ElementUI, { locale })

/**
 * Vue Router.
 */
import VueRouter from 'vue-router';
import routes from '@/routes/index.js';
Vue.use(VueRouter);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

/**
 * Here we create a wrapper to the console.log method. The method will print the input only if the
 * environment  is in debug mode. Otherwise, does nothing.
 */
console.debuglog = function(text) {
    if(process.env.MIX_APP_DEBUG) console.log('[DEBUG]', text);
}

/**
 * The process.env object contains all the variables that starts with MIX_ in the .env file.
 * If one of those variables is changed, it will be required to re-compile the assets.
 * If the assets are beeing compiled using the watch|hot process, it's required to restart the process too.
 */
console.debuglog("(app.js) App is in DEBUG mode!");

/**
 * Next, we will create a fresh Vue application instance and attach it to the page.
 * Also, we define the root component of the application and set it as the template of the application.
 */
Vue.component('vue-app', require('./App.vue').default);

new Vue({
    el: '#app',
    template: '<vue-app/>',
    router: new VueRouter({
        routes
    }),
});
