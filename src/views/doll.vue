<template>
  <div>
    <div id="wrap">
      <p class="rule fl">规则</p>
      <router-link to="/my" id="myWin" class="my fr">我的</router-link>
      <!--游戏区域-->
      <div class="main">
        <div class="caidai"></div>
        <div class="title"></div>
        <div class="box">
          <!--钩子-->
          <ul id="hook">
            <li class="line"></li>
            <li class="left"></li>
            <li class="right"></li>
          </ul>
          <!--传送带-->
          <div class="behind">
            <ul class="clearfix">
              <li class="moveing-left">
                <img src="@/assets/doll/image/small-bag.png">
              </li>
              <li>
                <img src="@/assets/doll/image/small-bag.png">
              </li>
              <li>
                <img src="@/assets/doll/image/small-bag.png">
              </li>
            </ul>
          </div>
          <div class="front">
            <ul class="clearfix">
              <li class="moveing-right">
                <img src="@/assets/doll/image/big-bag.png">
              </li>
              <li>
                <img src="@/assets/doll/image/big-bag.png">
              </li>
              <li>
                <img src="@/assets/doll/image/big-bag.png">
              </li>
            </ul>
          </div>
          <h3>还有 <span id="change"> 5 </span> 次免费机会</h3>
          <!--按钮区域-->
          <ul class="box-btn clearfix">
            <li></li>
            <li id="btn"></li>
            <li></li>
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
      <!-- <div id="mask">
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
      </div> -->
      <Tips @win="win" />
    </div>
  </div>
</template>



<script>
import Tips from "@/components/Tips.vue";
export default {
  components: {
    Tips
  },
  methods: {
    win(e) {
      console.log(e);
    },
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
  created() {
    this.Adaptation()
    // this.win()
  },
  mounted() {
    require('@/assets/doll/js/index.js')
  }
}
</script>

<style src="../../public/common/css/swiper.min.css" ></style>
<style src="../../public/common/css/common_mobile.css" scoped></style>
<style scoped>
@charset "utf-8";

body {
  background-color: #feefab;
}

#wrap {
  margin-top: -0.01333333rem;
  height: 17.8rem;
  background-image: url("@/assets/doll/image/bg.png");
  padding-top: 0;
}

.rule,
.my {
  position: relative;
  z-index: 3;
  margin-top: 0.48rem;
  width: 1.09333333rem;
  height: 0.74666667rem;
  background-color: #ff9d1b;
  text-align: center;
  line-height: 0.74666667rem;
  font-size: 0.32rem;
  color: #fff;
}

.rule {
  border-top-right-radius: 0.13333333rem;
  border-bottom-right-radius: 0.13333333rem;
}

.my {
  background-color: #fe5362;
  border-top-left-radius: 0.13333333rem;
  border-bottom-left-radius: 0.13333333rem;
}

/*游戏区域*/
.main {
  position: relative;
  width: 100%;
  height: 12.98666667rem;
}

.main .caidai {
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 3;
  margin-left: -4.29333333rem;
  width: 8.58666667rem;
  height: 11.64rem;
  background-image: url("@/assets/doll/image/caidai.png");
}

.main .title {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 4.18666667rem;
  background-image: url("@/assets/doll/image/title.png");
}

.main .box {
  position: relative;
  margin-top: -1.6rem;
  width: 100%;
  height: 10.42666667rem;
  background-image: url("@/assets/doll/image/box.png");
}

/*钩子*/
.main .box #hook {
  position: absolute;
  left: 50%;
  top: -2.93333333rem;
  z-index: 1;
  margin-left: -0.86666667rem;
  width: 1.73333333rem;
  height: 5.73333333rem;
}

#hook .line {
  margin: auto;
  width: 0.58666667rem;
  height: 4.56rem;
  background-image: url("@/assets/doll/image/line.png");
}

#hook .left,
#hook .right {
  position: absolute;
  bottom: 0;
  width: 0.74666667rem;
  height: 1.34666667rem;
}

#hook .left {
  left: 0;
  background-image: url("@/assets/doll/image/left.png");
  -o-transform-origin: right top;
  -ms-transform-origin: right top;
  -moz-transform-origin: right top;
  -webkit-transform-origin: right top;
  transform-origin: right top;
  transform: rotate(-20deg);
}

