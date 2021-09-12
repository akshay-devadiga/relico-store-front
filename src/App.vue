<template>
  <v-app>
    <Header />
    <Content />
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header/Main";
import Content from "./components/Content/Main";
import Footer from "./components/Footer/Main";
export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
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
