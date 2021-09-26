<template>
    <v-bottom-navigation v-model="value" background-color="primary" color="white" class="mb-3" app>
        <v-tabs
        background-color="primary"
        center-active
        dark
        show-arrows
        hide-slider
        icons-and-text
        next-icon="mdi-arrow-right-drop-circle-outline"
        prev-icon="mdi-arrow-left-drop-circle-outline"
      >
        <v-tab  v-for="tab in tabs" :to="tab.route" :key="tab"> {{tab.name}}<v-icon>{{tab.icon}}</v-icon></v-tab>
      </v-tabs>
    </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      value:null,
      tabs: [
        { name: "",route:'/categories/new',icon:'mdi-new-box' },
        { name: "JERSEYS",route:'/categories/jerseys',icon:'mdi-tshirt-crew'  },
        { name: "MENS",route:'/categories/mens',icon:'mdi-tshirt-crew'  },
        // { name: "KIDS" ,route:'/categories/kids'},
        { name: "WOMENS",route:'/categories/womens',icon:'mdi-tshirt-crew'  },
        // { name: "HEADWEAR" ,route:'/categories/headwear'},
        { name: "BRANDS",route:'/categories/brands',icon:'mdi-tshirt-crew'  },
        { name: "SALE",route:'/categories/sale',icon:'mdi-sale'  },
      ] 
    };
  },
};
</script>