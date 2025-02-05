import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PostCreateView from '@/views/posts/PostCreateView.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import PostListView from '@/views/posts/PostListView.vue'
import NotFound from '@/views/NotFound.vue'
import Nested from '@/views/nested/Nested.vue'
import NestedOne from '@/views/nested/NestedOne.vue'
import NestedTwo from '@/views/nested/NestedTwo.vue'
import NestedHomeView from '@/views/nested/NestedHomeView.vue'

const routes = [
  {
    path: '/',
    name: "Home",
    component: HomeView
  },
  {
    path: '/about',
    name: "About",
    component: AboutView
  },
  {
    path: '/posts',
    name: "PostList",
    component: PostListView
  },
  {
    path: '/posts/create',
    name: "PostCreate",
    component: PostCreateView
  },
  {
    path: '/posts/:id',
    name: "PostDetailView",
    component: PostDetailView,
    props: true,
  },
  {
    path: '/posts/:id/edit',
    name: "PostEdit",
    component: PostEditView
  },

  // will match everything and put it under `$route.params.pathMatch`
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },

  {
    path:'/nested',
    name:'Nested',
    component: Nested,

    children:[
      {
        path:'',
        name:'NestedHome',
        component: NestedHomeView,
      },
      {
        path:'one',
        name:'NestedOne',
        component: NestedOne,
      },
      {
        path:'two',
        name:'NestedTwo',
        component: NestedTwo,
      }
    ]
  },


];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
