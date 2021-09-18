import Vue from 'vue';
import Vuex from 'vuex';
import { getProductsByCategory,getSizesById } from "../ApiServices";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedCountryCode: {
        name: "IND",
        flag: "em-flag-in",
        id:2
    },
    subFilter:[{name:"Newest",id:1}, {name:"Price (Low to High)",id:2}, {name:"Price (High to Low)",id:3}],
    selectedSubFilter:{name:"Newest",id:1},
    products:[],
    search:''
  },
  mutations: {
    setSearch(state,search) {
        state.search = search;
    },
    setCountryCode(state,selectedCountryCode) {
        state.selectedCountryCode = selectedCountryCode;
    },
    setSubFilter(state, selectedSubFilter) {
        state.selectedSubFilter = selectedSubFilter;
    },
    getProducts(state, products) {
        state.products = products;
    }
  },
  actions: {
    setSearch(context,payload) {
        context.commit('setSearch',payload);
    },
    setCountryCode(context,payload) {
     context.commit('setCountryCode',payload);
    },
    setSubFilter(context,payload) {
     context.commit('setSubFilter',payload);
    },
    async getProducts (context,payload) {
        let category = payload.category;
        let selectedCountryCode = payload.selectedCountryCode.id;
        try {
           let products =  await getProductsByCategory(
            category,
            selectedCountryCode
          );
          await ApiHelper.processProducts(products);
          
          console.log(products);
           context.commit('getProducts',products);
         }
         catch (error) {
          console.log(error);
        }
      }
  },
  getters: {
    selectedCountryCode: state =>state.selectedCountryCode,
    subFilter: state =>state.subFilter,
    selectedSubFilter: state =>state.selectedSubFilter,
    products:state =>state.products,
    search:state =>state.search
  }
});

const ApiHelper = {
    async processProducts(products){
        for(let product of products) {
            product.Images = JSON.parse(product.Images);
            product.isProductSelected = false
            product.selectedSize = ''
            var sizesOb = await getSizesById(product.id);
            if(sizesOb){
                product.sizes = JSON.parse(sizesOb[0].sizevariants);
            }
        }
    }

}
