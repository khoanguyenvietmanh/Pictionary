import Vue from "vue";
import VueSocketIO from "vue-socket.io";
import VueSweetAlert from "vue-sweetalert2";
import router from "./router.js";
import App from "./App.vue";
import Colors from "./styles/variables.scss";
import "./registerServiceWorker";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

// Bulma
import "./styles/index.scss";

Vue.config.productionTip = false;

// Vue + Socket.io
Vue.use(
  new VueSocketIO({
    debug: false,
    connection: "https://charadesio.herokuapp.com/",
    //connection: "http://localhost:5050",
  })
);

// SweetAlert2
Vue.use(VueSweetAlert, {
  confirmButtonColor: Colors.primary,
  cancelButtonColor: Colors.light,
});

// Initializing
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
