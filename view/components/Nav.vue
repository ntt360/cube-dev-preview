<template>
  <div id="doc-top-ft">
    <div class="container">
      <div id="dongdong" class="dongdong gclearfix">
        <div class="dongdong-section icon-home">
          <b class="icon"><img src="https://hao1.qhimg.com/t01082aa64d17c3e904.png" alt="" /></b>
          <a href="https://www.360.cn/">卫士</a>
          <a href="https://hao.360.com/rili/#cid=youlike">日历</a>
          <a href="https://www.360kuai.com/pc/home?sign=360_b7dbbfe4">新闻</a>
          <a href="https://news.edu.360.cn/">教育</a>
        </div>
        <span class="dongdong-split"></span>
        <div class="dongdong-section icon-star">
          <b class="icon"><img src="https://hao1.qhimg.com/t01131a47dc96aaa1cb.png" alt="" /></b>
          <a href="https://yule.360.com/">娱乐</a>
          <a href="https://yule.360.com/list?tag=%E7%BB%BC%E8%89%BA">综艺</a>
          <a href="https://www.360kan.com/dianying/index.html?from=dongdong">电影</a>
          <a href="https://www.360kan.com/dianshi/index.html?from=dongdong">电视剧</a>
        </div>
        <span class="dongdong-split"></span>
        <div class="dongdong-section icon-video">
          <b class="icon"><img src="https://hao1.qhimg.com/t013a8296f7a5989c7e.png" alt="" /></b>
          <a href="https://gouwu.360.cn/">购物</a>
          <a href="https://gouwu.360.cn/category/nvzhuang" class="orange">服饰</a>
          <a href="https://g.360.cn/">游戏</a>
          <a href="https://xiaoyouxi.360.cn/?src=youxi">小游戏</a>
        </div>
        <span class="dongdong-split"></span>
        <div class="dongdong-section icon-money">
          <b class="icon"><img src="https://hao1.qhimg.com/t01b82a8a713a870456.png" alt="" /></b>
          <a href="https://licai.360.cn/">理财</a>
          <a href="https://licai.360.cn/bank#cid=2">银行</a>
          <a href="https://junshi.hao.360.cn/#cid=militery">军事</a>
          <a href="https://cp.360.cn/?agent=700015">彩票</a>
        </div>
        <span class="dongdong-split"></span>
        <div class="dongdong-section icon-article">
          <b class="icon"><img src="https://hao1.qhimg.com/t0148fdfb7f05f005ee.png" alt="" /></b>
          <a href="https://story.hao.360.cn/">故事</a>
          <a href="https://go.360.cn/">旅游</a>
          <a href="https://sports.hao.360.cn/#cid=sport">体育</a>
          <a href="https://auto.360.cn/?sign=360_d6d594ba&amp;refer_scene=car2">汽车</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#doc-top-ft {
  border-top: 1px solid #f7f7f7;
}
.dongdong {
  height: 36px;
  line-height: 36px;
  padding: 1px 0;
  overflow: hidden;
  margin: 0 auto;
}

.dongdong-section {
  float: left;
  width: 195px;
    margin: 0 8px 0 12px;
  padding-left: 18px;
  position: relative;
}

.dongdong-split {
  display: block;
  float: left;
  width: 1px;
  height: 20px;
  background: #e2e4e7;
  margin-top: 8px;
  overflow: hidden;
}

.dongdong-section b.icon {
  display: block;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 9px;
  left: 0;
}

.dongdong-section.icon-home b.icon,
.dongdong-section.icon-star b.icon {
  top: 8px;
}

.dongdong-section b.icon img {
  display: block;
  width: 100%;
  height: 100%;
}

.dongdong-section a {
  font-size: 14px;
  float: left;
  width: 25%;
  text-align: center;
}
</style>
