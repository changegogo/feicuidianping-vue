import VueRouter from 'vue-router'
import Vue from 'vue'
// 组件
import Enter from './components/enter/Enter'
import AreaSchool from './components/areaschool/AreaSchool'

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Enter
		},
		{
			path: '/areaschool',
			component: AreaSchool
		}
	]
});
