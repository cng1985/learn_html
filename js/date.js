
for (let index = 0; index < 100; index++) {
    var now = new Date();
    now.setDate(index);
    //console.info(now);
}
var now=new Date();
Date.prototype.str=function(){
    var result=`${this.getFullYear()}-${this.getMonth()+1}-${this.getDate()}`;
    return result;
}
now.setDate(1);
console.info(now.str());
var days=[];
var firstDay=now.getDate();
for (let index = 0; index < now.getDay(); index++) {
   days.push("x");
    //console.info(now);
}
var max=now.setMonth(now.getMonth()+1);
now.setDate(0);
var maxDay=now.getDate();
for (let index = firstDay; index <= maxDay; index++) {
    days.push(`${index}`);
     //console.info(now);
 }
 for (let index = 0; index < days.length; index++) {
     const element = days[index];
     console.info(element)
 }