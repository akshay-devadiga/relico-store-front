<template>
  <div class="my-5 py-5">
   <v-carousel  v-show="!mobileView" cycle  hide-delimiter-background
      :show-arrows="false" height="700">
      <v-carousel-item
        v-for="(image) in carouselImages"
        :key="image" 
        :src="image.Url"
         :lazy-src="image.Url"
      >
      </v-carousel-item>
    </v-carousel>
      <!-- <v-container
        class=" mb-6"
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
           <v-card class="discount-percentage" @click="openRandomCategory">
              <v-img
                src="https://image.freepik.com/free-vector/yellow-background-with-halftone-lines-design_1017-30148.jpg"
                class="white--text align-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.1)"
                height="200px"
              >
                <v-card-title  style="font-family: 'Gemunu Libre' !important;"  class="text-h2 text--white transition-swing align-center justify-center"
                v-text="`${discountOb.DiscountPercentage}%`"></v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container> -->
       <v-container
        class=" mb-6"
        :class="{'mt-5':mobileView}"
      >
        <v-row
          align="center"
          :no-gutters="!mobileView"
          justify="space-between"
        >
          <v-col
            v-for="categoryOb in panelImages"
            :key="categoryOb"
            :cols="mobileView?'6':'2'"
          >
           <v-card class="discount-percentage" @click="openRandomCategory">
              <v-img
                 :lazy-src="categoryOb.Url"
                 :src="categoryOb.Url"
              >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
        <v-container
        class=" ma-0 pa-0"
        style="max-width:100%"
        :class="{'mt-5':mobileView}"
      >
       
        <v-row
        class=" ma-0 pa-0"
          align="center"
          justify="space-between"
        >
          <v-col
            class=" ma-0 pa-0"
            v-for="offerImage in offerImages"
            :key="offerImage"
          >
           <v-card>
              <v-img
              contain
                :lazy-src="offerImage.Url"
                :src="offerImage.Url"
              >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

             <v-container
        class=" mb-6"
        :class="{'mt-5':mobileView}"
      >
          <v-row
          align="center"
          justify="space-between"
        >
          <v-col
            cols="12"
          >
             <v-carousel hide-delimiters v-model="model" cycle>
        <v-carousel-item
          v-for="i in 3"
          :key="i"
          flat
        >
          <v-card
            height="100%"
            flat
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
                <v-list three-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
            </v-list-item-avatar>
  
            <v-list-item-content>
              <v-list-item-subtitle>{{'Value for money best in market'}}</v-list-item-subtitle>
               <v-list-item-title>{{'Bipin'}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
            </v-row>
          </v-card>
        </v-carousel-item>
      </v-carousel>
          </v-col>
        </v-row>
      </v-container>
        <v-container
        class=" mb-6"
        :class="{'mt-5':mobileView}"
      >
        <v-row
          align="center"
          justify="space-between"
        >
          <v-col
            cols="2"
          >
           <v-card flat class="">
               <v-avatar
            color="#0454a3"
            class="rounded-lg"
            tile
            max-height="40"
          >
          
            <v-img
              contain
              aspect-ratio="1"
              src="https://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-1.jpg"
            ></v-img>
          </v-avatar>
            </v-card>
          </v-col>
           <v-col
            cols="10"
            class="mt-4 "
          >
           <v-card flat class="">
               <p class="display-1 text-start">
        About The Jersey Store
      </p>
              <p class="text-justify">
      Stateside Sports is the home of U.S Sport. We stock the best range of NBA, MLB, NFL & NHL and the finest selection of American premium streetwear. Inspired by the lifestyle, culture & contest of U.S sports, Stateside Sports delivers a unique retail experience, with our famous curved cap walls and world-renowned six screen Jumbotrons.

    </p>
      <p class="text-justify">
   
Stateside Sports offers the latest and limited releases from Nike, Jordan, Mitchell & Ness, Majestic, New Era, 47 Brand and many others. We procure the best selection of Official on Court, Authentic Replicas and lifestyle products that is unmatched by our competitors.

    </p>
      <p class="text-justify">
   
With our House of Headwear, we offer the biggest range of caps in the market, thousands of styles, making us the number one headwear destination. Featuring the best styles and brands, from the world’s greatest playground, at Stateside Sports, we work closely with New Era, Mitchell & Ness and 47 Brand, to deliver the ultimate cap selection.

    </p>
      <p class="text-justify">

Our team here at Stateside Sports ensures you’re getting a premium online shopping experience with our hand-picked ranges, bringing you the best of U.S sports and lifestyle apparel and headwear, not to mention Stateside Sports exclusives, right to your door.

Grab one of our Best.Gift.Ever Gift Cards and Shop now, pay later with Afterpay!
    </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>
<script>
  import {getOfferImages,getPanelImages,getCarouselImages} from '../../ApiServices/index'
export default {
  
  data() {
    return {
       discounts:[],
       categories:[
          {name:'Jerseys',src:"/categories/category1.webp"},
          {name:'Jackets',src:"/categories/category2.webp"},
          {name:'Socks',src:"/categories/category3.webp"},
          {name:'Shorts',src:"/categories/category4.webp"},
          {name:'Hoodies',src:"/categories/category5.webp"},
       ],
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
             offerImages:[],
      panelImages:[],
      carouselImages:[]
    };
  },
  async created(){
      // this.discounts = await getDiscounts();
      // this.discounts.shift();
    this.offerImages = await getOfferImages();
    this.panelImages = await getPanelImages();
    this.carouselImages = await getCarouselImages();
  },
  computed:{
    mobileView(){
       return this.$vuetify.breakpoint.xsOnly;
     }
  },
  methods:{
    openRandomCategory(){
      this.$router.push({name:'new'})
    }
  }
};
</script>
<style scoped>
.discount-percentage{
  cursor: pointer;
}
</style>