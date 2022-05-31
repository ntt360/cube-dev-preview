<template>
  <div class="container">
    <div class="cube-wrap" ref="cubeWrap">
      <div id="cube-temp" :style="{width: width + 'px'}"></div>
      <div class="cube-tips" v-html="tips"></div>
    </div>
    <CubeCtrl @width-change="cbWidth"/>
  </div>
</template>

<script>
import CubeCtrl from './CubeCtrl.vue'

export default {
  data(){
    return {
      width: sessionStorage.getItem('cubeLastWidth') || 398,
      tips: '稍等，cube 加载中...'
    }
  },
  mounted() {
    if(!window.renderCube){
      this.tips = '<p class="error-tips">系统错误，没有定义 renderCube 回调方法</p>'
    } else {
      renderCube().then(() => {
        this.tips = ''
      }).catch(err => {
        this.tips = `<p class="error-tips">${err}</p>`
      })
    }
  },
  components: {
    CubeCtrl,
  },
  methods: {
    cbWidth(width){
      this.width = width
      sessionStorage.setItem('cubeLastWidth', width)
    }
  }
};
</script>

<style scoped>
#cube-temp {
  padding:10px;
  border:1px solid #eee;
  margin:0 auto;
}
.container>div {
  margin-top:10px;
  background: #fff;
  border: 1px #e1e4e7 solid;
}
.cube-wrap {
  padding: 60px 0;
}
.cube-tips {
  text-align: center;
}
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
