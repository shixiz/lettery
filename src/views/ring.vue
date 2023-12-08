<template>
  <div id="wrap">
    <p class="rule"></p>
    <router-link to="/my" class="my"></router-link>
    <!--游戏区域-->
    <div class="main">
      <!--气球-->
      <span class="balloon shake-l"></span>
      <span class="balloon shake-l"></span>
      <span class="balloon shake-l"></span>
      <span class="balloon shake-l"></span>
      <span class="balloon shake-r"></span>
      <span class="balloon shake-r"></span>
      <span class="balloon shake-r"></span>
      <p>今日剩余免费 <span id="change"> 5 </span> 次</p>
      <span class="coin"></span>

      <!--套环-->
      <span class="arrow up"></span>
      <span class="top"></span>
      <span class="bottom"></span>
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
</template>

<script>
import { queryString } from '/public/common/js/h5_game_common.js'
export default {
  data() {
    return {
      basePath: "%wconfig_basePath%/",
      // 是否显示中奖提示
      showMask: false,
    }
  },

  methods: {
    Adaptation() {
      if (this.basePath.indexOf("wconfig_basePath") > 0) {
        //设置本机访问地址
        this.basePath = "#";
      }
      var html = document.querySelector('html');
      changeRem();
      window.addEventListener('resize', changeRem);

      function changeRem() {
        var width = html.getBoundingClientRect().width;
        html.style.fontSize = width / 10 + 'px';
      }
    },
    check() {
      var data = "";
      //执行第一次
      this.clickData(true);
      //请求回调，并且在ji中执行此代码，请加入防止连点措施
    },
    clickData(bool) {
      $.ajaxSettings.async = false;
      if (bool) {//若只请求次数
        $.getJSON(this.basePath + "api/browse/browseAeI?appKey=" + queryString("appKey") + "&pId=" + queryString("pId") + "&caId=" + queryString("caId") + "&index=0&isFirst=1", "", function (datac) {
          if (null !== datac && "" !== datac) {
            data = datac;
            //设定中奖次数
            $("#change").html(data.count);
          }
        });
      } else {
        $.getJSON(this.basePath + "api/browse/browseAeI?appKey=" + queryString("appKey") + "&pId=" + queryString("pId") + "&caId=" + queryString("caId") + "&index=0&isFirst=0", "", function (datac) {
          if (null !== datac && "" !== datac) {
            //设定中奖的图片
            $(".win").css("background-image", "url(" + data.adImgUrl + ")");
            //设定中奖次数
            $("#change").html(data.count);
            //设定中奖的跳转链接
            $winning.find("a").attr("href", data.adUrl + "?appKey=" + queryString("appKey") + "&pId=" + queryString("pId") + "&caId=" + queryString("caId") + "&adId=" + data.adId + "&index=0");
          }
        });
      }
    }
  },
  created() {
    this.Adaptation()
    window.clickData = this.clickData
  },
  mounted() {
    require('@/assets/ring/js/index')
  }
}
</script>

<style src="../../public/common/css/common_mobile.css?version=1.0.0"></style>
<style src="@/assets/ring/css/index.css" scoped></style>