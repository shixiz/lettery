<template>
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
</template>

<script>
export default {
  methods: {
    wins() {
      this.$emit('win', this.win())
    },
    win() {
      let mask = $("#mask")
      let winning = $(".winning")
      let card = $("#card")
      console.log(mask, winning, card);
      //遮罩层显示
      mask.show()
      winning.addClass("reback");
      setTimeout(function () {
        card.addClass("pull");
      }, 500);

      //关闭弹出层
      $("#close,.win,.btn").click(function () {
        //$close.click(function () {
        mask.hide();
        winning.removeClass("reback");
        card.removeClass("pull");
      });
      /*$(".win,.btn").click(function () {
          link = true;
      });*/
    }
  }
}
</script>

<style>
</style>