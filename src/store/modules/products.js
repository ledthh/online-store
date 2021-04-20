import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

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
    },
    updateProduct(state, payload) {
      const product = state.products.find(item => {
        return payload.id === item.id;
      });

      product.title = payload.title;
      product.description = payload.description;
    }
  },
  actions: {
    async createProduct({ commit, getters }, payload) {
      const image = payload.image;

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
          '',
          payload.promo
        );
        const product = await firebase.database().ref('products').push(item);
        const imgExt = image.name.slice(image.name.lastIndexOf('.'));
        const filename = product.key + imgExt.Ext;
        const fileData = await firebase.storage().ref(`products/${filename}`).put(image);
        const imageSrc = await firebase.storage().ref(fileData.ref.fullPath).getDownloadURL();

        await firebase.database().ref('products').child(product.key).update({ imageSrc });

        commit('createProduct', { ...item, id: product.key, imageSrc });
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);

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
    },
    async updateProduct({ commit }, payload) {
      commit('clearError');
      commit('setLoading', true);

      try {
        await firebase.database().ref('products').child(payload.id).update({
          title: payload.title,
          description: payload.description
        });

        commit('updateProduct', payload);
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