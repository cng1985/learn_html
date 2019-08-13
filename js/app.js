var demo="12321321.";
console.info(demo.lastIndexOf("."));
var num=parseFloat("1.01").toFixed
console.info(typeof num)

function isInteger(obj) {
    return Math.floor(obj) === obj;
}

function clone(obj){
 var result={};
 for (const key in obj) {
     if (obj.hasOwnProperty(key)) {
        result[key] = obj[key];         
     }
 }
 return result;
}
function cloneArray(objs){
  var result=new Array();
  if(Array.isArray(objs)&&objs.length>0){
      for (let index = 0; index < objs.length; index++) {
          var element = objs[index];
          element=clone(element);
          result.push(element);
      }
  }
  return result;
}
console.info(isInteger(num))
var us=new Array();
var user1={};
user1.name="ada1";
us.push(user1);

var user2={};
user2.name="ada1";
us.push(user2);

var ous=new Array();
ous=cloneArray(us);
//ous[1]=clone(us[1]);
console.info(ous[1]==us[1]);
console.info(ous[1]);

var num=1;
num.toFixed(1);
console.info(num);