import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedCountryCode: {
        name: "IND",
        flag: "em-flag-in",
        id:2
      }
  },
  mutations: {
    setCountryCode(state,selectedCountryCode) {
        console.log('selectedCountryCode',state);
      state.selectedCountryCode = selectedCountryCode;
    }
  },
  actions: {
    setCountryCode(context,payload) {
     context.commit('setCountryCode',payload);
    }
  },
  getters: {
    selectedCountryCode: state =>state.selectedCountryCode
  }
});
