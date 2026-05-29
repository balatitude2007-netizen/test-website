
import '../css/app.css';

import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(MotionPlugin);

app.mount('#app');
