import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import EditContact from '../components/contacts/EditContact.vue';
import AddContact from '../components/contacts/AddContact.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/contacts/:id',
		name: 'EditContact',
		component: EditContact,
	},
	{
		path: '/contact/add',
		name: 'AddContact',
		component: AddContact,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
