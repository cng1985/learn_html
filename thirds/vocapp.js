var v=require("./voca.js");
var as=v.split("")
var hello=v.trim(' Hello World! '); 
console.info(hello);           
hello=v.sprintf('%d red %s', 3, 'apples');
console.info(hello); 
var s=v.count('rain');
console.info(s)
var aa=v.split('rage against the dying of the light', ' ');
console.info(aa)
