
function diff(src, target) {
  var result = new Array();
  var keys = new Set();
  for (var item in src) {
    keys.add(item);
  }
  for (var item in target) {
    keys.add(item);
  }
  for (var item of keys) {
    var old = src[item];
    var newo = target[item];
    var state = {};
    state.name = item;
    state.oldValue = old;
    state.newValue = newo;
    if (old != undefined && old != "") {

      if (newo == undefined || newo == "") {
        state.newValue = "";
        state.type = "删除";
        result.push(state);
      }
      else if (newo != old) {
        state.type = "更新";
        result.push(state);
      }

    } else {
      state.oldValue = "";
      if (newo != undefined) {
        state.type = "新增"
        result.push(state)
      }
    }

  }
  return result;
}

var demo1 = {};
demo1.producer = "ada";
demo1.mname = "他克莫司";
demo1.gg = "";
demo1.dose_name = "dsfsf";
demo1.period_length_name = "一天"
demo1.use_way = "口服"
demo1.use_interval_name = "每天服用"
demo1.period_begindate = "2019年7月26日"
//demo1.remark="一天1次"
demo1.time_info = "每天1次"

var demo2 = {};
demo2.mname = "环孢素"
demo2.age = 15
demo2.gg = 15
demo2.dose_name = "dsfdfsdfsf"
demo2.remark = "一天五次"
demo2.producer = "ada1";
demo2.period_length_name = "两天"
demo2.use_way = "皮下注射"
demo2.use_interval_name = "隔天服用"
demo2.period_begindate = "2019年7月25日"
demo2.time_info = "每天2次"

function UpdateHandle(name, label, sortNum) {
  this.name = name;
  this.label = label;
  this.sortNum = sortNum;
  this.handle = function (item) {
    var result = "修改了" + this.label + "的" + this.name + ",从" + item.oldValue + "改为" + item.newValue;
    return result;
  }
}
function DeleteHandle(name, label, sortNum) {
  this.name = name;
  this.label = label;
  this.sortNum = sortNum;
  this.handle = function (item) {
    var result = "删除了" + this.label + "的" + this.name;
    return result;
  }
}
function AddHandle(name, label, sortNum) {
  this.name = name;
  this.label = label;
  this.sortNum = sortNum;
  this.handle = function (item) {
    var result = "增加了" + this.label + "的" + this.name + "," + this.label + "(" + item.newValue + ")";
    return result;
  }
}
var options = new Map();
options.set("mname更新", new UpdateHandle("名称", demo1.mname, 1))
options.set("dose_name更新", new UpdateHandle("规格", demo2.mname, 2))
options.set("remark更新", new UpdateHandle("备注", demo2.mname, 8))
options.set("remark删除", new DeleteHandle("备注", demo1.mname, 8))
options.set("remark新增", new AddHandle("备注", demo2.mname, 8))
options.set("producer删除", new DeleteHandle("生产厂家", demo2.mname, 3))
options.set("producer更新", new UpdateHandle("生产厂家", demo2.mname, 3))
options.set("producer新增", new AddHandle("生产厂家", demo2.mname, 3))

options.set("period_length_name更新", new UpdateHandle("服用天数", demo2.mname, 7))
options.set("use_way更新", new UpdateHandle("给药途径", demo2.mname, 6))
options.set("use_interval_name更新", new UpdateHandle("用药方法", demo2.mname, 5))
options.set("period_begindate更新", new UpdateHandle("开始时间", demo2.mname, 4))
options.set("time_info更新", new UpdateHandle("服药次数", demo2.mname))

var sortMap = new Map();
sortMap.set("time_info", 1);

var diffs = diff(demo1, demo2);

var str = "";

var datas = new Array();
for (let index = 0; index < diffs.length; index++) {
  const item = diffs[index];
  var handle = options.get(item.name + item.type);
  if (handle != undefined && handle.handle) {
    var temp = {};
    temp.name = handle.handle(item);
    temp.sortNum = handle.sortNum;
    datas.push(temp);
  }
}
datas.sort(function (a, b) {
  if (a.sortNum > b.sortNum) {
    return 1;
  } else if (a.sortNum < b.sortNum) {
    return -1;
  } else {
    return 0;
  }
});
for (let index = 0; index < datas.length; index++) {
  const item = datas[index];
  str=str+item.name+"\n";
}
console.info(str);


