<template>
  <router-view></router-view>
</template>
<script>
export default {
  components: {
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