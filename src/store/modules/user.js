import firebase from 'firebase/app';
import 'firebase/auth'

class User {
  constructor(id) {
    this.id = id;
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    registerUser({ commit }, { email, password }) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          commit('setUser', new User(userCredential.uid));
        })
        .catch((error) => {
          console.log(error.message);
        })
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  }
}