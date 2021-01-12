<template>
  <div id="sites-lib-classify">
    <div class="sites-lib-flow-circle"></div>
    <div class="sites-lib-flow-title classify-tab" id="classify-tab">
      <a onclick="return false;">cube 精选</a>
    </div>
    <div class="sites-lib-hr"></div>

    <!-- 分类网址 -->
    <div id="sites-lib-list">
      <div class="sites-lib-title" v-for="(item, index) in cubes" :key="index">
        <!-- 分类 -->
        <a class="sites-classify" :href="`https://hao.360.com/2020.html?online=1&cube_ids=${item.id}`">{{item.name}}</a>
        <div class="sites-lib-site-hr"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
import CUBES from '../../data/HaoCubes.json'

export default {
  setup() {
    let cubes = reactive(CUBES)
    return {
      cubes
    }
  }
}
</script>

<style scoped>
.sites-lib-title {
  height: 36px;
  line-height: 36px;
  color: #333;
  border: 1px transparent solid;
  position: relative;
}

.sites-lib-main {
  position: absolute;
  left: 146px;
  top: -1px;
  background: #f4faf4;
  z-index: 3;
  width: 410px;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.12);
  border: 1px solid #00ce41;
  opacity: 0;
  visibility: hidden;
  padding: 3px 0;
  line-height: 1;
}

.sites-classify {
  font-size: 14px;
  margin-left: 14px;
}

.sites-lib-downarrow {
  margin-right: 16px;
  cursor: pointer;
  background: url('//hao2.qhimg.com/d/inn/ec1d3bf8/arrows.png') no-repeat;
  height: 5px;
  width: 10px;
  background-position: 0 -28px, center;
  float: right;
  margin-top: 18px;
}

.sites-lib-more {
  font-size: 12px;
  color: #999999;
  float: right;
  margin-top: 12px;
  margin-right: 16px;
}

.sites-lib-title-img {
  display: inline-block;
  position: relative;
  top: -3px;
  height: 3px;
  width: 3px;
  background: #999999;
  border-radius: 50%;
  margin: 0 1px 0 1px;
}

.sites-lib-hr {
  width: 118px;
  height: 1px;
  background-color: #dddddd;
  margin: 0 auto;
}

.sites-lib-site {
  font-size: 14px;
  line-height: 36px;
  display: inline-block;
  user-select: none;
}

.sites-lib-site-left div.sites-lib-site {
  width: 99px;
  height: 34px;
  line-height: 34px;
  position: relative;
}

.sites-lib-site-hr {
  width: 117px;
  margin: 0 auto;
  opacity: 1;
  border-bottom: 1px dotted #dddddd;
}

.sites-lib-site-img {
  margin-right: 4px;
  top: -1px;
  width: 16px;
  height: 16px;
  position: relative;
}

#sites-lib-flow {
  z-index: 3;
}

#sites-lib-classify {
  border: 1px solid rgb(226, 228, 231);
  box-shadow: rgba(8, 1, 3, 0.05) 0px 1px 1px 0px;
  background-color: #fff;
  width: 150px;
}
 #sites-lib-classify .classify-tab a {
                text-decoration: none;
                color: #00c13c;
                cursor: default
            }


.sites-lib-flow-circle {
  display: inline-block;
  height: 5px;
  width: 5px;
  margin-left: 15px;
  position: relative;
  top: -2px;
  margin-right: 2px;
  background: #00c13c;
  border-radius: 50%;
}

.sites-lib-title-site {
  font-size: 14px;
  color: #999999;
}

.sites-lib-flow-title {
  height: 40px;
  color: #00c13c;
  font-size: 14px;
  letter-spacing: -1px;
  display: inline-block;
  line-height: 40px;
  font-weight: bold;
}

.sites-lib-flow-circle {
  display: inline-block;
  height: 5px;
  width: 5px;
  margin-left: 15px;
  position: relative;
  top: -2px;
  margin-right: 2px;
  background: #00c13c;
  border-radius: 50%;
}

.sites-lib-title-site {
  font-size: 14px;
  color: #999999;
}
.sites-lib-hr {
                width: 118px;
                height: 1px;
                background-color: #dddddd;
                margin: 0 auto
            }

