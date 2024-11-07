import './assets/main.css'
import { createMemoryHistory, createRouter } from 'vue-router' 
import { createApp } from 'vue'
import App from './App.vue'


import MainPage from './views/MainPage.vue'
import SettingPage from './views/SettingPage.vue'


const routes = [
    { path: '/', component:  MainPage},
    { path: '/setting', component:  SettingPage},
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

const app = createApp(App);

app.use(router)
app.mount('#app')


