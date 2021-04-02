import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

/*添加插件入口*/
import plugin from '../src/components/plugins'
for(let i in plugin){
  Vue.use(plugin[i].default);
}

/*注册个公共头部*/
import header from '../src/components/header/header'
Vue.component('comHeader', header);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');