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
    async registerUser({ commit }, { email, password }) {
      commit('clearError');
      commit('setLoading', true);

      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);

        throw error;
      }
    },
    async loginUser({ commit }, { email, password }) {
      commit('clearError');
      commit('setLoading', true);

      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);

        throw error;
      }
    },
    autoLogIn({ commit }, payload) {
      commit('setUser', new User(payload.uid));
    },
    logoutUser({ commit }) {
      firebase.auth().signOut().then(() => {
        commit('setUser', null);
      });
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isUserLoggedIn(state) {
      return state.user !== null;
    }
  }
}