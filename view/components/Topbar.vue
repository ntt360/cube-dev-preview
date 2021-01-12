<template>
  <div id="topbar">
    <div class="container">
      <ul class="menu">
        <li class="item" v-for="(item, index) in sites" :key="index"> <a :href="item.url">{{item.name}}</a> </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import SITES from '../data/topbar.json'
export default {
  setup() {
    let sites = reactive(SITES)
    return {
      sites
    }
  }
}
</script>

<style>
#topbar {
  height: 36px;
}
.menu {
  float: right;
  line-height: 36px;
}
.menu .item {
  float: left;
  margin-left: 10px;
}
.menu .item a {
  color: #999;
}
</style>
