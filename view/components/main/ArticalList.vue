<template>
  <div id="info-flow">
    <div class="info-flow-nav">
      <ul id="infoflow-right-nav-ul">
        <li>
          <a class="active" data-cid="youlike" href="###">推荐</a>
        </li>
      </ul>
    </div>
    <div class="feed-box">
      <div class="feed-item">
        <div class="img-wrap">
          <a href="https://www.yuque.com/cubedev/guide/abr326" title="cube开发流程"
            ><img
              class="lazy"
              src="http://p3.qhimg.com/dr/316_176_/t010c961f961ef61e5d.png"
              alt="cube开发流程"
          /></a>
        </div>
        <div class="media-body">
          <h1 class="media-title">
            <a href="https://www.yuque.com/cubedev/guide/abr326" title="cube开发流程"
              >cube开发流程</a
            >
          </h1>
          <p class="media-extra">
            <span class="col cite-name">BeauChan</span><span class="col split">|</span
            ><span class="col tag cite-name">字数:1574</span
            ><span class="col tag cite-name">喜欢:1</span
            ><span class="col tag cite-name">2020/9/29</span>
          </p>
        </div>
      </div>
      <div class="feed-item">
        <div class="img-wrap">
          <a
            href="https://www.yuque.com/cubedev/guide/syhz1r"
            title="如何在cube中正确使用网络请求？"
            ><img
              class="lazy"
              src="http://p3.qhimg.com/dr/316_176_/t010c961f961ef61e5d.png"
              alt="如何在cube中正确使用网络请求？"
          /></a>
        </div>
        <div class="media-body">
          <h1 class="media-title">
            <a
              href="https://www.yuque.com/cubedev/guide/syhz1r"
              title="如何在cube中正确使用网络请求？"
              >如何在cube中正确使用网络请求？</a
            >
          </h1>
          <p class="media-extra">
            <span class="col cite-name">suntong</span><span class="col split">|</span
            ><span class="col tag cite-name">字数:2037</span
            ><span class="col tag cite-name">喜欢:5</span
            ><span class="col tag cite-name">2020/7/21</span>
          </p>
        </div>
      </div>
    </div>
    <div class="feed-box">
      <div class="feed-item">
        <div class="img-wrap">
          <a href="https://cube.360.com/docs?unid=bd30621c44cbf07ba6c22c05b53e36e7" title="cube开发常见问题"
            ><img
              class="lazy"
              src="http://p3.qhimg.com/dr/316_176_/t010c961f961ef61e5d.png"
              alt="cube开发常见问题"
          /></a>
        </div>
        <div class="media-body">
          <h1 class="media-title">
            <a href="https://cube.360.com/docs?unid=bd30621c44cbf07ba6c22c05b53e36e7" title="cube开发常见问题"
              >cube开发常见问题</a
            >
          </h1>
          <p class="media-extra">
            <span class="col cite-name">管理员</span><span class="col split">|</span
            ><span class="col tag cite-name">字数:1574</span
            ><span class="col tag cite-name">喜欢:1</span
            ><span class="col tag cite-name">2020/9/29</span>
          </p>
        </div>
      </div>
      <div class="feed-item">
        <div class="img-wrap">
          <a
            href="https://cube.360.com/docs?unid=0529ef871394f6b29ccf445cb0e8b41f"
            title="cube开发代码规范"
            ><img
              class="lazy"
              src="http://p3.qhimg.com/dr/316_176_/t010c961f961ef61e5d.png"
              alt="cube开发代码规范"
          /></a>
        </div>
        <div class="media-body">
          <h1 class="media-title">
            <a
              href="https://cube.360.com/docs?unid=0529ef871394f6b29ccf445cb0e8b41f"
              title="cube开发代码规范"
              >cube开发代码规范</a
            >
          </h1>
          <p class="media-extra">
            <span class="col cite-name">管理员</span><span class="col split">|</span
            ><span class="col tag cite-name">字数:2037</span
            ><span class="col tag cite-name">喜欢:5</span
            ><span class="col tag cite-name">2020/7/21</span>
          </p>
        </div>
      </div>
    </div>
    <div class="feed-box">
      <div class="feed-item">
        <div class="img-wrap">
          <a href="https://cube.360.com/docs?unid=723ddf6b59ea3d141bcd30ce8004b9dd" title="cube开发标签使用"
            ><img
              class="lazy"
              src="http://p3.qhimg.com/dr/316_176_/t010c961f961ef61e5d.png"
              alt="cube开发标签使用"
          /></a>
        </div>
        <div class="media-body">
          <h1 class="media-title">
            <a href="https://cube.360.com/docs?unid=723ddf6b59ea3d141bcd30ce8004b9dd" title="cube开发标签使用"
              >cube开发标签使用</a
            >
          </h1>
          <p class="media-extra">
            <span class="col cite-name">管理员</span><span class="col split">|</span
            ><span class="col tag cite-name">字数:1574</span
            ><span class="col tag cite-name">喜欢:1</span
            ><span class="col tag cite-name">2020/9/29</span>
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="feed-box" v-for="item in [1,2,3]">
      <div class="feed-item" v-for="(item, index) in articals" :key="index">
        <div class="img-wrap">
          <a
            :href="item.url"
            :title="item.title"
          >
            <img
              class="lazy"
              src="https://p0.ssl.qhimg.com/dmfd/158_88_/t018f75d1140a98cd40.png"
              :alt="item.title"
            />
          </a>
        </div>
        <div class="media-body">
          <h1 class="media-title">
            <a
              :href="item.url"
              :title="item.title"
              >{{item.title}}</a
            >
          </h1>
          <p class="media-extra">
            <span class="col cite-name">{{item.last_editor.name}}</span>
            <span class="col split">|</span>
            <span class="col tag cite-name">字数:{{item.word_count}}</span>
            <span class="col tag cite-name">喜欢:{{item.likes_count}}</span>
            <span class="col tag cite-name">{{item.updated_at}}</span>
          </p>
        </div>
      </div>
    </div> -->
    <!-- <li v-for="(item, index) in articals" :key="index">{{index}}</li> -->
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';

