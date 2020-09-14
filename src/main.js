import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4rWe-fqTzbphE6p29rYEy6qAPVa2lV8s",
  authDomain: "recipfy.firebaseapp.com",
  databaseURL: "https://recipfy.firebaseio.com",
  projectId: "recipfy",
  storageBucket: "recipfy.appspot.com",
  messagingSenderId: "834275327155",
  appId: "1:834275327155:web:81e8aeafb26f81928b84c6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
