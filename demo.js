var a=null;
var b=undefined;
console.log(a==b);
console.log(a);
console.log(b);

function SpannableUtil(){
    this.str="";
    this.append=function(item){
      this.str = this.str+item;
    }
    return this;
  }
  var SpannableUtil=new SpannableUtil();
  SpannableUtil.append("hi");
  console.info(SpannableUtil.str);
  console.info(typeof SpannableUtil);