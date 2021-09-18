import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedCountryCode: {
        name: "IND",
        flag: "em-flag-in",
        id:2
    },
    subFilter:[{name:"Newest",id:1}, {name:"Price (Low to High)",id:2}, {name:"Price (High to Low)",id:3}],
    selectedSubFilter:{name:"Newest",id:1}
  },
  mutations: {
    setCountryCode(state,selectedCountryCode) {
        state.selectedCountryCode = selectedCountryCode;
    },
    setSubFilter(state, selectedSubFilter) {
        state.selectedSubFilter = selectedSubFilter;
    }
  },
  actions: {
    setCountryCode(context,payload) {
     context.commit('setCountryCode',payload);
    },
    setSubFilter(context,payload) {
     context.commit('setSubFilter',payload);
    }
  },
  getters: {
    selectedCountryCode: state =>state.selectedCountryCode,
    subFilter: state =>state.subFilter,
    selectedSubFilter: state =>state.selectedSubFilter,
  }
});
