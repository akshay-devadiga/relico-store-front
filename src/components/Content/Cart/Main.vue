<template>
  <v-main>
    <v-container fluid>
      <v-row class="mx-2">
        <v-col cols="12">
          <v-card-title class="grey lighten-2 justify-center">
            <span class="font-weight-bold overline">Your cart</span></v-card-title
          >
        </v-col>
      </v-row>
      <v-row v-if="cart.length > 0" class="justify-center my-3 mx-2">
        <v-col :cols="$vuetify.breakpoint.xsOnly ? 12 : 7">
          <v-list two-line>
            <v-list-item-group
              v-model="selected"
              active-class="primary--text"
              multiple
            >
              <template v-for="cartItem in cart">
                <v-list-item
                  :key="cartItem.name"
                  class="v-sheet v-sheet--outlined my-1"
                >
                  <template v-slot:default>
                    <v-list-item-avatar tile>
                      <v-img :src="cartItem.Images[0].fileUrl"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="cartItem.name"
                      ></v-list-item-title>

                      <v-list-item-subtitle class="text--primary" >
                        <span class="text-subtitle-2">Size:</span>
                        <span>
                          {{ cartItem.selectedSize.Name }}
                        </span></v-list-item-subtitle
                      >

                      <v-list-item-subtitle>
                        <span class="text-subtitle-2 text-start">Brand:</span>
                        <span>{{ cartItem.brand }}</span></v-list-item-subtitle
                      >
                    </v-list-item-content>
            
                    <v-list-item-content>
                      <v-list-item-subtitle class="text--primary">
                        <span class="text-subtitle-2">Qty:</span>
                        <span>1</span></v-list-item-subtitle
                      >
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-subtitle class="text--primary">
                        <span class="text-subtitle-2">Price: </span>
                        <span class="font-weight-light caption"
                          >{{ cartItem.currencySymbol }}
                          {{ cartItem.price }}</span
                        ></v-list-item-subtitle
                      >
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn icon @click="removeFromCart(cartItem)">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </template>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.xsOnly ? 12 : 3">
          <v-card class="mx-auto my-3 py-3" outlined tile max-width="374">
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
                {{ "N/A" }}
              </v-card>
            </v-card>
            <v-card class="d-flex justify-space-between px-2" flat tile>
              <v-card class="pa-2" flat>
                <span class="font-weight-bold">Estimated tax:</span>
              </v-card>
              <v-card class="pa-2" flat>
                {{ "N/A" }}
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
          </v-card>
        </v-col>
        <v-col cols="6" >
            <register-and-checkout class="justify-center" @checkout="submit"/>
        </v-col>
      </v-row>
      <v-row v-else class="justify-center  mx-2">
        <v-col cols="12">
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
    <StripeCheckout
      :billingAddressCollection="'required'"
      ref="checkoutRef"
      mode="payment"
      pk="pk_test_51JbPIYSJcVUVuSDRk4i7qXyNyzPnAvQPbQCYOLEeqjPfPehyl8SbRvGfhwXGfrzso3aOkE0A7f3NBZyUkU9hiPvQ00mCpfn4f2"
      :lineItems="lineItems"
      @loading="loading = true"
      :amount="200"
    />
  </v-main>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import RegisterAndCheckout from "../Register/Main.vue";
export default {
  components: { StripeCheckout,RegisterAndCheckout},
  computed: {
    ...mapGetters(["cart", "selectedCountryCode"]),
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
    submit() {
      this.lineItems = [];
      this.cart.forEach((cartItem) => {
        let selectedPriceOb = cartItem.prices.find(
          (price) => price.countryId == this.selectedCountryCode.id
        );
        this.lineItems.push({
          price: selectedPriceOb.stripeId
            ? selectedPriceOb.stripeId
            : selectedPriceOb.StripeId,
          quantity: 1,
        });
      });
      localStorage.setItem('cart',this.cart);
      localStorage.setItem('cart',this.cart);
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  data() {
    return {
      loading: false,
      lineItems: [],
    };
  },
};
</script>
<style lang="scss" scoped></style>
