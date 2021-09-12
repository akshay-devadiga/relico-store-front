<template>
  <v-card class="mx-auto overflow-hidden ma-2 pa-2">
      <v-row>
        <v-col cols="7">
            <v-row>
        <v-col
          class="d-flex"
          cols="6"
        >
          <v-img src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png"></v-img>
        </v-col>
        <v-col  class="d-flex" cols="6">
          <v-img src="https://cdn.vuetifyjs.com/images/ratings/fortnite2.png"></v-img>
        </v-col>
      </v-row>
        </v-col>
        <v-col class="violet" cols="5">
                <v-card-title class="align-start">
        <div>
          <span class="text-h4">FORTNITE</span>
          <div class="grey--text font-weight-light">
            Brand
          </div>
          <span class="text-h5">$179.95</span>
        </div>
        <v-spacer></v-spacer>
<!--         <v-dialog v-model="dialog" width="400">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">
              mdi-share-variant
            </v-icon>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h6 font-weight-bold">Share</span>
              <v-spacer></v-spacer>
              <v-btn class="mx-0" icon @click="dialog = false">
                <v-icon>mdi-close-circle-outline</v-icon>
              </v-btn>
            </v-card-title>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon color="indigo">
                    mdi-facebook
                  </v-icon>
                </v-list-item-action>
                <v-card-title>Facebook</v-card-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon color="cyan">
                    mdi-twitter
                  </v-icon>
                </v-list-item-action>
                <v-card-title>Twitter</v-card-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-action>
                <v-card-title>Email</v-card-title>
              </v-list-item>
            </v-list>
            <v-text-field ref="link" :label="copied ? 'Link copied' : 'Click to copy link'" class="pa-4" readonly value="https://g.co/kgs/nkrK43" @click="copy"></v-text-field>
          </v-card>
        </v-dialog> -->
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <span class="subtitle-1  ml-2"> Select Size</span>
        
           <v-chip-group
          v-model="selection"
                         class="ml-3"
          active-class="deep-purple--text text--accent-4"
          mandatory
        >
          <v-chip
            v-for="size in sizes"
            :key="size"
            :value="size"
          >
            {{ size }}
          </v-chip>
        </v-chip-group>
        <v-spacer></v-spacer>
      </v-card-actions>
       <v-card-actions>
        <v-btn
          block
          class="white--text"
          color="deep-purple accent-4"
        >
          Add to Cart
        </v-btn>
      </v-card-actions>
      <div class="pa-4 pt-0 text-caption">
        <em>Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic.</em>
      </div>
        </v-col>
      </v-row>


    </v-card>
</template>
<script>
export default {
  data() {
    return {
      selection: 'SM',
      sizes: ["XS", "SM", "XL", "XXL"],
    };
  },
};
</script>