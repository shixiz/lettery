<template>
  <div>
    <div id="wrap">
      <div class="caidai1"></div>
      <div class="caidai2"></div>
      <div class="caidai3"></div>
      <!--游玩区域-->
      <div class="box">
        <p class="rule">活动规则</p>
        <router-link to="/my" id="myWin">
          <p class="my">我的奖品</p>
        </router-link>
        <div class="panel">
          <canvas id="canvas" width="562" height="308"></canvas>
          <div id="canvas-mask">
            <a id="btn" href="javascript:;"></a>
            <p>您今天还有<span id="change">3</span>次刮奖机会</p>
          </div>
        </div>
        <!--奖品展示。-->
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
    require('@/assets/guaguale/js/index')
  }
}
</script>

  <style src="../../public/common/css/common_mobile.css?versison?1.0.0"></style>
  <style src="../../public/common/css/swiper.min.css"></style>
<style src="@/assets/guaguale/css/index.css" scoped></style>