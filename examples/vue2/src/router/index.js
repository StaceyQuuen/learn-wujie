const routes = [
  {
    path: "/communication",
    name: "communication",
    component: () => import(/* webpackChunkName: "mode" */ "../views/CommunicationView.vue"),
  },
  {
    path: "/mode",
    name: "mode",
    // route level code-splitting
    // this generates a separate chunk (mode.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "mode" */ "../views/ModeView.vue"),
  },
  {
    path: "/jump",
    name: "jump",
    component: () => import(/* webpackChunkName: "jump" */ "../views/JumpView.vue"),
  },
  {
    path: "/share",
    name: "share",
    component: () => import(/* webpackChunkName: "share" */ "../views/ShareView.vue"),
  },
];

export default routes;
