import Vue from 'vue';
import Vuex from 'vuex';
import aboutStore from './aboutStore/aboutStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    aboutModule: aboutStore,
  },
});
