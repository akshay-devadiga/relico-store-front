<template>
  <v-app>
    <Header />
    <Content />
    <Footer v-if="!mobileView"/>
    <BottomNavigation v-if="showBottomNavigation"/>
  </v-app>
</template>

<script>
import Header from "./components/Header/Main";
import Content from "./components/Content/Main";
import Footer from "./components/Footer/Main";
import BottomNavigation from "./components/BottomNavigation/Main";
export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
    BottomNavigation
  },
  computed:{
     mobileView(){
       return this.$vuetify.breakpoint.xsOnly;
     }
    ,showBottomNavigation(){
      return  this.mobileView&& (this.$route.name !="Home")
    }
  },
  data: () => ({
    //
  }),
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
