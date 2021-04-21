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
  mutations: {
    loadOrders(state, payload) {
      state.orders = payload;
    }
  },
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
    },
    async fetchOrders({ commit, getters }) {
      commit('setLoading', true);
      commit('clearError');

      try {
        const ordersData = await firebase.database().ref(`/users/${getters.user.id}`).child('orders').once('value');
        const orders = ordersData.val();
        let resultOrders = [];

        if (orders) {
          Object.keys(orders).forEach(key => {
            const order = orders[key];
            resultOrders.push(new Order(order.name, order.phone, order.productId, order.done, key));
          });
        }

        commit('loadOrders', resultOrders);
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }
    },
    async markOrderDone({ commit, getters }, payload) {
      commit('clearError');
      
      try {
        await firebase.database().ref(`/users/${getters.user.id}/orders/${payload}`).update({
          done: true
        });
      } catch (error) {
        commit('setError', error.message);
        throw error;
      }
    }
  },
  getters: {
    doneOrders(state) {
      return state.orders.filter(order => order.done);
    },
    undoneOrders(state) {
      return state.orders.filter(order => !order.done);
    },
    orders(state, getters) {
      return getters.undoneOrders.concat(getters.doneOrders);
    }
  }
}