// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import { createApp } from 'vue'
// import BootstrapVue from 'bootstrap-vue'
// import { IconsPlugin } from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

// Vue.use(router);

// createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery'; 
import 'bootstrap/dist/css/bootstrap.css';
import './css/GlobalStyle.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// const app = createApp(App)

// app.use(router)

// app.mount('#app')
createApp(App).use(router).mount('#app')