.sites-lib-flow-title-more {
  display: inline-block;
  width: 99px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  overflow: hidden;
}

.sites-lib-flow-title-more a {
  margin-left: 16px;
  color: #00c13c;
}

.sites-lib-title:last-child {
  height: 36px;
}

.sites-lib-title:last-child:after {
  height: 36px;
}

.sites-lib-right-arrow {
  width: 5px;
  height: 10px;
  position: absolute;
  top: 14px;
  left: 126px;
  background-image: url(//hao1.qhimg.com/t012bdf9004d25dbf28.png);
  background-image: -webkit-image-set(url(//hao1.qhimg.com/t012bdf9004d25dbf28.png) 1x, url(//hao5.qhimg.com/t016c0472c8c1cc0e5a.png) 2x);
  background-image: image-set(url(//hao1.qhimg.com/t012bdf9004d25dbf28.png) 1x, url(//hao5.qhimg.com/t016c0472c8c1cc0e5a.png) 2x);
  background-position: center center;
  background-repeat: no-repeat;
}

.hover-after:after {
  content: ' ';
  width: 3px;
  height: 100%;
  background: #f4faf4;
  position: absolute;
  top: 0px;
  left: 145px;
  z-index: 3;
}

.sites-lib-site a.sites-lib-site-text {
  margin-left: 16px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
}

.sites-lib-title a.sites-lib-site-text b.icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 3px;
  vertical-align: middle;
}

.sites-lib-title a.sites-lib-site-text b.icon img {
  display: inline-block;
  width: 100%;
  height: 100%;
  vertical-align: top;
  position: relative;
  top: -1px;
}

.sites-lib-title .breathe {
  position: relative;
}

.sites-lib-title .breathe::before {
  display: block;
  content: '';
  width: 4px;
  height: 4px;
  background: #f60;
  border-radius: 50%;
  animation: breathe 0.8s linear infinite alternate;
  -webkit-animation: breathe 0.8s linear infinite alternate;
  box-shadow: 0 0 1px 1px #f60;
  position: absolute;
  right: -5px;
  top: -2px;
}
.sites-lib-title .sites-pubble-anim {
  display: none;
}

.sites-lib-title .sites-pubble-static {
  display: block;
  width: 28px;
  height: 28px;
  padding: 1px 0 1px 2px;
  border: 1px solid #ff9b1b;
  background-color: #fff;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  position: absolute;
  left: 78px;
  top: 2px;
  z-index: 2;
  font-size: 12px;
  color: #ee3300;
  line-height: 14px;
  letter-spacing: 2px;
}

.sites-lib-title .sites-pubble-static::before,
.sites-lib-title .sites-pubble-static::after {
  display: block;
  content: '';
  position: absolute;
  top: 50%;
  margin-top: -6px;
  width: 0;
  height: 0;
  border-width: 6px;
  border-style: dashed solid dashed dashed;
  border-color: transparent #fff transparent transparent;
}

.sites-lib-title .sites-pubble-static::before {
  left: -12px;
  border-color: transparent #ff9b1b transparent transparent;
}

.sites-lib-title .sites-pubble-static::after {
  left: -11px;
  border-color: transparent #fff transparent transparent;
}

.sites-lib-title .sites-pubble-still {
  height: 16px;
  line-height: 16px;
  border: 1px solid #ff9b1b;
  background-color: #fff;
  border-radius: 2px;
  position: absolute;
  left: 72px;
  top: 8px;
  z-index: 2;
  font-size: 12px;
  padding: 0 2px;
  color: #ee3300;
  white-space: nowrap;
}

.sites-lib-title .sites-pubble-still::before,
.sites-lib-title .sites-pubble-still::after {
  display: block;
  content: '';
  position: absolute;
  top: 50%;
  margin-top: -4px;
  width: 0;
  height: 0;
  border-width: 4px;
  border-style: dashed solid dashed dashed;
  border-color: transparent #fff transparent transparent;
}

.sites-lib-title .sites-pubble-still::before {
  left: -9px;
  border-color: transparent #ff9b1b transparent transparent;
}

.sites-lib-title .sites-pubble-still::after {
  left: -8px;
  border-color: transparent #fff transparent transparent;
}
</style>
