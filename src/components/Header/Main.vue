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
      <v-col cols="6" md="6">
        <v-card color="black" class="pa-1" flat>
          <v-autocomplete
            background-color="white"
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            cache-items
            flat
            hide-details
            hide-no-data
            color="black"
            placeholder="SEARCH FOR JERSEY’S"
            solo
            dense
            append-icon="false"
            height="30"
            class="product-search rounded-lg"
          >
            <template v-slot:append-outer>
              <v-slide-x-reverse-transition mode="out-in">
                <v-icon>mdi-magnify</v-icon>
              </v-slide-x-reverse-transition>
            </template></v-autocomplete
          >
        </v-card>
      </v-col>
      <v-col cols="1" md="1" offset-md="1">
        <v-card height="40" flat color="black">
          <v-select
            solo
            v-model="select"
            background-color="black"
            :items="countries"
            item-text="name"
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
          <v-btn icon>
            <v-icon>mdi-cart</v-icon>
          </v-btn></v-card
        >
      </v-col>
    </v-row>
    <template v-slot:extension>
      <v-tabs fixed-tabs background-color="#004FC6" align-with-title>
        <v-tab v-for="i in tabs" :key="i.name">{{ i.name }}</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      tabs: [
        { name: "New" },
        { name: "JERSEYS" },
        { name: "MENS" },
        { name: "KIDS" },
        { name: "WOMENS" },
        { name: "HEADWEAR" },
        { name: "BRANDS" },
        { name: "SALE" },
      ],
      search: null,
      select: {
        name: "IND",
        flag: "em-flag-in",
      },
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
      countries: [
        {
          name: "USA",
          flag: "em-flag-us",
        },
        {
          name: "IND",
          flag: "em-flag-in",
        },
        {
          name: "AUS",
          flag: "em-flag-au",
        },
      ],
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
  },
};
</script>
<style scoped src="../../assets/emoji.css"/> 