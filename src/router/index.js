import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import PostList from '../views/PostList.vue';
import CreatePost from '../views/CreatePost.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/posts', component: PostList },
  { path: '/create', component: CreatePost }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
