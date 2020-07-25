var a = null;
var b = undefined;
console.log(a == b);
console.log(a);
console.log(b);

function SpannableUtil() {
  this.str = "";
  this.append = function (item) {
    this.str = this.str + item;
  }
  return this;
}
var SpannableUtil = new SpannableUtil();
SpannableUtil.append("hi");
console.info(SpannableUtil.str);
console.info(typeof SpannableUtil);

var demo = (num) => {
  console.info(num);
  console.info(this);
}

demo(2);

var msg=function(num){
  console.info(num);
  console.info(this);
}
msg(1);

setTimeout(()=>{
  console.info("setTimeout2");
},0)

setTimeout(()=>{
  console.info("setTimeout1");
},2000)

console.info("haha");
