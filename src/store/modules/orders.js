import firebase from 'firebase/app';
import 'firebase/database';

class Order {
  constructor(name, phone, productId, done = false, id = null) {
    this.name = name;
    this.phone = phone;
    this.productId = productId;
    this.done = done;
    this.id = id;
  }
}

export default {
  state: {
    orders: []
  },
  mutations: {},
  actions: {
    async purchaseOrder({ commit }, { name, phone, productId, ownerId }) {
      const order = new Order(name, phone, productId);
      
      commit('clearError');
      
      try {
        await firebase.database().ref(`/users/${ownerId}/orders`).push(order);
      } catch (error) {
        commit('setError', error.message);
        throw error;
      }
    }
  },
  getters: {}
}