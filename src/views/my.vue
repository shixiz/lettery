<template>
  <div>
    <div id="wrap">
      <header>
        <div class="title clearfix">
          客服：
          <div class="clearfix">
            <p>
              <i class="iconfont icon-qq"></i>
              987654321
            </p>
            <p>
              <i class="iconfont icon-msnui-telephone"></i>
              123456789
            </p>
          </div>
        </div>
      </header>
      <ul class="main"></ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Ad() {
      //maven替换地址
      var basePath = "%wconfig_basePath%/";

      if (basePath.indexOf("wconfig_basePath") > 0) {
        //设置本机访问地址
        basePath = "#";
      }

      var html = document.querySelector('html');
      changeRem();
      window.addEventListener('resize', changeRem);

      function changeRem() {
        var width = html.getBoundingClientRect().width;
        //console.log( width );
        html.style.fontSize = width / 10 + 'px';
      }
    }
  },
  created() {
    this.Ad()
  },
  mounted() {
    require('/public/common/js/jquery.min.js')
  }
}
</script>

<style src="../../public/common/iconfont/iconfont.css"></style>
<style src="../../public/common/css/common.css"></style>
<style src="../../public/common/css/my.css" scoped></style>