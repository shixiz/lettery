<template>
  <div>
    <div id="wrap">
      <p class="time">3.10-3.25</p>
      <!--星星-->
      <div class="stars-box">
        <span class="stars"></span>
        <span class="stars"></span>
        <span class="stars"></span>
        <span class="stars"></span>
        <span class="stars"></span>
        <span class="stars"></span>
        <span class="stars"></span>
      </div>
      <!--主体-->
      <div class="main">
        <p class="rule"></p>
        <router-link to="/my" id="myWin">
          <p class="my"></p>
        </router-link>
        <!--游戏区域-->
        <div class="box">
          <span class="coin"></span>
          <h2>您今日还有 <span id="change"> 3 </span> 次抽奖机会</h2>
          <ul class="light clearfix">
            <li class="fl">
              <p></p>
              <p class="blin"></p>
              <p></p>
              <p class="blin"></p>
            </li>
            <li class="fr">
              <p class="blin"></p>
              <p></p>
              <p class="blin"></p>
              <p></p>
            </li>
          </ul>
          <!--九宫格-->
          <ul class="play clearfix">
            <li class="prize select">
              <div>
                <img src="../../public/common/image/icon/box1.png">
                <p>iPad mini</p>
              </div>
            </li>
            <li class="prize">
              <div>
                <img src="../../public/common/image/icon/box2.png">
                <p>购物券</p>
              </div>
            </li>
            <li class="prize">
              <div>
                <img src="../../public/common/image/icon/box3.png">
                <p>拍立得</p>
              </div>
            </li>
            <li>
              <div>
                <img src="../../public/common/image/icon/box0.png">
                <p>谢谢参与</p>
              </div>
            </li>
            <!--开始按钮-->
            <li id="btn"></li>
            <!--开始按钮-->
            <li class="prize">
              <div>
                <img src="../../public/common/image/icon/box4.png">
                <p>豪华礼包</p>
              </div>
            </li>
            <li class="prize">
              <div>
                <img src="../../public/common/image/icon/box5.png">
                <p>88元现金红包</p>
              </div>
            </li>
            <li>
              <div>
                <img src="../../public/common/image/icon/box0.png">
                <p>谢谢参与</p>
              </div>
            </li>
            <li class="prize">
              <div>
                <img src="../../public/common/image/icon/box6.png">
                <p>100元购物卡</p>
              </div>
            </li>
          </ul>
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
    require('@/assets/nineGrid/js/index')
  }
}
</script>

<style src="../../public/common/css/swiper.min.css"></style>
<style src="../../public/common/css/common_mobile.css?version?1.0.0"></style>
<style src="@/assets/nineGrid/css/index.css" scoped></style>