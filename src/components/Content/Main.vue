<template>
  <router-view></router-view>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  components: {
  },
  methods: {
    ...mapActions(['buildFilterOptions'])
  },
  created(){
    this.buildFilterOptions();
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
      ]
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