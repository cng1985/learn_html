var datas = [1, 10088, 22, 34, 555, 123, 455, 5333];
var num = datas.reduce(function (init, cur) {
    if (cur > init) {
        //console.info(init);
        return cur
    }else{
        return init;
    }
})
console.info(num);

var min = datas.reduce((init, cur)=> {
    console.info(init,cur);
    if (cur < init) {
        //
        return cur
    }else{
        return init;
    }
})
console.info(min);
