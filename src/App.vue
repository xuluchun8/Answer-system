<template>
  <div id="app">
    <div class="testItemSelect" v-if="!selectedPaPerKey">
      <h3>请选择题库</h3>
      <ul class="testItemKeys-wrapper">
        <li @click="selectTestPaper(key)" class="testItemKey" 
        :class="{'selectedTestItemKey' : selectedPaPer == key}" v-for="(key,index) in testItemKeys" 
        :key="index">{{key}}</li>
      </ul>
    </div>
    <div v-if="!finished">
      <img src="./images/1-1.jpg" class="bg">
      <div class="tag">
        <img src="./images/WechatIMG2.png" class="tagImg">
        <span class="selectedPaPerKey" v-if="!startStatus">{{selectedPaPerKey ? selectedPaPerKey : '' }}</span>
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
  data(){
    return {
      testItemKeys : [],
    }
  },
  computed: {
    ...mapState(['selectedPaPerKey',"startStatus", "finished"]),
    selectedPaPer : {
      get(){
        return this.$store.state.selectedPaPer
      },
      set(value){
        return value
      }
    }
  },
  methods: {
    selectTestPaper(key){
      this.$store.dispatch('confirmSelectedPaper',key)
      this.selectedPaPer = key
    },
    startAnswerFun() {
      // 开始答题，vuex存储状态

      if(!this.selectedPaPerKey){
        alert('请在左上角选择题库')
        return
      }
      this.$store.commit("startToAnswer");
    }
  },
  created(){
    this.testItemKeys = this.$store.getters.testItemKeys
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
.selectedPaPerKey {
  position: absolute;
  bottom: 23px;
  left: 50%;
  transform: translateX(-45%);
  font-size: 12px;
  color: gray;
  font-size: 14px;
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
.testItemSelect{
  text-align: center;
  font-size: 14px;
  width: 140px;
  max-height: 120px;
  position: absolute;
  border: solid gray 1px;
  margin: 8px;
  border-radius: 9px;
  background-color: rgb(79, 69, 55);
  color: rgb(230, 172, 14);
}

.testItemKeys-wrapper{
  display: flex;
  list-style: none;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
}
.testItemKey{
  margin: 5px 0px;
  font-size: 10px;
  padding:1px 3px;
  border-radius: 4px;
  line-height: 14px;
  border: solid rgb(119, 121, 11) 1px;
}
.selectedTestItemKey{
  color: rgb(69, 85, 92);
  background-color: rgb(218, 142, 43);
}
</style>
