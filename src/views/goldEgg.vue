<template>
  <div>
    <div id="wrap">
      <div class="bg"></div>
      <div class="rule"></div>
      <router-link to="/my" id="myWin">
        <div class="my">我的奖品</div>
      </router-link>
      <!--砸蛋区域-->
      <div class="box">
        <p class="tips">今天剩余免费<span id="change">5</span>次</p>
        <ul class="egg clearfix">
          <li>
            <img src="@/assets/goldEgg/image/egg.png" class="goldegg init">
            <img src="@/assets/goldEgg/image/base.png">
            <div class="info"></div>
          </li>
          <li>
            <img src="@/assets/goldEgg/image/egg.png" class="goldegg init">
            <img src="@/assets/goldEgg/image/base.png">
            <div class="info"></div>
          </li>
          <li>
            <img src="@/assets/goldEgg/image/egg.png" class="goldegg init">
            <img src="@/assets/goldEgg/image/base.png">
            <div class="info"></div>
          </li>
          <li>
            <img src="@/assets/goldEgg/image/egg.png" class="goldegg init">
            <img src="@/assets/goldEgg/image/base.png">
            <div class="info"></div>
          </li>
          <li>
            <img src="@/assets/goldEgg/image/egg.png" class="goldegg init">
            <img src="@/assets/goldEgg/image/base.png">
            <div class="info"></div>
          </li>
          <li>
            <img src="@/assets/goldEgg/image/egg.png" class="goldegg init">
            <img src="@/assets/goldEgg/image/base.png">
            <div class="info"></div>
          </li>
          <li>
            <img src="@/assets/goldEgg/image/egg.png" class="goldegg init">
            <img src="@/assets/goldEgg/image/base.png">
            <div class="info"></div>
          </li>
          <li>
            <img src="@/assets/goldEgg/image/egg.png" class="goldegg init">
            <img src="@/assets/goldEgg/image/base.png">
            <div class="info"></div>
          </li>
          <li>
            <img src="@/assets/goldEgg/image/egg.png" class="goldegg init">
            <img src="@/assets/goldEgg/image/base.png">
            <div class="info"></div>
          </li>
        </ul>
        <div id="hammer" class="shak"></div>
      </div>
      <!--游戏规则弹窗-->
      <div id="mask-rule">
        <div class="box-rule">
          <span class="star"></span>
          <h2>活动规则说明</h2>
          <span id="close-rule"></span>
          <div class="con">
            <div class="text">
              <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
              <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
              <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
              <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
              <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
              <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
              <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
              <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
              <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
              <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
              <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
              <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
            </div>
          </div>
        </div>
      </div>
      <!--中奖提示-->
      <div id="mask">
        <div class="blin"></div>
        <div class="caidai"></div>
        <div class="winning">
          <div class="red-head"></div>
          <div class="red-body"></div>
          <div id="card">
            <a href="" target="_self" class="win"></a>
          </div>
          <a href="" target="_self" class="btn"></a>
          <span id="close"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Adaptation() {
      var html = document.querySelector('html');
      changeRem();
      window.addEventListener('resize', changeRem);
      function changeRem() {
        var width = html.getBoundingClientRect().width;
        html.style.fontSize = width / 10 + 'px';
      }
    }
  },
  created() { this.Adaptation() },
  mounted() {
    require('@/assets/goldEgg/js/index')
  }
}
</script>

<style src="../../public/common/css/common_mobile.css?version=1.0.0" scoped></style>
<style src="@/assets/goldEgg/css/index.css?version?1.0.0" scoped></style>