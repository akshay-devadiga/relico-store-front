import Vue from 'vue';
import Vuex from 'vuex';
import { getProductsByCategory,getSizesById,getColors,getSizes,getGenders,getBrands,getPricesById } from "../ApiServices";
import { processSubFilter,filterProducts,getAppliedFilters } from "../helpers/commonHelper";
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
    searchInput:'',
    appliedFilters:[],
    filterOptions:[],
    isProductsLoading: false,
    isFilterApplied:false,
    cart: []
  },
  mutations: {
    addToCart(state, cartItem){
        const index = state.cart.indexOf(cartItem);
        if (index == -1) {
            state.cart.push(cartItem);
        }
        
    },
    removeFromCart(state, cartItem){
        const index = state.cart.indexOf(cartItem);
        if (index > -1) {
            state.cart.splice(index, 1);
        }
    },
    buildFilterOptions(state, filterOptions) {
        state.filterOptions = filterOptions;
    },
    setProductsLoader(state,loader) {
        state.isProductsLoading = loader;
    },
    setSearch(state,searchInput) {
        state.searchInput = searchInput;
    },
    setCountryCode(state,selectedCountryCode) {
        state.selectedCountryCode = selectedCountryCode;
    },
    setSubFilter(state, selectedSubFilter) {
        state.selectedSubFilter = selectedSubFilter;
        state.isProductsLoading = true;
        state.products = processSubFilter(selectedSubFilter.id, state.products);
        state.isProductsLoading = false;
    },
    getProducts(state, products) {
        state.products = products;
        state.isProductsLoading = false;
    },
    updateProducts(state, products) {
        state.products = products;
    },
    updateFillters(state, filterOptions){
        state.isFilterApplied=true;
        state.filterOptions=filterOptions;
    },
  },
  actions: {
    addToCart(context, payload){
        context.commit('addToCart',payload);
    },
    removeFromCart(context, payload){
        context.commit('removeFromCart',payload);
    },
    async buildFilterOptions (context) {
        let filterOptions = [];
        try {
            let sizes = await getSizes();
            filterOptions.push({name:"Sizes", subfilters:sizes});
            let brands = await getBrands();
            filterOptions.push({name:"Brands", subfilters:brands});
            let colors = await getColors();
            filterOptions.push({name:"Colors", subfilters:colors});
            let genders = await getGenders();
            filterOptions.push({name:"Gender", subfilters:genders});
          context.commit('buildFilterOptions',filterOptions);
         }
         catch (error) {
          console.log(error);
        }
     },
    setProductsLoader(context,payload) {
        context.commit('setProductsLoader',payload);
    },
    updateProducts(context,payload) {
        context.commit('updateProducts',payload);
    },
    updateFillters(context,payload) {
        context.commit('updateFillters',payload);
    },
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
        context.commit('setProductsLoader',true);
        let category = payload.category;
        let selectedCountryCode = payload.selectedCountryCode.id;
        try {
           let products =  await getProductsByCategory(
            category,
            selectedCountryCode
          );
          await ApiHelper.processProducts(products);
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
    products:state =>{
        let filteredOptions = JSON.parse(JSON.stringify(state.filterOptions));
        return state.isFilterApplied && getAppliedFilters(filteredOptions).length>0? filterProducts(filteredOptions,state.products) :state.products;
    },
    searchInput:state =>state.searchInput,
    filterOptions:state =>state.filterOptions,
    isProductsLoading:state =>state.isProductsLoading,
    cart:state =>state.cart
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
            var pricesOb = await getPricesById(product.id);
            if(pricesOb){
                product.prices = JSON.parse(pricesOb[0].prices);
            } 
        }
    }

}
