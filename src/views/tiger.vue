<template>
  <div>
    <div id="wrap">
      <!--游戏区域-->
      <div class="main">
        <!--滚动信息-->
        <div class="info clearfix">
          <img src="@/assets/tiger/image/sound.png">
          <ul>
            <li>
              恭喜<span class="start-num">134</span>****<span class="end-num">0481</span>
              获得<span class="prize">豪华大礼包</span>一份
            </li>
            <li>
              恭喜<span class="start-num">134</span>****<span class="end-num">0481</span>
              获得<span class="prize">000</span>一份
            </li>
          </ul>
        </div>
        <!--滚动奖品-->
        <ul class="box clearfix">
          <li class="roll">
            <div>
              <ul>
                <li class="prize3"></li>
                <li class="prize1"></li>
                <li class="prize2"></li>
                <li class="prize3"></li>
                <li class="prize1"></li>
              </ul>
            </div>
          </li>
          <li class="roll">
            <div>
              <ul>
                <li class="prize3"></li>
                <li class="prize1"></li>
                <li class="prize2"></li>
                <li class="prize3"></li>
                <li class="prize1"></li>
              </ul>
            </div>
          </li>
          <li class="roll">
            <div>
              <ul>
                <li class="prize3"></li>
                <li class="prize1"></li>
                <li class="prize2"></li>
                <li class="prize3"></li>
                <li class="prize1"></li>
              </ul>
            </div>
          </li>
          <li class="shadow"></li>
        </ul>
        <!--信息-->
        <div class="txt clearfix">
          <p class="fl">今日还有 <span id="change"> 8 </span> 次抽奖机会</p>
          <p class="fr">惊喜数码随你拿~</p>
        </div>
        <!--按钮区域-->
        <div class="box-btn clearfix">
          <div class="rule fl"></div>
          <div id="go" class="go fl"></div>
          <div id="hand" class="shak"></div>
          <router-link to="/my" id="myWin" class="my fr"></router-link>
        </div>
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
    require('@/assets/tiger/js/index')
  }
}
</script>

<style src="../../public/common/css/swiper.min.css"></style>
<style src="../../public/common/css/common_mobile.css"></style>
<style src="@/assets/tiger/css/index.css" scoped></style>