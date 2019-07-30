var one = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('foo');
    }, 1000);
    
});

var two = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('demo');
    }, 100);
});
var fs = [];
fs.push(one);
fs.push(two);
Promise.all(fs).then(res => {
    console.info(res);
});
two.then(res => {
    console.info(res);
});

var name="ada";
console.info(`i am ${name}`);

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);


function Product(name, price) {
    this.name = name;
    this.price = price;
    console.info("init Product");
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);


  var info= new Food('cheese', 5);
  var product= new Product('cheese', 5);

  console.info(info.name);


  var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is Wisen
display.apply();