const apiFetchArticals = function () {
  var headers = new Headers();
  headers.append('X-Auth-Token', 'AQhhlq6AhMDDxxqgD9J1ne8NZ6VkS82XYlDJWg5X');
  headers.append('User-Agent', 'cubedev');

  var options = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
  };

  var request = new Request('/api/v2/repos/cubedev/guide/docs?limit=2&offset=0', options);
  return fetch(request).then((res) => {
    return res.json();
  });
};

export default {
  setup() {
    let articals = reactive([]);
    const fetchArticals = async () => {
      const res = await apiFetchArticals();
      res.data.forEach((item) => {
        item.url = `https://www.yuque.com/cubedev/guide/${item.slug}`;
        item.updated_at = new Date(item.updated_at).toLocaleDateString();
        articals.push(item);
      });
    };
    // onMounted(fetchArticals)

    return {
      articals,
      fetchArticals,
    };
  },
};
</script>

<style scoped>
#info-flow {
  width: 598px;
  border: 1px solid #e2e4e7;
  background-color: #fff;
}
.info-flow-nav {
  height: 34px;
  overflow: hidden;
  margin: 0 auto;
}

.info-flow-nav ul {
  margin-left: 9px;
  overflow: hidden;
}

.info-flow-nav li {
  float: left;
  width: 40px;
}

.info-flow-nav a {
  display: block;
  width: 28px;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  color: #666;
  padding-top: 3px;
  line-height: 26px;
  border-top: 3px solid #fff;
}

.info-flow-nav a {
  text-decoration: none;
}

.active a {
  color: #fff;
}

.info-flow-nav .active {
  position: relative;
  z-index: 1;
  color: #00c13c;
  border-top: 3px solid #00c13c;
}

.feed-box {
  padding: 0 16px;
}
.feed-item {
  padding: 10px 0;
  position: relative;
  display: flex;
  -webkit-transition: background 0.3s ease-in;
  transition: background 0.3s ease-in;
}

.feed-item:hover {
  background: #f7f7f7;
}

.feed-item a {
  display: block;
}
.img-wrap {
  margin-right: 10px;
}
.img-wrap img {
  width: 158px;
  height: 88px;
}
.media-title {
  white-space: normal;
  text-overflow: clip;
  line-height: 1.5;
  font-size: 17px;
  margin-top: 5px;
  overflow: hidden;
  color: #111;
  font-weight: normal;
  white-space: nowrap;
}
.media-extra {
  position: relative;
  margin-top: 34px;
  height: 18px;
  color: #999;
  line-height: 18px;
}
.cite-logo {
  margin-right: 3px;
  float: left;
}
.cite-logo img {
  width: 16px;
  height: 16px;
}
.col {
  float: left;
  margin-right: 6px;
}
</style>
