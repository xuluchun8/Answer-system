<template>
  <div v-if="finished" class="finishPage">
    <div class="scoreInfo">
      <img class="scoreImg" src="../images/4-2.png">
      <div class="score">
        <span class="scoreNum">{{totalScore}}分</span>
        <span class="scoreDes">{{scoreTexts[scoreIndex]}}</span>
      </div>
    </div>
    <div class="showResult">
      <div class="content">
        <div>
          <span>题号</span>
          <div v-for="(value,key) in selectedItem">{{key}}</div>
        </div>
        <div>
          <span>你的答案</span>
          <div v-for="(value,key) in selectedValue">{{value}}</div>
        </div>
        <div>
            <span>正确答案</span>
          <div v-for="(value,key) in standardvalue">{{value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["finished", "totalScore", "selectedItem", "itemDetail"]),
    scoreTexts() {
      return this.$store.state.scoreTexts;
    },
    selectedValue() {
      let selectedArr = Object.values(this.selectedItem);
      return this._switchToABCD(selectedArr);
    },
    standardvalue() {
      let itemDetail = this.itemDetail;
      let standardArr = [];
      itemDetail.forEach(item => {
        item.topic_answer.forEach((item1, index) => {
          if (item1.is_standard_answer) {
            standardArr.push(index+1);
          }
        });
      });
      return this._switchToABCD(standardArr);
    },
    // 根据分数选择评价id
    scoreIndex() {
      let totalScore = this.totalScore;
      if (totalScore >= 80) {
        return 0;
      } else if (totalScore >= 60 && totalScore < 80) {
        return 1;
      } else if (totalScore >= 40 && totalScore < 60) {
        return 2;
      } else if (totalScore < 40) {
        return 3;
      }
    }
  },
  methods: {
    _switchToABCD(arr) {
      console.log(arr);
      let newArr = arr.map(item => {
        if (item % 4 == 1) {
          return "A";
        } else if (item % 4 == 2) {
          return "B";
        } else if (item % 4 == 3) {
          return "C";
        } else if (item % 4 == 0) {
          return "D";
        }
      });
      return newArr;
    }
  }
};
</script>
<style>
.showResult {
  position: relative;
  top: 180px;
  height: 250px;
  border: solid rgb(185, 157, 70) 1px;
  margin: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 2px rgb(211, 98, 149);
}
.finishPage {
  background: url("../images/4-1.jpg");
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.scoreInfo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
}
.scoreImg {
  width: 192px;
}
.score {
  width: 100%;
  position: absolute;
  left: 54%;
  text-align: center;
  transform: translateX(-50%);
  bottom: 20px;
}
.scoreNum {
  font-size: 28px;
  display: block;
  color: rgb(185, 107, 12);
  font-weight: 700;
}
.scoreDes {
  display: block;
  padding: 0 10px;
  font-size: 14px;
  color: gray;
}
.content {
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-around;
  font-size: 12px;
}
</style>