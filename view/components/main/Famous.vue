<template>
  <div class="container">
    <div id="famous-section">
      <ul class="list first gclearfix">
        <li v-for="(item, index) in famous" :key="index">
          <img :src="item.icon ? item.icon : `${item.url}/favicon.ico`" alt="">
          <a :href="item.url" data-pos="1">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue';
import FAMOUS from '../../data/famous.json';
export default {
  setup() {
    const famous = reactive(FAMOUS);
    return {
      famous,
    };
  },
};
</script>
<style scoped>
#famous-section {
  padding: 5px 4px;
  background: #fff;
  border: 1px #e1e4e7 solid;
  overflow: hidden;
}

#famous-section .list {
  overflow: visible;
}

#famous-section .last {
  background: url(//hao1.qhimg.com/t01b0d5d027c0b4d545.png) no-repeat top center;
}

#famous-section .list li {
  width: 112px;
  padding: 0 8px;
  text-align: center;
  font-size: 14px;
  height: 28px;
  line-height: 28px;
  margin-top: 1px;
  float: left;
  overflow: hidden;
}
#famous-section .list li img {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  vertical-align: text-bottom;
}
#famous-section .list li a {
  background-repeat: no-repeat;
  background-position: 0 6px;
}

#famous-section .list li a.favicon {
  margin-left: -10px;
  padding-left: 20px;
  position: relative;
}

#famous-section .list li a.favicon img {
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 0;
  top: 6px;
}

#famous-section .list li a,
#famous-section .list li .split {
  display: inline-block;
}

#famous-section .list li .split {
  padding: 0 2px 0 1px;
}
</style>
