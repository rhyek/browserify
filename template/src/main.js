{{#if_eq build "standalone"}}
// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// (also, loading Vue standalone this way breaks vueify, so don't do it)
// This is done with the transform "aliasify". For the config, see package.json
{{/if_eq}}
import Vue from 'vue';
import router from './router';

const App = Vue.extend({});

router.start(App, '#app');
