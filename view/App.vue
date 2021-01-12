<template>
    <Topbar />
    <Header />
    <Nav />
    <Main />
</template>
<script>
import Topbar from './components/Topbar.vue'
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Main from "./components/Main.vue";

export default {
  name: 'App',
  components: {
    Topbar,
    Header,
    Nav,
    Main
  }
}
</script>

<style>
</style>
