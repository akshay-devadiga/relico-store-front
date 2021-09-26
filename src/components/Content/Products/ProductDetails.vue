<template>
  <div>
    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <v-card class="mx-auto overflow-hidden ma-2 pa-2" flat>
          <v-row>
            <v-col :cols="$vuetify.breakpoint.xsOnly?12:selectedProduct.Images.length<=1?4:7">
              <v-row justify="center">
                <v-col v-for="imageOb in selectedProduct.Images" :key="imageOb.id" class="d-flex" cols="6">
                  <v-img
                    max-height="300"
                    contain
                    class="v-sheet--outlined"
                    :src="imageOb.fileUrl"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
            <v-col :cols="$vuetify.breakpoint.xsOnly?12:5">
              <v-card-title class="align-start">
                <div>
                   <div class="grey--text font-weight-light text-start">
                    {{selectedProduct.name}}
                  </div>
                  <div class="grey--text font-weight-light text-start">
                    Brand: {{selectedProduct.brand}}
                  </div>
                  <div class="text-h5 text-start">
                    Price: {{selectedProduct.currencySymbol}} {{selectedProduct.price}}
                  </div>
                </div>
                <v-spacer></v-spacer>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
                <span class="subtitle-1  ml-2"> Select Size:</span>
  <v-chip-group
              v-model="selectedProduct.selectedSize"
              active-class="primary--text text--accent-4"
              class="ml-2"
              @change="showCart(product)"
              :column="true"
            >
              <v-chip label v-for="size in selectedProduct.sizes" @click="showCart" :key="size" :value="size">
                {{ size.Name }}
              </v-chip>
            </v-chip-group>
                <v-spacer></v-spacer>
              </v-card-actions>
              <v-card-actions>
                <v-row justify="center" v-if="showProductCart">
                  <v-col cols="8" align-self="center"> <v-btn block class="white--text"  @click="addItemToCart(selectedProduct)"  color="primary accent-4">
                  Add to Cart
                </v-btn>
                </v-col>
                </v-row>
              </v-card-actions>
              <div class="pa-4 pt-0 text-caption">
                <em
                  >This shirt is perfect for the gym, a casual day, or an intense workout. Made of cotton, this shirt will keep you cool and dry. It has a loose, boxy fit that's flattering and doesn't hug your body too tightly. With a crew neckline and short sleeves, this shirt is perfect for a variety of outfits.</em
                >
              </div>
            </v-col>
          </v-row>
          
        </v-card>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  computed: {
    ...mapGetters([
      "products",
    ]),
  },
  methods: {
    ...mapActions(["addToCart"]),
    addItemToCart(selectedProduct){
         this.$toast.success("Product added to cart successfully", {
              position: this.position,
              timeout: 6000,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: "button",
              icon: true,
            });
      this.addToCart(selectedProduct);
    },
    showCart(){
      this.showProductCart=true;
    }
  },
  async created() {
    this.selectedProduct = this.products.find(product=>product.id==this.$route.params.id);
  },
  data() {
    return {
      price: 50,
      items: [
        {
          text: "New",
          disabled: false,
          href: "breadcrumbs_link_1",
        },
      ],
      selectedProduct:null,
      showProductCart:false,
      position: "top-right"
    };
  },
};
</script>
<style lang="scss" scoped>
::v-deep .filters {
  max-height: unset !important;
  z-index: 4 !important;
}
::v-deep
  .theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating)
  .v-navigation-drawer__border {
  display: none !important;
}
.v-expansion-panel {
  box-shadow: none;
}
</style>
