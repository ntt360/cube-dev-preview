<template>
<div id="main">
  <CubeView />
  <Links />
</div>
</template>
<script>
import Links from './main/Links.vue'
import CubeView from './cube/CubeView.vue'

export default {
  name: 'Main',
  components: {
    Links,
    CubeView,
  }
}
</script>
<style scoped>
#main {
  border-top: 1px #e2e4e7 solid;
  background-color: #f3f4f7;
}
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
