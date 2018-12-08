<template>
  <div class="hello">
    <div v-for="(item,index) in itemDetail" :key="index" v-if="index+1 == currentIndex">
      <div class="tag">
        <img src="../images/WechatIMG2.png" class="tagImg">
        <span class="requestionNum">{{item.topic_name}}</span>
      </div>
      <div class="main">
        <div class="requestionDsc">
          <h2 class="title">{{item.topic_name}}</h2>
          <ul class="requestInfo">
            <li v-for="(answer, index) in item.topic_answer" :key="index">
              <span
                @click="selectAnswer({id:answer.topic_answer_id,name:item.topic_name})"
                class="topicAnswerId"
                :class="['topicAnswerId' + (answer.topic_answer_id - 1) %4,{selectedItem : answer.topic_answer_id == currentSelected}]"
              >{{answer.answer_name}}</span>
            </li>
          </ul>
        </div>
        <span @click="submit(item.topic_name,currentIndex)" class="button"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "Vuex";
export default {
  name: "startAnswer",
  methods: {
    selectAnswer(option) {
      this.currentSelected = option['id'];
      // 提交每题选择的答案
      this.$store.commit('saveSelectedItem',option)
    },
    submit(name, currentIndex) {
      if (this._currentAnswered(name)) {
        this.$store.commit('changeCurrentIndex')
      } else {
        alert("请完成该题");
        return
      }
      if (currentIndex >= this.itemDetail.length) {
        // 题目答完
        this.$store.commit('finish')
        // 提交计算的总分到vuex
        this.$store.commit('saveTotalScore',this._calculate())
        return;
      }
    
    },
    // 计算分数
    _calculate() {
      let itemDetail = this.itemDetail,
        selectedItem = this.selectedItem,
        getTotalScore = 0;
      for (let key in selectedItem) {
        itemDetail.forEach(item => {
          let answer_id = (selectedItem[key] - 1) % 4;
          if (
            item.topic_name === key &&
            item.topic_answer[answer_id].is_standard_answer
          ) {
            getTotalScore += item.score_value;
          }
        });
      }
      return getTotalScore;
    },
    // 判断当前题目已作答
    _currentAnswered(name) {
      let selectedItem = this.selectedItem
      for (let item in selectedItem) {
        if (item === name) {
          return true;
        }
      }
      return false;
    }
  },
  data() {
    return {
      currentSelected : ''
    };
  },
  computed: {
    ...mapState(["itemDetail",'totalScore','currentIndex', "startStatus",'selectedItem'])
  }
};
</script>
<style scoped>
.title {
  color: gray;
  position: absolute;
  left: 95px;
  top: 35px;
  color: rgb(178, 185, 185);
  transform: translateX(-14%);
  font-size: 16px;
}
.requestInfo {
  position: absolute;
  width: 100%;
  top: 65px;
}
.topicAnswerId {
  color: gray;
  line-height: 20px;
  font-size: 14px;
  left: 90px;
  position: absolute;
}
.topicAnswerId::before {
  content: "A";
  border: solid rgb(204, 208, 211) 1px;
  border-radius: 50%;
  color: rgb(204, 208, 211);
  display: inline-block;
  padding: 2px 3px;
  line-height: 12px;
  font-size: 12px;
  vertical-align: 2px;
  margin-right: 5px;
}
.selectedItem::before {
  background-color: #f1c708;
  color: white;
}
.topicAnswerId0::before {
  content: "A";
}
.topicAnswerId1::before {
  content: "B";
}
.topicAnswerId2::before {
  content: "C";
}
.topicAnswerId3::before {
  content: "D";
}
.hello {
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
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
.requestionNum {
  position: absolute;
  bottom: 23px;
  left: 50%;
  transform: translateX(-45%);
  font-size: 12px;
  font-weight: 900;
}
.main {
  position: absolute;
  width: 100%;
  top: 110px;
}
.requestionDsc {
  position: relative;
  width: 100%;
  height: 238px;
  display: inline-block;
  background: url("../images/2-1.png");
  background-size: 100% 100%;
  /* border: solid red 1px; */
  /* padding-top: 40px; */
}
.button {
  display: inline-block;
  width: 100px;
  height: 50px;
  background: url("../../src/images/2-2.png");
  background-size: 100% 100%;
}
</style>
