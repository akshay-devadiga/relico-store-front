<template>
  <div>
    <v-navigation-drawer
      floating
      class="elevation-0 filters"
      permanent
      clipped
      app
    >
      <v-expansion-panels accordion class="mt-5 px-0 mx-2">
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
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <v-row class="mt-3 mx-2">
          <v-col>
            <v-card
              class="d-flex justify-space-between"
              color="white"
              flat
              tile
            >
              <v-card class="pa-0" color="white" flat>
                <v-breadcrumbs class="px-0 pl-1" :items="items">
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
              <v-card max-width="200" class="pa-0" color="white" flat>
                <v-select
                  v-model="selected"
                  :items="items2"
                  dense
                  solo
                ></v-select>
              </v-card>
              <!-- <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
                justify-space-between
              </v-card> -->
            </v-card>
          </v-col>
          <!-- <v-col class="red" cols="4">
            <v-breadcrumbs :items="items">
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
              <template v-slot:item="{ item }">
                <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
                  {{ item.text.toUpperCase() }}
                </v-breadcrumbs-item>
              </template>
            </v-breadcrumbs>
          </v-col>
          <v-col class="blue" cols="2" offset-sm-8>
            <v-select v-model="selected" :items="items2" dense solo></v-select>
          </v-col> -->
        </v-row>
        <v-row no-gutters>
          <v-col>
            <products />
          </v-col>
        </v-row>
      </v-container>
      <!-- Provides the application the proper gutter -->
      <!-- <v-container fluid>
      <!-- If using vue-router 
      <products />
      <!-- <router-view></router-view> 
    </v-container> -->
    </v-main>
  </div>
</template>
<script>
import Products from "./Products/Products.vue";
export default {
  components: {
    Products,
  },
  methods: {},
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
      selected: "Newest",
      items2: ["Newest", "Price (Low to High)", "Price (High to Low)"],
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
/* .filters{

} */
</style>