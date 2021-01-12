<template>
<div id="main">
  <famous />
  <div class="container">
    <HaoCubes />
    <CubeList />
    <ArticalList />
  </div>
</div>
</template>
<script>
import Famous from './main/Famous.vue'
import HaoCubes from './main/HaoCubes.vue'
import CubeList from './main/CubeList.vue'
import ArticalList from './main/ArticalList.vue'

export default {
  name: 'Main',
  components: {
    Famous,
    HaoCubes,
    CubeList,
    ArticalList
  }
}
</script>
<style scoped>
#main {
  border-top: 1px #e2e4e7 solid;
  background-color: #f3f4f7;
}
.container {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
