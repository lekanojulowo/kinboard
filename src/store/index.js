import Vue from "vue";
import Vuex from "vuex";
import { defaultBoard, saveStatePlugin } from '@/services'
Vue.use(Vuex);

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard;
export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board,
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

  getters: {
    getTask: state => (columnId, taskId) => {
      const curCol = state.board.columns.find(col => col.id === columnId);
      return curCol.tasks.find(task => task.id === taskId);
    }
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