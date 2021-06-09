import { createApp } from 'vue';

import router from './router/router.js';
import App from './App.vue';
import i18n from './plugins/i18n.js';
import store from './store/index.js'

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(store);
app.mount("#app");
