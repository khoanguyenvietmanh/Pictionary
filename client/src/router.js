import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/rooms",
      name: "rooms",
      component: () =>
        import("./views/Rooms.vue")
    },
    {
      path: "/room/:id",
      name: "room",
      component: () =>
        import("./views/Room.vue")
    },
    {
      path: "/shop",
      name: "shop",
      component: () =>
        import("./views/Shop.vue")
    },
    {
      path: "/admin",
      name: "admin",
      component: () =>
        import("./views/Admin.vue")
    },
  ]
});
