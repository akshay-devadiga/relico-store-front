<template>
  <v-footer color="black" class="footer" dark padless >
   <v-container>
       <v-row
          align="center"
          justify="space-between"
        >
           <v-col
            cols="7"
            class="ma-0 pa-0"
          >
        <v-card color="black"  class="flex mt-0"
        flat
        tile>
<v-container>
       <v-row
          align="center"
          justify="space-between"
        >
           <v-col
            cols="12"
            class="ma-0 pa-0 text-start"
          > 
            <div  v-for="(footerItem,i) in footerItems"
            :key="footerItem"> 
            <v-row class="body-2 mt-2 pt-2 overline"  @click="()=>{(i!=2)?goToNextPage(footerItem.route):null}"><v-col><v-icon size="20px">{{footerItem.icon}}</v-icon><span class="ml-3" style="cursor:pointer">{{footerItem.name}}</span><span v-if="footerItem.name==='Contact Support'" class="ml-3">{{'+918132323237'}}</span></v-col></v-row>

            </div>
          </v-col>
       </v-row>
</v-container>
     
          </v-card>
          </v-col>
           <v-col
            cols="4"
            class="mt-4 "
          >
        <v-card color="black" class="flex"
        flat
        tile>
        <v-card-title class="overline">
        <v-btn
            flat
            text
          >
             Connect with us 
          </v-btn>
      </v-card-title>
      <v-card-text class="text-start">
        <v-btn
            v-for="(icon) in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
      </v-card-text>


       
          </v-card>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="space-between"
        >
           <v-col
            cols="12"
            class="mt-4 "
          >
        <v-card color="black"  class="flex"
        flat
        tile>

        <v-card-text class="py-2 white--text text-center">
          Copyright © 2021 <strong>Relico Ecommerce</strong>
        </v-card-text>
          </v-card>
          </v-col>
        </v-row>
      </v-container>
  </v-footer>
</template>
<script>
export default {
  methods:{
    goToNextPage(route){
      this.$router.push({name:route})
    }
  },
   data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-instagram',
      'mdi-email',
    ],
    footerItems: [
      {name:'FAQ',route:'faq',icon:'mdi-comment-question-outline'},
       {name:'Terms and conditions',route:'terms-and-conditions',icon:'mdi-information-outline'},
        {name:'Contact Support',route:'customerservice',icon:'mdi-whatsapp'}
    ],
  }),
};
</script>
<style lang="scss" scoped>
.footer {
  z-index: 4 !important;
}
</style>