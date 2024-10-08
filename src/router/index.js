import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import PostList from '../views/PostList.vue';
import CreatePost from '../views/CreatePost.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/posts', component: PostList },
  { path: '/create', component: CreatePost }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
