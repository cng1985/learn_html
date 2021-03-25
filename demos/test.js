var str="CF4B27B198E4";
var string2Result = str.split('')
console.log(string2Result)
var result="";
var length=string2Result.length;
for (var i=0; i<length; i++){
    result=result+string2Result[i];
    if((i+1)%2==0 && (i+1)<length){
        result=result+":";
    }
}
console.log(result)