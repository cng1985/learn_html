function sqrt(num){
    return Math.sqrt(num);
}

function plus(num){
    return num+1;
}

function subtract(num){
    return num-2;
}
var num=2;
var temp=num |> sqrt |> plus |> subtract;
console.info(temp);