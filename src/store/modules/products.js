import firebase from 'firebase/app';
import 'firebase/database';

class Product {
  constructor(
    title,
    vendor,
    color,
    material,
    price,
    description,
    ownerId,
    imageSrc = '',
    promo = false,
    id = null
  ) {
    this.title = title;
    this.vendor = vendor;
    this.color = color;
    this.material = material;
    this.price = price;
    this.description = description;
    this.ownerId = ownerId;
    this.imageSrc = imageSrc;
    this.promo = promo;
    this.id = id;
  }
}

export default {
  state: {
    products: []
  },
  mutations: {
    createProduct(state, payload) {
      state.products.push(payload);
    },
    loadProducts(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    async createProduct({ commit, getters }, payload) {
      commit('clearError');
      commit('setLoading', true);
      
      try {
        const item = new Product(
          payload.title,
          payload.vendor,
          payload.color,
          payload.material,
          payload.price,
          payload.description,
          getters.user.id,
          payload.imageSrc,
          payload.promo
        );
        const product = await firebase.database().ref('products').push(item);

        commit('createProduct', { ...item, id: product.key });
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);

        throw error;
      }
    },
    async fetchProducts({ commit }) {
      let resultProducts = [];

      commit('clearError');
      commit('setLoading', true);

      try {
        const dbData = await firebase.database().ref('products').once('value');
        const products = dbData.val();

        Object.keys(products).forEach(key => {
          const product = products[key];

          resultProducts.push(new Product(
            product.title,
            product.vendor,
            product.color,
            product.material,
            product.price,
            product.description,
            product.ownerId,
            product.imageSrc,
            product.promo,
            key
          ))
        });

        commit('loadProducts', resultProducts);
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }
    }
  },
  getters: {
    products(state) {
      return state.products;
    },
    promoProducts(state) {
      return state.products.filter(item => item.promo)
    },
    myProducts(state) {
      return state.products;
    },
    productById(state) {
      return productId => {
        return state.products.find(product => product.id === productId);
      }
    }
  }
}