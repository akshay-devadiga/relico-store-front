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
