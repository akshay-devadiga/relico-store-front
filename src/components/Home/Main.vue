<template>
  <div class="my-5 py-5">
   <v-carousel cycle  hide-delimiter-background
      :show-arrows="false" height="700">
      <v-carousel-item
        v-for="(image) in images"
        :key="image" 
        :src="image.src"
      >
      </v-carousel-item>
    </v-carousel>
      <v-container
        class="grey lighten-5 mb-6"
      >
        <v-row
          align="center"
          no-gutters
          style="height: 300px;"
          justify="space-between"
        >
          <v-col
            v-for="discountOb in discounts"
            :key="discountOb"
                 cols="2"
          >
           <v-card>
              <v-img
                src="https://image.freepik.com/free-vector/yellow-background-with-halftone-lines-design_1017-30148.jpg"
                class="white--text align-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.1)"
                height="200px"
              >
                <v-card-title  style="font-family: 'Gemunu Libre' !important;"  class="text-h1 text--white transition-swing align-center justify-center"
                v-text="`${discountOb.DiscountPercentage}%`"></v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>
<script>
  import {getDiscounts} from '../../ApiServices/index'
export default {
  
  data() {
    return {
       discounts:[],
       images: [
        {
          src: 'https://images.unsplash.com/photo-1594969155368-f19485a9d88c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib',
        },
        {
          src: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
        },
        {
          src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
        },
      ],
    };
  },
  async created(){
      this.discounts = await getDiscounts();
      this.discounts.shift();
  }
};
</script>