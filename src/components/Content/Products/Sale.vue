<template>
  <div>
    <v-navigation-drawer
      floating
      class="elevation-0 filters"
      permanent
      clipped
      app
      v-if="!$vuetify.breakpoint.xsOnly"
    >
      <v-expansion-panels accordion flat class="mt-5 px-0 mx-2">
        <v-expansion-panel v-for="(item, i) in filterOptions" :key="i">
          <v-expansion-panel-header disable-icon-rotate>
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
                <template v-for="(itemFilter, i) in item.subfilters">
                  <v-list-item
                    :key="`item-${i}`"
                    :value="itemFilter"
                    active-class="deep-purple--text text--accent-4"
                  >
                    <template v-slot:default>
                      <v-list-item-content>
                        <v-list-item-title v-text="itemFilter.Name"></v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-checkbox
                          v-model="itemFilter.value"
                          @change="updateSelectedFilters"
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
           <v-row class="mt-3" :class="{'mx-2':$vuetify.breakpoint.xsOnly,'mx-3':!$vuetify.breakpoint.xsOnly}"  justify="space-between">
          <v-col cols="6" align-self="start">
            <v-card color="white" class="d-flex shrink" flat>
                <span class="primary--text caption"> {{$route.name.toUpperCase()}}</span>
            </v-card>
          </v-col>
          <v-col cols="6" sm="4" md="4"  lg="3" align-self="end">
            <v-card  class="pa-0 d-flex shrink" color="white" flat>
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
import { mapActions, mapGetters } from "vuex";
import { filterBySearch } from "../../../helpers/commonHelper";
export default {
  components: {
    Products,
  },
  computed: {
    ...mapGetters(["selectedCountryCode", "selectedSubFilter", "subFilter","products","isProductsLoading","filterOptions","searchInput"]),
    localProducts(){
        return this.searchInput && this.searchInput.length>0 ? filterBySearch(this.searchInput,this.products) :this.products;
      }
  },
  methods: {
    ...mapActions(["setSubFilter","getProducts","updateFillters"]),
     async processProducts() {
      await this.getProducts({category:"sale",selectedCountryCode:this.selectedCountryCode});
    },
    updateSelectedFilters(){
       this.updateFillters(this.filterOptions);
    }
  },
  async created() {
    await this.processProducts();
  },
  watch: {
    async selectedCountryCode() {
      await this.processProducts();
    },
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
      selected: "Newest",
      items2: ["Newest", "Price (Low to High)", "Price (High to Low)"]
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