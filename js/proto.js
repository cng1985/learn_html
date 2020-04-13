function show(){
    console.info("hi");
}
function today(){
    console.info("today");
}
today.__proto__.age="20";
show.age=19;
console.info(show.age)
console.info(today.age)


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


function Foo () {

}
let f1 =new Foo()

console.log(f1.__proto__ === Foo.prototype);
console.log(Foo.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

