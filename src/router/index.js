import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import PostList from '../views/PostList.vue';
import CreatePost from '../views/CreatePost.vue';
import UserProfile from '../components/UserProfile.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/posts', component: PostList },
  { path: '/create', component: CreatePost },
  { path: '/perfil', name: 'UserProfile', component: UserProfile }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
