<template>
 <v-main>
      <v-container fluid>
     <v-row class="justify-center">
      <v-col  v-for="cartItem in  cart" :key="cartItem" cols="7">
        <v-card class="d-flex mb-2" outlined tile>
          <v-card flat class="pa-2 align-self-center">
            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="cartItem.Images[0].fileUrl"></v-img>
            </v-avatar>
          </v-card>
          <v-card flat class="pa-2 mr-auto align-self-center">
            <v-card-title class="font-weight-medium" v-text="cartItem.name"></v-card-title>

            <v-card-subtitle class="py-0"> <span class="font-weight-medium">Size:</span> <span> {{ cartItem.selectedSize.Name}} </span></v-card-subtitle>
            <v-card-subtitle class="py-0"> <span class="font-weight-medium">Brand:</span> <span>{{ cartItem.brand}}</span></v-card-subtitle>
          <v-card-subtitle class="py-0"> <span class="font-weight-medium">Color:</span> <span>{{ cartItem.color}}</span></v-card-subtitle>
          </v-card>
             <v-card flat class="pa-2 align-self-center">
              <v-card-subtitle class="py-0"> <span class="font-weight-medium">Qty:</span> <span>1</span></v-card-subtitle>
          </v-card>
          <v-card flat class="pa-2 align-self-center">
            <v-card-subtitle class="py-0"> <span class="font-weight-medium">Price:</span> <span class="font-weight-medium">{{ cartItem.currencySymbol}} {{ cartItem.price}}</span></v-card-subtitle>
          </v-card>
          <v-card flat class="pa-2 align-self-center">
            <v-card-actions>
              <v-btn icon @click="removeFromCart(cartItem)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
     </v-container>
     </v-main>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
  },
  computed:{
      ...mapGetters(['cart'])
  },
  methods: {
    ...mapActions(['buildFilterOptions','removeFromCart'])
  },
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
</style>