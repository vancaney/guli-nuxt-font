<template>
  <div class="guli-player">
    <div class="head">
      <a href="#" title="谷粒学院">
        <img class="logo" src="~/assets/img/logo.png" lt="谷粒学院" />
      </a>
    </div>
    <div class="body">
      <div class="content"><nuxt /></div>
    </div>
  </div>
</template>

<script>
import vodApi from "@/api/vod";

export default {
  data() {},
  methods: {},
  mounted: function () {},
};
</script>

<style>
html,
body {
  height: 100%;
}
</style>

<style scoped>
.head {
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.head .logo {
  height: 50px;
  margin-left: 10px;
}

.body {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>