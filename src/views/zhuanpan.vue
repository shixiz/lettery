<template>
  <div>
    <div id="wrap">
      <div class="caidai"></div>
      <div class="header clearfix">
        <p class="rule fl">规则</p>
        <router-link to="/my" id="myWin">
          <p class="my fr">我的奖品</p>
        </router-link>
        <div class="title"></div>
      </div>
      <!--轮盘-->
      <div class="rotate">
        <div class="lunpai">
          <ul class="prize running">
            <li>
              <span></span>
              <p>超级豪华大礼</p>
            </li>
            <li>
              <span></span>
              <p>50元现金红包</p>
            </li>
            <li>
              <span></span>
              <p>20元现金红包</p>
            </li>
            <li>
              <span></span>
              <p>超级豪华大礼</p>
            </li>
            <li>
              <span></span>
              <p>100元现金红包</p>
            </li>
            <li>
              <span></span>
              <p>谢谢参与</p>
            </li>
          </ul>
        </div>
        <div class="ring"></div>
        <div id="btn"></div>
      </div>
      <div class="border">
        您今日还有 <span id="change"> 3 </span> 次抽奖机会
      </div>
      <!--滚动信息-->
      <div class="scroll">
        <p></p>
        <div>
          <ul>
            <li>
              恭喜<span class="start-num">134</span>****<span class="end-num">0481</span>
              获得<span class="info">000</span>一份
            </li>
            <li>
              恭喜<span class="start-num">132</span>****<span class="end-num">3145</span>
              获得<span class="info">000</span>一份
            </li>
            <li>
              恭喜<span class="start-num">150</span>****<span class="end-num">0150</span>
              获得<span class="info">lalalala</span>一份
            </li>
          </ul>
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
    require('@/assets/zhuanpan/js/index?version=1.0.0')

  }
}
</script>

<style src="../../public/common/css/common_mobile.css"></style> 
<style src="@/assets/zhuanpan/css/index.css?version=1.0.0" scoped></style>