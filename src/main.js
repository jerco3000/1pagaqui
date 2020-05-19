import Vue from 'vue'
import App from './App.vue'

//import axios from 'axios'
//import VueAxios from 'vue-axios'

//axios.defaults.baseURL = 'http://127.0.0.1:3001/';

import Ionic from "@ionic/vue"
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"

// ******* global variable ********
//Vue.prototype.$axios = axios

// ********************************



//********* icons begin **********
/*
const formatString = (string) => {
  return string.includes("ios")
      ? string
          .replace(/ios/, "")
          .match(/[A-Z][a-z]+/g)
          .join("-")
          .toLowerCase()
      : string.includes("md")
          ? string
              .replace(/md/, "icons")
              .match(/[A-Z][a-z]+/g)
              .join("-")
              .toLowerCase()
          : "";
};

import * as allIcons from "ionicons/icons";
import { addIcons } from "ionicons";

const currentIcons = Object.keys(allIcons).map((i) => {
  return {
    ["ios-" + formatString(i)]: allIcons[i],
    ["md-" + formatString(i)]: allIcons[i],
  };
});
const iconsObject = Object.assign({}, ...currentIcons);
addIcons(iconsObject);
*/
//****   icons end     ********




Vue.config.productionTip = false
//Vue.use(Ionic, VueAxios, axios);
Vue.use(Ionic);

// router
import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

const router = new IonicVueRouter({
  routes: [
    { path: "/", redirect: "/sucursal" },
    {
      path: "/sucursal",
      name: "sucursal",
      component: () =>
          import(/* webpackChunkName: "home" */ "@/components/Sucursal"),
    },
    {
      path: "/barcode1",
      name: "barcode1",
      component: () =>
          import(/* webpackChunkName: "home" */ "@/components/Barcode1"),
    },
    {
      path: "/barcode2",
      name: "barcode2",
      component: () =>
          import(/* webpackChunkName: "home" */ "@/components/Barcode2"),
    },
    {
      path: "/home",
      name: "home",
      component: () =>
          import(/* webpackChunkName: "home" */ "@/components/HomePage"),
    },
    {
      path: "/new-item",
      name: "new-item",
      component: () =>
          import(/* webpackChunkName: "new-item" */ "@/components/NewItemPage"),
    },
    {
      path: "/form0",
      name: "form0",
      component: () =>
          import(/* webpackChunkName: "form0" */ "@/components/Form0"),
    },
    {
      path: "/ForgotPasswordModal",
      name: "ForgotPasswordModal",
      component: () =>
          import(/* webpackChunkName: "form0" */ "@/components/ForgotPasswordModal"),
    },
    {
      path: "/axiosexample",
      name: "axiosexample",
      component: () =>
          import(/* webpackChunkName: "form0" */ "@/components/Axiosexample"),
    }
  ]
});



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
