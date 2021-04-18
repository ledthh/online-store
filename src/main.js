import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import dbConfig from '@/dbConfig'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp(dbConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLogIn', user);
      }
    });
    this.$store.dispatch('fetchProducts');
  }
}).$mount('#app')
