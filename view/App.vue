<template>
    <Topbar />
    <Header />
    <Main />
    <Footer />
</template>
<script>
import Topbar from './components/Topbar.vue'
import Header from './components/Header.vue'
import Main from "./components/Main.vue";
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Topbar,
    Header,
    Main,
    Footer
  }
}
</script>

<style>
</style>
