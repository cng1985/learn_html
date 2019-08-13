var datas=require("./medicines");

var ms=datas.medicines.records;
//console.info(ms);
console.info(typeof ms);
temps=ms.filter(item=>item.id==1);
console.info(temps);
var groups=new Map();

ms.forEach(item=>{
   var temp= groups.get(item.name);
   if(temp==null){
       var temp=item;
       temp.num=1;
       temp.doses=new Array();
       temp.doses.push(item.dose);
       temp.producers=new Array();
       temp.producers.push(item.producer);
       groups.set(item.name,temp);
   }else{
    temp.num=temp.num+1; 
    temp.doses.push(item.dose);
    temp.producers.push(item.producer);
}
});
var searchs=new Array();
groups.forEach(item=>{
    searchs.push(item);
});
