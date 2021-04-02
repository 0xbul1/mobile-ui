import Vue from 'vue';
import VueRouter from 'vue-router';
import views from '@/views/views'
Vue.use(VueRouter);
const array = [];
for (let i in views) {
    let view = views[i].default;
    array.push({
        path: view.path,
        name: view.name,
        component: view
    });
}
export default new VueRouter({
    routes: array,
})
