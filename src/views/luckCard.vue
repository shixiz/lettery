<template>
  <div>
    <div id="wrap">
      <p class="rule fl">规则</p>
      <router-link to="/my" id="myWin" class="my fr">我的</router-link>
      <!--游戏区域-->
      <div class="main">
        <h2>今日还有 <span id="change"> 4 </span> 次翻牌机会</h2>
        <ul class="box">
          <li class="animate1">
            <img src="@/assets/luckCard/image/pattern1.png">
          </li>
          <li class="animate2">
            <img src="@/assets/luckCard/image/pattern2.png">
          </li>
          <li class="animate3">
            <img src="@/assets/luckCard/image/pattern3.png">
          </li>
          <li class="animate4">
            <img src="@/assets/luckCard/image/pattern4.png">
          </li>
          <li class="animate5">
            <img src="@/assets/luckCard/image/pattern1.png">
          </li>
          <li>
            <img src="@/assets/luckCard/image/pattern2.png">
          </li>
        </ul>
        <!--奖品展示-->
        <div class="awards">
          <div class="swiper-container">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <img src="../../public/common/image/icon/drag/drag1.png">
              </li>
              <li class="swiper-slide">
                <img src="../../public/common/image/icon/drag/drag2.png">
              </li>
              <li class="swiper-slide">
                <img src="../../public/common/image/icon/drag/drag3.png">
              </li>
              <li class="swiper-slide">
                <img src="../../public/common/image/icon/drag/drag4.png">
              </li>
              <li class="swiper-slide">
                <img src="../../public/common/image/icon/drag/drag5.png">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="mask-card"></div>
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
    },
  },
  created() { this.Adaptation() },
  mounted() {
    require('@/assets/luckCard/js/index')
  }
}
</script>

<style src="../../public/common/css/swiper.min.css"></style>
<style src="../../public/common/css/common_mobile.css?version=1.0.0"></style>
<style src="@/assets/luckCard/css/index.css" scoped></style>