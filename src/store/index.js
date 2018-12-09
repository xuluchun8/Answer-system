import Vuex from 'Vuex'
import Vue from 'Vue'
import testItem from './testItem'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    scoreTexts: [
      '你是最棒的，我为你感到骄傲', // 大于80
      '不错哦,继续加油，还有成长空间', // 大于60
      '好好加油，你就快及格了', // 大于40
      '你说，是不是把知识都还给小学老师了？', // 小于40
    ],
    // 题库数据
    testItem: testItem,
    // 当前题库
    selectedPaPer: '',
    selectedPaPerKey : '',
    totalScore: 0,
    currentIndex: 1,
    periodNum: '第一周',
    startStatus: false,
    finished: false,
    // 选择的答案
    selectedItem: {}
  },
  actions: {
    setStartStatus({commit, state}) {
      setTimeout(commit('startToAnswer'), 100)
    },
    confirmSelectedPaper({commit, state},selectedPaPerKey){
      commit('saveSelectedPaper',selectedPaPerKey)
    }
  },
  getters: {
    testItemKeys(state){
      return Object.keys(state.testItem)
    }
  },
  mutations: {
    restartPaper(state){
      state.startStatus = false
      state.currentIndex = 1
      state.changeCurrentIndex = ''
      state.selectedPaPerKey = ''
      state.selectedPaPer = ''
    },
    saveSelectedPaper(state,selectedPaPerKey){
      state.selectedPaPer = state.testItem[selectedPaPerKey]
      state.selectedPaPerKey = selectedPaPerKey
    },
    selectCurrentItem(state, itemName) {
      Object.keys(state.testItem).forEach(item => {
        if(itemName === item){
          state.currentItem = item
        }
      })
    },
    saveSelectedItem(state, option) {
      Vue.set(state.selectedItem, option.name, option.id)
    },
    changeCurrentIndex(state) {
      state.currentIndex++
    },
    saveTotalScore(state, score) {
      state.totalScore = score
    },
    finish(state) {
      state.finished = true
    },
    startToAnswer(state) {
      state.startStatus = true
    }
  }
})
