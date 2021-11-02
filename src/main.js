import { createApp } from 'vue';
import VeeValidatePlugin from './includes/validations';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';
import { auth } from './includes/firebase';

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router)
      .use(VeeValidatePlugin)
      .mount('#app');
  }
});
