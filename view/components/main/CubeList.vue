<template>
  <div id="cube">
    <div class="cube-nav-list cube-info-box" id="cube-nav">
      <a href="https://cube.360.com/" target="_blank" class="cube-nav-title">cube · 魔方</a>
    </div>
    <div id="cube-list" ref="cubeList"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.cubeList.appendChild(document.getElementById('cube-temp'))
  }
};
</script>

<style scoped>
.cube-info-box {
  box-sizing: border-box;
  width: 400px;
  height: 36px;
  padding: 0 9px 0 15px;
  border: 1px #e2e4e7 solid;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  background: #fff;
  margin-bottom: 10px;
}
.cube-nav-list .cube-nav-title {
  font-size: 14px;
  line-height: 34px;
}
</style>
