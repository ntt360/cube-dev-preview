<template>
  <div class="cube-ctrl">
    <input type="range" id="wrap-width" name="wrap-width" min="200" max="1150" list="cube-widths" v-model="width" @change="$emit('width-change', width)">
    <label for="wrap-width">容器宽度：<em id="width-value">{{ width }}</em>px</label>
    <datalist id="cube-widths">
      <option value="346" label="346"></option>
      <option value="398" label="398"></option>
      <option value="1140" label="1140"></option>
    </datalist>
  </div>
</template>

<script>
export default {
  data(){
    return {
      width: sessionStorage.getItem('cubeLastWidth') || 398
    }
  }
}
</script>

<style scoped>
.cube-ctrl {
  padding: 15px 0;
  text-align: center;
}
input {
  width: 400px;
}
label {
  margin-left: 10px;
}
</style>