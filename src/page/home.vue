<template>
  <div>
    <section id="wrap">
      <!--活动-->
      <section class="active">
        <h2 class="title tit1"></h2>
        <ul>
          <li>
            <router-link to="/doll">
              <img src="@/assets/image/icon1.png">
              <p>抽现金</p>
            </router-link>
          </li>
          <li>
            <router-link to="/goldEgg2">
              <img src="@/assets/image/icon2.png">
              <p>抢手机</p>
            </router-link>
          </li>
          <li>
            <router-link to="/guaguale">
              <img src="@/assets/image/icon3.png">
              <p>挖金子</p>
            </router-link>
          </li>
          <li>
            <router-link to="/nineGrid">
              <img src="@/assets/image/icon4.png">
              <p>赢流量</p>
            </router-link>
          </li>
        </ul>
      </section>
      <section class="game">
        <h2 class="title tit2"></h2>
        <ul>
          <li>
            <router-link to="/luckCard">
              <img src="@/assets/image/img1.png">
              <p>你的话费我包啦</p>
            </router-link>
          </li>
          <li>
            <router-link to="/ring">
              <img src="@/assets/image/img2.png">
              <p>红包流量发不完</p>
            </router-link>
          </li>
          <li>
            <router-link to="/tiger">
              <img src="@/assets/image/img3.png">
              <p>手机平板通通有</p>
            </router-link>
          </li>
          <li>
            <router-link to="/zhuanpan">
              <img src="@/assets/image/img4.png">
              <p>购物卡发到手软</p>
            </router-link>
          </li>
        </ul>
      </section>
      <section class="gift">
        <h2 class="title tit3"></h2>
        <ul>
          <li>
            <router-link to="/zhuanpan">
              <img src="@/assets/image/gift1.png">
              <div class="clearfix">
                <p>转盘抽红包，看谁包最大</p>
                <span>立即领取</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/goldEgg">
              <img src="@/assets/image/gift2.png">
              <div class="clearfix">
                <p>砸金蛋，领大奖</p>
                <span>立即领取</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/guaguale">
              <img src="@/assets/image/gift3.png">
              <div class="clearfix">
                <p>刮卡赢数码，奖品不上限</p>
                <span>立即领取</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/nineGrid">
              <img src="@/assets/image/gift4.png">
              <div class="clearfix">
                <p>初春随大礼，苹果随便送</p>
                <span>立即领取</span>
              </div>
            </router-link>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
  created() {
    this.Adaptation()
  }
}
</script>

<style src="../../public/common/css/common.css" scoped></style>
<style src="@/assets/index/css/index.css" scoped></style>

