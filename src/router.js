import { createRouter,createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/Home")
  },
  {
    name: "AboutPage",
    path: "/about-me",  
    component: () => import("@/views/About")
  },
  {
    name: "DetailPage",
    path: "/details",   
    component: () => import("@/views/Details")
  },
  {
    name: "JobPage",
    path: "/job", 
    component: () => import("@/views/Job")
  },
  {
    name: "JobDetails",
    path: "/JobDetails/:id/:title",
    props:true,
    component: () => import("@/views/JobDetails")
  },

  //catch 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import("@/views/Page404")
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
