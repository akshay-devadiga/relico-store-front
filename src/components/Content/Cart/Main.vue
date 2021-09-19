<template>
  <v-main>
    <v-container fluid>
      <v-card-title class="grey lighten-1 justify-center">
        <span class="font-weight-bold ">Your cart</span></v-card-title
      >
      <v-row v-if="cart.length > 0" class="justify-center">
        <v-col cols="7">
          <v-row class="justify-center">
            <v-col v-for="cartItem in cart" :key="cartItem" cols="12">
              <v-card class="d-flex mb-2" outlined tile>
                <v-card flat class="pa-2 align-self-center">
                  <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="cartItem.Images[0].fileUrl"></v-img>
                  </v-avatar>
                </v-card>
                <v-card flat class="pa-2 mr-auto align-self-center">
                  <v-card-title
                    class="font-weight-medium"
                    v-text="cartItem.name"
                  ></v-card-title>

                  <v-card-subtitle class="py-0">
                    <span class="font-weight-medium">Size:</span>
                    <span>
                      {{ cartItem.selectedSize.Name }}
                    </span></v-card-subtitle
                  >
                  <v-card-subtitle class="py-0">
                    <span class="font-weight-medium">Brand:</span>
                    <span>{{ cartItem.brand }}</span></v-card-subtitle
                  >
                  <v-card-subtitle class="py-0">
                    <span class="font-weight-medium">Color:</span>
                    <span>{{ cartItem.color }}</span></v-card-subtitle
                  >
                </v-card>
                <v-card flat class="pa-2 align-self-center">
                  <v-card-subtitle class="py-0">
                    <span class="font-weight-medium">Qty:</span>
                    <span>1</span></v-card-subtitle
                  >
                </v-card>
                <v-card flat class="pa-2 align-self-center">
                  <v-card-subtitle class="py-0">
                    <span class="font-weight-medium">Price:</span>
                    <span class="font-weight-medium"
                      >{{ cartItem.currencySymbol }} {{ cartItem.price }}</span
                    ></v-card-subtitle
                  >
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
        </v-col>
        <v-col cols="5">
          <v-card class="mx-auto my-2 py-3" outlined tile max-width="374">
                         <v-card class="d-flex justify-space-between px-2" flat tile>
                <v-card class="pa-2" flat>
                    <span class="font-weight-bold">Subtotal:</span>
                </v-card>
                <v-card class="pa-2" flat>
                    {{ currencySymbol }} {{ total }}
                </v-card>
            </v-card>
                       <v-card class="d-flex justify-space-between px-2" flat tile>
                <v-card class="pa-2" flat>
                    <span class="font-weight-bold">Estimated shipping:</span>
                </v-card>
                <v-card class="pa-2" flat>
                    {{'N/A'}}
                </v-card>
            </v-card>
             <v-card class="d-flex justify-space-between px-2" flat tile>
                <v-card class="pa-2" flat>
                    <span class="font-weight-bold">Estimated tax:</span>
                </v-card>
                <v-card class="pa-2" flat>
                    {{'N/A'}}
                </v-card>
            </v-card>
            <v-divider class="mx-4"></v-divider>
            <v-card class="d-flex justify-space-between px-2" flat tile>
              <v-card class="pa-2" flat>
                <span class="font-weight-bold">Total:</span>
              </v-card>
              <v-card class="pa-2 font-weight-bold  orange--text" flat>
                {{ currencySymbol }} {{ total }}
              </v-card>
            </v-card>

            <v-card-actions class="justify-center">
              <v-btn color="primary white--text">
                Checkout
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else class="justify-center">
        <v-col cols="7">
          <v-card class="d-flex mb-2 pa-5 align-self-center " outlined tile>
            <v-card-subtitle class="py-5 justify-center">
              <v-icon>mdi-cart</v-icon
              ><span class="ml-3  font-weight-medium "
                >Your cart is currently empty
              </span></v-card-subtitle
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  computed: {
    ...mapGetters(["cart"]),
    total() {
      let total = 0;
      this.cart.forEach((cartItem) => {
        total = total + cartItem.price;
      });
      return total;
    },
    currencySymbol() {
      return this.cart[0].currencySymbol;
    },
  },
  methods: {
    ...mapActions(["buildFilterOptions", "removeFromCart"]),
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
