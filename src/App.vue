<template>
  <div id="app">
    <div v-if="!finished">
      <img src="./images/1-1.jpg" class="bg">
      <div class="tag">
        <img src="./images/WechatIMG2.png" class="tagImg">
        <span class="periodNum" v-if="!startStatus">{{periodNum}}</span>
      </div>
      <div class="main" v-if="!startStatus">
        <img src="./images/1-2.png" class="mainImg">
        <span @click="startAnswerFun" class="button"></span>
      </div>
    </div>
    <startAnswer v-if="!finished && startStatus"/>
    <finish></finish>
  </div>
</template>

<script>
import startAnswer from "./components/startAnswer";
import finish from "./components/finish";
import { mapState, mapMutations } from "Vuex";
export default {
  name: "app",
  computed: {
    ...mapState(["periodNum", "startStatus", "finished"])
  },
  methods: {
    startAnswerFun() {
      // 开始答题，vuex存储状态
      this.$store.commit("startToAnswer");
    }
  },
  components: {
    startAnswer,
    finish
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.bg {
  position: absolute;
  width: 100%;
  z-index: -999;
}
.tag {
  width: 73px;
  height: 163px;
  position: absolute;
  top: -1.3rem;
  right: 36px;
}
.tagImg {
  width: 100%;
  height: 100%;
}
.periodNum {
  position: absolute;
  bottom: 23px;
  left: 50%;
  transform: translateX(-45%);
  font-size: 12px;
  color: gray;
  font-weight: 900;
}
.main {
  position: absolute;
  top: 110px;
  text-align: center;
}
.mainImg {
  width: 85%;
}
.button {
  display: inline-block;
  width: 100px;
  height: 50px;
  background: url("../src/images/1-4.png");
  background-size: 100% 100%;
}
</style>
