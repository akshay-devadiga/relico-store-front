<template>
  <div>
    <v-row  :class="{'mx-1 my-5':$vuetify.breakpoint.xsOnly,'ma-3':!$vuetify.breakpoint.xsOnly}" v-if="isProcessing">
      <v-col v-for="i in 10" :key="i" cols="6" sm="6" md="3"  lg="3" :class="{'pa-0 px-1 pb-1':$vuetify.breakpoint.xsOnly}">
        <v-skeleton-loader
          v-bind="attrs"
          class="mx-auto"
          max-width="250"
          type="card-avatar, article, actions"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row  :class="{'mx-1 my-5':$vuetify.breakpoint.xsOnly,'ma-3':!$vuetify.breakpoint.xsOnly}" v-else>
      <v-col v-for="product in products" :key="product" cols="6" sm="6" md="3"  lg="3" :class="{'pa-0 px-1 pb-1':$vuetify.breakpoint.xsOnly}">
        <v-card class="mx-auto product-item" :flat="$vuetify.breakpoint.xsOnly" :outlined="$vuetify.breakpoint.xsOnly" max-width="350">
          <v-hover v-slot="{ hover }">
            <v-carousel
              
              :cycle="hover"
              height="250"
              hide-delimiters
              :show-arrows="false"
            >
              <v-carousel-item @click="goToProductDetails(product)"  v-for="(item, i) in product.Images" :key="i">
                <v-img  height="250" class="mt-2" :src="item.path"></v-img
              ></v-carousel-item>
            </v-carousel>
          </v-hover>
          <v-card-text :class="{'py-0':$vuetify.breakpoint.xsOnly}">
            <v-row align="left" justify="space-between" v-if="!$vuetify.breakpoint.xsOnly">
              <v-col class="text-h5 text-align-left" cols="5">
                {{ product.brand }}
              </v-col>
              <v-col class="align-self-center" cols="3">
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
                  width="32"
                ></v-img>
              </v-col>
            </v-row>
            <v-list-item three-line class="px-0">
              <v-list-item-content @click="goToProductDetails(product)" >
                <v-list-item-title class="text-h6 grey--text text-align-left">
                  {{ product.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-align-left"  v-if="!$vuetify.breakpoint.xsOnly">{{
                  product.color
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="font-weight-bold text-align-left"
                  >{{ product.currencySymbol }} {{ product.price }}
                   <span  v-if="product.discount!=0" class="font-weight-light grey--text text-decoration-line-through"
                    >{{ product.currencySymbol }} {{ product.price+(product.discount *(product.price/100))  }}</span
                  >
                  <span  v-if="product.discount!=0" class="ml-1 font-weight-light product-discount"
                    >({{ product.discount  }}{{ "% OFF" }})</span
                  ></v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-chip-group
              v-model="product.selectedSize"
              active-class="primary--text text--accent-4"
              @change="showCart(product)"
              :column="true"
              v-if="!$vuetify.breakpoint.xsOnly"
            >
              <v-chip label v-for="size in product.sizes" :key="size" :value="size">
                {{ size.Name }}
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <v-divider></v-divider>
          <v-card-actions v-show="product.isProductSelected">
            <v-btn block class="white--text" @click="addItemToCart(product)" color="primary accent-4">
              Add to Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col v-if="products.length==0" cols="12">
            <v-card class="d-flex mb-2 pa-5 align-self-center " outlined tile>
            <v-card-subtitle class="py-5 justify-center">
              <v-icon>mdi-hanger</v-icon
              ><span class="ml-3  font-weight-medium "
                >No results found. Please clear the filters or search and try again.
              </span></v-card-subtitle
            >
          </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['addToCart']),
    addItemToCart(product){
      this.addToCart(product);
    },
    showCart(item) {
      item.isProductSelected = !item.isProductSelected ;
    },
    goToProductDetails(product){
      this.$router.push({name:'productDetails',params:{id:product.id}});
    }
  },
  props: {
    products: {
      type: Array,
      default: null,
    },
    isProcessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selection: null,
      sizes: ["XS", "SM", "XL", "XXL"],
      position: "top-right"
    };
  },
};
</script>
<style scoped>
.text-align-left {
  text-align: left !important;
}

.product-discount {
  color: #ff905a;
}

.product-item{
  cursor: pointer;
}
</style>