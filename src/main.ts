import { createApp } from 'vue'
import App from './App.vue'
import FontAwesomeIcon from './config/icons'
import './config/registerServiceWorker'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .component('ic', FontAwesomeIcon)
  .mount('#app')
