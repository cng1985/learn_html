var demo=require("./underscore.js");
demo.each([1,23,5],item=>{
    console.info(item)
})

var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
var youngest = demo.chain(stooges)
  .sortBy(function(stooge){ return stooge.age; })
  .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
  .first()
  .value();
console.info(youngest)

var l=demo.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
console.info(l)

