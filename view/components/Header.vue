<template>
  <div id="header">
    <div class="container">
      <logo />
      <search />
    </div>
  </div>
</template>
<script>
import Logo from "./header/Logo.vue";
import Search from "./header/Search.vue";
export default {
  name: 'Header',
  components: {
    Logo,
    Search
  }
}
</script>
<style scoped>
#header {
  box-sizing: border-box;
  position: relative;
  height: 103px;
  padding-top: 6px;
}
.container {
  display: flex;
}
.container > div:first-child {
  margin-right: 20px;
}
</style>
