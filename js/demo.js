var map=new Map();
map.set(1,"hello");
map.set(2,"world");
console.info(map.get(1));
var demo={};
demo.name="ada";
demo.show=function(){
    console.info(this.name);
}
var other={};
other.name="young";
other.show=demo.show;


demo.show();
other.show();

other.show=function(){
    console.info(">>"+this.name);
}

demo.show();
other.show();

var d="a23";
var test={d:"111"};
console.info(test);
var 人={};
人.姓名="陈坤"
人.年龄=29;
console.info(人);
