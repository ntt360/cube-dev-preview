<template>
  <div id="search" class="searchbig">
    <div class="search-hd">
      <ul class="tab gclearfix theme-search-tab">
        <li data-cate="webpage" :class="{on: current == index}" v-for="(item, index) in engines" :key="index">
          <a href="javascript:void(0)" target="_self" @click="changeEngine(index)">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <div class="search-bd">
      <div class="form-group">
        <form id="search-form" target="_blank" :action="active.path">
          <fieldset>
            <div id="search-input">
              <input
                type="text"
                :name="active.q"
                autocomplete="off"
                id="search-kw"
                qsuginited="1"
                placeholder=""
              />
            </div>
            <button id="search-btn" type="submit" class="">搜索</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from 'vue'

const ENGINES = [
  {
    title: '网页',
    path: 'https://www.so.com/s',
    q: 'q'
  },
  {
    title: 'MDN',
    path: 'https://developer.mozilla.org/en-US/search',
    q: 'q'
  },
  {
    title: 'Can I Use',
    path: 'https://caniuse.com/',
    q: 'search'
  },
  {
    title: 'NPM',
    path: 'https://www.npmjs.com/search',
    q: 'q'
  },
  {
    title: 'GitHub',
    path: 'https://github.com/search',
    q: 'q'
  }
]
export default {
  setup() {
    let current = ref(0)
    let engines = reactive(ENGINES)
    let active = reactive({})

    const changeEngine = (index) => {
      Object.assign(active, engines[index])
      current.value = index
    }

    onMounted(() => {
      changeEngine(0)
    })

    return {
      engines,
      current,
      active,
      changeEngine
    }
  },
}
</script>
<style scoped>
#search .search-hd {
  position: relative;
  padding: 11px 0 0 0;
  width: 550px;
  height: 24px;
  margin: -4px 0 3px 7px;
}

#search .tab li {
  float: left;
  margin-right: 16px;
  padding: 0 4px;
  height: 21px;
  line-height: 21px;
  font-size: 13px;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
}

#search .tab li.hover {
  color: #00c13c;
  background: #fff;
}

#search .tab li a {
  color: #333;
  font-size: 14px;
}

#search .tab li.hover a {
  text-decoration: none;
  color: #00c13c;
}

#search .tab li.on {
  cursor: default;
  background: #00ce41;
}

#search .tab li.on a {
  text-decoration: none;
  cursor: default;
  color: #fff;
}

#search .tab li.on a.link:hover {
  text-decoration: none;
  cursor: default;
}

#search-input {
  float: left;
  width: 600px;
  height: 40px;
  border: 2px solid #00ce41;
  border-right-width: 0px;
  background: #fff;
}

#search-input input {
  margin-top: 9px;
  padding: 0 6px;
  width: 560px;
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  border: 0;
  background: none;
  outline: 0;
  -webkit-appearance: none;
}
#search-btn {
  overflow: hidden;
  width: 118px;
  height: 44px;
  text-align: center;
  font-size: 17px;
  border: 0;
  background: #00ce41;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  color: #fff;
}

#search-btn.hover {
  background: #1ad354;
}
</style>
