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
        <v-row class="mt-3" justify="space-between">
          <v-col cols="1">
            <v-card color="white" flat>
              <v-breadcrumbs :items="items">
                <template v-slot:divider>
                  <v-icon>mdi-chevron-right</v-icon>
                </template>
                <template v-slot:item="{ item }">
                  <v-breadcrumbs-item
                    :href="item.href"
                    :disabled="item.disabled"
                  >
                    {{ item.text.toUpperCase() }}
                  </v-breadcrumbs-item>
                </template>
              </v-breadcrumbs>
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
            <products :products="products" :isProcessing="isProcessing" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import Products from "./Products.vue";
import { mapActions, mapGetters } from "vuex";
import { processSubFilter } from "../../../helpers/commonHelper";
export default {
  components: {
    Products,
  },
  methods: {
    ...mapActions(["setSubFilter","getProducts"]),
    async processProducts() {
      this.isProcessing = true;
      await this.getProducts({category:"Jerseys",selectedCountryCode:this.selectedCountryCode});
      this.isProcessing = false;
    },
  },
  computed: {
    ...mapGetters(["selectedCountryCode", "selectedSubFilter", "subFilter","products","search"]),
     filteredProducts() {
        return this.products.filter(movie => movie.name.toLowerCase().includes(this.search.toLowerCase()))
     }
  },
  async created() {
    await this.processProducts();
  },
  watch: {
    async selectedCountryCode() {
      await this.processProducts();
    },
    selectedSubFilter(filter) {
      this.isProcessing = true;
      this.products = processSubFilter(filter.id, this.products);
      this.isProcessing = false;
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