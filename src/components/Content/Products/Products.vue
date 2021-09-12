<template>
  <div>
    <v-row class="ma-3">
      <v-col v-for="n in 13" :key="n" cols="5" md="3">
        <v-card class="mx-auto" max-width="350">
          <v-hover v-slot="{ hover }">
            <v-carousel
              :cycle="hover"
              height="250"
              hide-delimiters
              :show-arrows="false"
            >
              <v-carousel-item v-for="(item, i) in items" :key="i">
                <v-img height="250" class="mt-2" :src="item.src"></v-img
              ></v-carousel-item>
            </v-carousel>
          </v-hover>
          <v-card-text>
            <v-row align="center">
              <v-col class="text-h5" cols="9"> Nike </v-col>
              <v-col cols="3">
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
                  width="32"
                ></v-img>
              </v-col>
            </v-row>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h6 grey--text">
                  Nike Men's T Shirt, Nike T Shirt Nike Men's T Shirt, Nike T
                  Shirt
                </v-list-item-title>
                <v-list-item-subtitle>BLACK</v-list-item-subtitle>
                <v-list-item-subtitle class="font-weight-bold"
                  >$ 59.00</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-chip-group
              v-model="selection"
              active-class="primary--text text--accent-4"
              @change="showCart"
            >
              <v-chip label v-for="size in sizes" :key="size" :value="size">
                {{ size }}
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions v-show="isSizeSelected">
            <v-btn block class="white--text" color="primary accent-4">
              Add to Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  methods: {
    showCart() {
      this.isSizeSelected = true;
    },
  },
  data() {
    return {
      selection: null,
      sizes: ["XS", "SM", "XL", "XXL"],
      isSizeSelected: false,
      items: [
        {
          id: 1,
          src:
            "https://5.imimg.com/data5/HQ/DB/MY-14081937/nike-men-s-t-shirt-500x500.jpg",
        },
        {
          id: 2,
          src:
            "https://i.sportisimo.com/products/images/1056/1056139/450x450/nike-ar6029-861-m-nk-dry-tee-dfc-crew-solid_1.jpg",
        },
      ],
    };
  },
};
</script>