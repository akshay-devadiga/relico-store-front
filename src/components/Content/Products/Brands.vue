<template>
  <div>
    <v-navigation-drawer
      floating
      class="elevation-0 filters"
      permanent
      clipped
      app
    >
      <v-expansion-panels accordion flat class="mt-5 px-0 mx-2">
        <v-expansion-panel v-for="(item, i) in filterOptions" :key="i">
          <v-expansion-panel-header flat disable-icon-rotate>
            <span class="font-weight-bold">{{ item.name }}</span>
            <template v-slot:actions>
              <v-icon large color="black"> $expand </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row v-if="item.name == 'Price'">
              <v-col cols="12">
                <v-slider
                  v-model="price"
                  step="10"
                  thumb-label
                  ticks
                ></v-slider>
              </v-col>
            </v-row>
            <v-list v-else shaped>
              <v-list-item-group multiple>
                <template v-for="(item, i) in item.subfilters">
                  <v-list-item
                    :key="`item-${i}`"
                    :value="item"
                    active-class="deep-purple--text text--accent-4"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-checkbox
                          :input-value="active"
                          color="deep-purple accent-4"
                        ></v-checkbox>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                 
                </template>
              </v-list-item-group>
            </v-list>
          </v-expansion-panel-content>
              <v-divider
                v-if="i != filterOptions.length-1"
                :key="i"
              ></v-divider>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid class="ma-0 pa-0">
          <v-row class="mx-3 mt-3" justify="space-between">
          <v-col cols="1">
            <v-card color="white" flat>
                <span class="primary--text caption"> {{$route.name.toUpperCase()}}</span>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card max-width="200" class="pa-0 d-flex" color="white" flat>
              <v-select
                :value="selectedSubFilter"
                :items="subFilter"
                item-text="name"
                @change="setSubFilter"
                return-object
                dense
                solo
              ></v-select>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <products :products="localProducts" :isProcessing="isProductsLoading" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import Products from "./Products.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Products,
  },
  computed: {
    ...mapGetters(["selectedCountryCode", "selectedSubFilter", "subFilter", "products","isProductsLoading"]),
     localProducts(){
        return this.products;
      }
 },
  methods: {
    ...mapActions(["setSubFilter","getProducts"]),
    async processProducts() {
      await this.getProducts({category:"brands",selectedCountryCode:this.selectedCountryCode});
    },
  },
  async created() {
    await this.processProducts();
  },
  watch: {
    async selectedCountryCode() {
      await this.processProducts();
    }
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
      filterOptions: [
        { name: "Gender", subfilters: ["Men", "Women"] },
        { name: "Brands", subfilters: ["Nike", "Adidas"] },
        { name: "Sizes", subfilters: ["XL", "SM", "XXL", "XS"] },
        { name: "Price", subfilters: ["XL", "SM", "XXL", "XS"] },
      ],
      isProcessing: false,
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