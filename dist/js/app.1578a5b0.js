(function(e){function t(t){for(var a,n,c=t[0],r=t[1],d=t[2],p=0,w=[];p<c.length;p++)n=c[p],_[n]&&w.push(_[n][0]),_[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);o&&o(t);while(w.length)w.shift()();return s.push.apply(s,d||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],a=!0,c=1;c<i.length;c++){var r=i[c];0!==_[r]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=i[0]))}return e}var a={},_={app:0},s=[];function n(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=a,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var o=r;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var a=i("fb18"),_=i.n(a);_.a},"360f":function(e,t,i){e.exports=i.p+"img/1-2.278774ac.png"},"56d7":function(e,t,i){"use strict";i.r(t);i("f4b1"),i("a2f3"),i("e468");var a=i("7a18"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.selectedPaPerKey?e._e():a("div",{staticClass:"testItemSelect"},[a("h3",[e._v("请选择题库")]),a("ul",{staticClass:"testItemKeys-wrapper"},e._l(e.testItemKeys,function(t,i){return a("li",{key:i,staticClass:"testItemKey",class:{selectedTestItemKey:e.selectedPaPer==t},on:{click:function(i){e.selectTestPaper(t)}}},[e._v(e._s(t))])}))]),e.finished?e._e():a("div",[a("img",{staticClass:"bg",attrs:{src:i("ead9")}}),a("div",{staticClass:"tag"},[a("img",{staticClass:"tagImg",attrs:{src:i("5c61")}}),e.startStatus?e._e():a("span",{staticClass:"selectedPaPerKey"},[e._v(e._s(e.selectedPaPerKey?e.selectedPaPerKey:""))])]),e.startStatus?e._e():a("div",{staticClass:"main"},[a("img",{staticClass:"mainImg",attrs:{src:i("360f")}}),a("span",{staticClass:"button",on:{click:e.startAnswerFun}})])]),!e.finished&&e.startStatus?a("startAnswer"):e._e(),a("finish")],1)},s=[],n=i("7ea5"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[e.selectedPaPerKey?a("div",{staticClass:"selectPaperAgin"},[a("button",{staticClass:"restartPaper",on:{click:e.restartPaper}},[e._v("重新选择题库")])]):e._e(),e._l(e.selectedPaPer,function(t,_){return _+1==e.currentIndex?a("div",{key:_},[a("div",{staticClass:"tag"},[a("img",{staticClass:"tagImg",attrs:{src:i("5c61")}}),a("span",{staticClass:"selectedPaPerKey"},[e._v(e._s(e.selectedPaPerKey))])]),a("div",{staticClass:"main"},[a("div",{staticClass:"requestionDsc"},[a("h2",{staticClass:"title"},[e._v(e._s(t.topic_name))]),a("ul",{staticClass:"requestInfo"},e._l(t.topic_answer,function(i,_){return a("li",{key:_},[a("span",{staticClass:"topicAnswerId",class:["topicAnswerId"+(i.topic_answer_id-1)%4,{selectedItem:i.topic_answer_id==e.currentSelected}],on:{click:function(a){e.selectAnswer({id:i.topic_answer_id,name:t.topic_name})}}},[e._v(e._s(i.answer_name))])])}))]),a("span",{staticClass:"button",on:{click:function(i){e.submit(t.topic_name,e.currentIndex)}}})])]):e._e()})],2)},r=[],d=(i("7847"),i("f2de")),o={name:"startAnswer",methods:{restartPaper:function(){this.$store.commit("restartPaper")},selectAnswer:function(e){this.currentSelected=e["id"],this.$store.commit("saveSelectedItem",e)},submit:function(e,t){if(this._currentAnswered(e))return this.$store.commit("changeCurrentIndex"),t>=this.selectedPaPer.length?(this.$store.commit("finish"),void this.$store.commit("saveTotalScore",this._calculate())):void 0;alert("请完成该题")},_calculate:function(){var e=this.selectedPaPer,t=this.selectedItem,i=0,a=function(a){e.forEach(function(e){var _=(t[a]-1)%4;e.topic_name===a&&e.topic_answer[_].is_standard_answer&&(i+=e.score_value)})};for(var _ in t)a(_);return i},_currentAnswered:function(e){var t=this.selectedItem;for(var i in t)if(i===e)return!0;return!1}},data:function(){return{currentSelected:""}},computed:Object(n["a"])({},Object(d["b"])(["testItem","selectedPaPer","selectedPaPerKey","totalScore","currentIndex","startStatus","selectedItem"]))},p=o,w=(i("b267"),i("048f")),m=Object(w["a"])(p,c,r,!1,null,"c9a5ea36",null);m.options.__file="startAnswer.vue";var v=m.exports,l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.finished?a("div",{staticClass:"finishPage"},[a("div",{staticClass:"scoreInfo"},[a("img",{staticClass:"scoreImg",attrs:{src:i("c1b1")}}),a("div",{staticClass:"score"},[a("span",{staticClass:"scoreNum"},[e._v(e._s(e.totalScore)+"分")]),a("span",{staticClass:"scoreDes"},[e._v(e._s(e.scoreTexts[e.scoreIndex]))])])]),a("div",{staticClass:"showResult"},[a("div",{staticClass:"content"},[a("div",[a("span",[e._v("题号")]),e._l(e.selectedItem,function(t,i){return a("div",[e._v(e._s(i))])})],2),a("div",[a("span",[e._v("你的答案")]),e._l(e.selectedValue,function(t,i){return a("div",[e._v(e._s(t))])})],2),a("div",[a("span",[e._v("正确答案")]),e._l(e.standardvalue,function(t,i){return a("div",[e._v(e._s(t))])})],2)])])]):e._e()},u=[],f=(i("517a"),{data:function(){return{}},computed:Object(n["a"])({},Object(d["b"])(["finished","totalScore","selectedItem","selectedPaPer"]),{scoreTexts:function(){return this.$store.state.scoreTexts},selectedValue:function(){var e=Object.values(this.selectedItem);return this._switchToABCD(e)},standardvalue:function(){var e=this.selectedPaPer,t=[];return e.forEach(function(e){e.topic_answer.forEach(function(e,i){e.is_standard_answer&&t.push(i+1)})}),this._switchToABCD(t)},scoreIndex:function(){var e=this.totalScore;return e>=80?0:e>=60&&e<80?1:e>=40&&e<60?2:e<40?3:void 0}}),methods:{_switchToABCD:function(e){var t=e.map(function(e){return e%4==1?"A":e%4==2?"B":e%4==3?"C":e%4==0?"D":void 0});return t}}}),A=f,h=(i("d3dc"),Object(w["a"])(A,l,u,!1,null,null,null));h.options.__file="finish.vue";var B=h.exports,C={name:"app",data:function(){return{testItemKeys:[]}},computed:Object(n["a"])({},Object(d["b"])(["selectedPaPerKey","startStatus","finished"]),{selectedPaPer:{get:function(){return this.$store.state.selectedPaPer},set:function(e){return e}}}),methods:{selectTestPaper:function(e){this.$store.dispatch("confirmSelectedPaper",e),this.selectedPaPer=e},startAnswerFun:function(){this.selectedPaPerKey?this.$store.commit("startToAnswer"):alert("请在左上角选择题库")}},created:function(){this.testItemKeys=this.$store.getters.testItemKeys},components:{startAnswer:v,finish:B}},y=C,P=(i("034f"),Object(w["a"])(y,_,s,!1,null,null,null));P.options.__file="App.vue";var R=P.exports,O=(i("58e0"),i("4d8f"),{"题库1":[{topic_id:20,score_value:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,score_value:20,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],"题库2":[{topic_id:20,score_value:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]}],"题库3":[{topic_id:20,score_value:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]}],"题库4":[{topic_id:20,score_value:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,score_value:20,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],"题库5":[{topic_id:20,score_value:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]}],"题库6":[{topic_id:20,score_value:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]}],"题库7":[{topic_id:20,score_value:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,score_value:20,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],"题库8":[{topic_id:20,score_value:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]}],"题库9":[{topic_id:20,score_value:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,score_value:20,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]}]});a["a"].use(d["a"]);var E=new d["a"].Store({state:{scoreTexts:["你是最棒的，我为你感到骄傲","不错哦,继续加油，还有成长空间","好好加油，你就快及格了","你说，是不是把知识都还给小学老师了？"],testItem:O,selectedPaPer:"",selectedPaPerKey:"",totalScore:0,currentIndex:1,periodNum:"第一周",startStatus:!1,finished:!1,selectedItem:{}},actions:{setStartStatus:function(e){var t=e.commit;e.state;setTimeout(t("startToAnswer"),100)},confirmSelectedPaper:function(e,t){var i=e.commit;e.state;i("saveSelectedPaper",t)}},getters:{testItemKeys:function(e){return Object.keys(e.testItem)}},mutations:{restartPaper:function(e){e.startStatus=!1,e.currentIndex=1,e.changeCurrentIndex="",e.selectedPaPerKey="",e.selectedPaPer=""},saveSelectedPaper:function(e,t){e.selectedPaPer=e.testItem[t],e.selectedPaPerKey=t},selectCurrentItem:function(e,t){Object.keys(e.testItem).forEach(function(i){t===i&&(e.currentItem=i)})},saveSelectedItem:function(e,t){a["a"].set(e.selectedItem,t.name,t.id)},changeCurrentIndex:function(e){e.currentIndex++},saveTotalScore:function(e,t){e.totalScore=t},finish:function(e){e.finished=!0},startToAnswer:function(e){e.startStatus=!0}}});a["a"].config.productionTip=!1,new a["a"]({store:E,render:function(e){return e(R)}}).$mount("#app")},"5c61":function(e,t){e.exports="data:image/png;base64,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"},b267:function(e,t,i){"use strict";var a=i("c36a"),_=i.n(a);_.a},c1b1:function(e,t,i){e.exports=i.p+"img/4-2.1ac350be.png"},c36a:function(e,t,i){},c4e5:function(e,t,i){},d3dc:function(e,t,i){"use strict";var a=i("c4e5"),_=i.n(a);_.a},ead9:function(e,t,i){e.exports=i.p+"img/1-1.a92218b4.jpg"},fb18:function(e,t,i){}});
//# sourceMappingURL=app.1578a5b0.js.map