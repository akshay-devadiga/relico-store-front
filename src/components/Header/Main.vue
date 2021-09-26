<template>
  <v-app-bar color="black" dark app clipped-left>
    <v-row>
      <v-col cols="2" md="2">
        <v-card
          height="40"
          color="black"
          class="pa-1 d-flex justify-center"
          flat
        >
          <v-avatar
            max-height="40"
            height="40"
            min-width="80"
            color="white"
            class="rounded-lg"
            tile
          >
            <v-img
              contain
              src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            ></v-img>
          </v-avatar>
        </v-card>
      </v-col>
      <v-col cols="6" md="6" v-if="!$vuetify.breakpoint.xsOnly">
        <v-card color="black" class="pa-1" flat>
          <v-text-field
            background-color="white"
            color="green"
            v-model="productSearch"
            :items="products"
            item-text="name"
            @input="setSearch"
            cache-items
            flat
            hide-details
            hide-no-data
            placeholder="SEARCH FOR JERSEY’S"
            solo
            dense
            append-icon="false"
            height="30"
            style="color:black !important"
            class="product-search rounded-lg black--text"
          >
            <template v-slot:append-outer>
              <v-slide-x-reverse-transition mode="out-in">
                <v-icon>mdi-magnify</v-icon>
              </v-slide-x-reverse-transition>
            </template>
            </v-text-field>
        </v-card>
      </v-col>
      <v-col cols="1" md="1" offset-md="1">
        <v-card height="40" flat color="black">
          <v-select
            solo
            :value="selectedCountryCode"
            background-color="black"
            :items="countries"
            item-text="name"
            return-object
            @change="setCountryCode"
          >
            <template v-slot:selection="{ item }">
              <i :class="['mr-2', 'em', item.flag]"></i>
            </template>
            <template v-slot:item="slotProps">
              <i :class="['mr-2', 'em', slotProps.item.flag]"></i>
              {{ slotProps.item.name }}
            </template>
          </v-select></v-card
        >
      </v-col>
      <v-col cols="1" md="1">
        <v-card height="40" color="black" flat>
          <v-btn icon>
            <v-icon>mdi-account</v-icon>
          </v-btn></v-card
        >
      </v-col>
      <v-col cols="1" md="1">
        <v-card height="40" color="black" flat>
          <v-badge
          :content="cart.length"
          :value="cart.length"
          color="primary"
          overlap
        >
          <v-btn icon to="/cart">
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </v-badge>
        </v-card
        >
      </v-col>
    </v-row>
    <template v-slot:extension  v-if="!$vuetify.breakpoint.xsOnly"> 
      <v-tabs fixed-tabs background-color="#004FC6" align-with-title>
        <v-tab v-for="i in tabs" :key="i.name" :to="i.route">{{ i.name }}</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      loading: false,
      items: [],
      tabs: [
        { name: "New",route:'/categories/new' },
        { name: "JERSEYS",route:'/categories/jerseys' },
        { name: "MENS",route:'/categories/mens' },
        // { name: "KIDS" ,route:'/categories/kids'},
        { name: "WOMENS",route:'/categories/womens' },
        // { name: "HEADWEAR" ,route:'/categories/headwear'},
        { name: "BRANDS",route:'/categories/brands' },
        { name: "SALE",route:'/categories/sale' },
      ],
      search: null,
      productSearch: null,
      countries: [
        {
          name: "USA",
          flag: "em-flag-us",
          id:1
        },
        {
          name: "IND",
          flag: "em-flag-in",
          id:2
        },
        {
          name: "AUS",
          flag: "em-flag-au",
          id:3
        },
      ],
    };
  },
  created(){
    console.log(this)
  },
  computed:{
    ...mapGetters(['selectedCountryCode','searchInput','products','cart'])
  },
  methods: {
    ...mapActions(['setCountryCode','setSearch']),
  },
};
</script>
<style scoped lang="scss">
/* .v-select__selection,
.v-select__selection--comma, */
::v-deep .product-search .v-text-field__slot input {
  color: black !important;

}

 ::v-deep .product-search .v-input__slot .v-input__append-inner{
 display:none;
}  

 ::v-deep .v-menu__content{
 display:none !important;
}  


</style>
<style scoped src="../../assets/emoji.css"/> 