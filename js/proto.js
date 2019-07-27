function show(){
    console.info("hi");
}
function today(){
    console.info("today");
}
today.__proto__.age="ada";
console.info(show.age)
console.info(Function.prototype);

function People(){
  this.show=function(){
      console.info(this.name);
  }
}
function Man(){
  this.name="demo";
  this.__proto__=new People();
}
var man=new Man();
man.show();
console.info(Man.prototype);