#hook .right {
  right: 0;
  background-image: url("@/assets/doll/image/right.png");
  -o-transform-origin: left top;
  -ms-transform-origin: left top;
  -moz-transform-origin: left top;
  -webkit-transform-origin: left top;
  transform-origin: left top;
  -o-transform: rotate(20deg);
  -ms-transform: rotate(20deg);
  -moz-transform: rotate(20deg);
  -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
}

#hook .up {
  -o-animation: up 0.5s linear forwards;
  -ms-animation: up 0.5s linear forwards;
  -moz-animation: up 0.5s linear forwards;
  -webkit-animation: up 0.5s linear forwards;
  animation: up 0.5s linear forwards;
}

@keyframes up {
  100% {
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

/*传送带*/
.behind,
.front {
  overflow-x: hidden;
  position: relative;
  left: 50%;
  top: 32%;
  margin: -1.14666667rem 0 0 -4.13333333rem;
  width: 8.26666667rem;
  height: 2rem;
  background-image: url("@/assets/doll/image/behind.png");
  background-position: left bottom;
}

.front {
  top: 43%;
  width: 8.26666667rem;
  height: 2.86666667rem;
  background-image: url("@/assets/doll//image/front.png");
}

.behind ul,
.front ul {
  width: 14rem;
}

.front ul {
  position: absolute;
  right: 0;
}

.behind li {
  position: relative;
  float: left;
  height: 1.4rem;
}

.front li {
  position: relative;
  float: right;
  height: 2.08rem;
}

.behind img {
  position: absolute;
  width: 1.21333333rem;
  height: 1.36rem;
}

.front img {
  position: absolute;
  right: 0;
  width: 1.85333333rem;
  height: 2.08rem;
}

.box h3 {
  margin: 4.73333333rem auto 0.24rem;
  width: 3.81333333rem;
  height: 0.69333333rem;
  background-color: #ff9d1b;
  text-align: center;
  line-height: 0.69333333rem;
  font-size: 0.26666667rem;
  font-weight: normal;
  color: #bc5700;
  border-radius: 0.34666667rem;
}

/*按钮区域*/
.box-btn {
  width: 100%;
  height: 1.85333333rem;
}

.box-btn li {
  float: left;
}

.box-btn li:nth-child(1) {
  width: 2.09333333rem;
  height: 1.85333333rem;
  background-image: url("@/assets/doll/image/coin1.png");
  -o-transform-origin: center bottom;
  -ms-transform-origin: center bottom;
  -moz-transform-origin: center bottom;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
  -o-animation: shak 3s ease-in-out infinite alternate;
  -ms-animation: shak 3s ease-in-out infinite alternate;
  -moz-animation: shak 3s ease-in-out infinite alternate;
  -webkit-animation: shak 3s ease-in-out infinite alternate;
  animation: shak 3s ease-in-out infinite alternate;
}

@keyframes shak {
  0%,
  100% {
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  20%,
  60% {
    -o-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }

  40%,
  80% {
    -o-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -moz-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
  }
}

.box-btn li:nth-child(2) {
  margin: 0 0.8rem;
  width: 4.08rem;
  height: 1.37333333rem;
  background-image: url("@/assets/doll//image/start.png");
}

.box-btn li:nth-child(3) {
  width: 2.2rem;
  height: 1.66666667rem;
  background-image: url("@/assets/doll//image/coin2.png");
}

/*奖品展示*/
.awards {
  position: static;
  margin: 1.28rem auto;
  width: 9.2rem;
  height: 2.96rem;
  background-image: url("@/assets/doll/image/rect.png");
}

.awards .swiper-container {
  overflow: hidden;
  margin: 0.21333333rem auto;
  padding: 0.29333333rem 0;
  width: 8.77333333rem;
  height: 1.94666667rem;
  background-color: #f5ae4f;
  box-shadow: 0 0.26666667rem 0.26666667rem rgba(248, 131, 23, 0.7) inset;
  border-radius: 0.21333333rem;
}

/*规则弹窗背景色*/
#mask-rule .box-rule {
  background-color: #fe5c51;
}

#mask-rule .box-rule .star {
  background-image: url("/public/common/image/rule/star2.png");
}
</style>