import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import './css/GlobalStyle.css';
import vue3GoogleLogin from 'vue3-google-login'
import Vue3Cookies from "vue3-cookies";

const app = createApp(App)

app.use(router) // Use Vue Router
app.use(vue3GoogleLogin, { clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID }) // Use Google OAuth
app.use(Vue3Cookies, {
  expireTime: "1d",
  path: '/',
  domain: '',
  secure: true,
  sameSite: 'None'
})


app.mount('#app')