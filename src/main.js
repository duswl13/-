import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';

const app = createApp(App);
app.provide('app-message', 'app-message 입니다.');

//v2 버전
//하지만 이건 setup단계에서는 사용하지 못함.
//mount가 된 후에만 사용가능함
app.config.globalProperties.msg = '123';

app.mount('#app');

//전역적으로 등록함
//전역적으로 불러오므로 메모리 차지 높음
//const app = createApp(App);
//app.component('AppCard', AppCard);
//app.mount('#app');

import 'bootstrap/dist/css/bootstrap.min.css';
