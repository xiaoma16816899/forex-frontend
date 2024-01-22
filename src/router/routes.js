export default [
  {
    name: "Home",
    path: "/",
    component: import('./../pages/home/home.vue'),
    redirect: "home",
    children: [
        {
            name:'home',
            path:'/home',
            component: import('./../pages/home/home.vue'),
        }
    ],
  },
];
