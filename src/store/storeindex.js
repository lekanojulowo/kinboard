import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carts: [],
    products: [{
        id: 1,
        name: 'Shoe Lachet',
        price: 2000,
        src: 'baby',
        qty: 1,
        incart: false,
      },
      {
        id: 2,
        name: 'Shoe Polish',
        price: 1000,
        src: 'album',
        qty: 1,
        incart: false,
      },
      {
        id: 3,
        name: 'Shoe Rack',
        price: 5000,
        src: 'archive',
        qty: 1,
        incart: false,
      },
    ]
  },
  mutations: {
    ADD_TO_CART(state, item) {
      // Object.isObject(item) && state.carts.push(item)
      const idx = state.carts.findIndex((val) => (val.id == item.id));
      idx !== -1 ? state.carts[idx].qty += 1 : state.carts.push(item)
    }
  },
  actions: {
    addCart({ commit }, item) {
      commit('ADD_TO_CART', item)
    }
  },
  modules: {}
});