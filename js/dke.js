   /*方式二：多个数组求笛卡尔积*/
   var array1 = ["1", "2"];
   var array2 = ["a", "b"];
   var array3 = ["@", "*"];
   // 作为二维数组来运算
   var array4 = [array1, array2, array3];
   // last为上次运算的结果，current为数组中的当前元素
   var result = array4.reduce((last, current) => {
       const array = [];
       last.forEach(par1 => {
           current.forEach(par2 => {
               array.push(par1 + "_" + par2);
           });
       });
       return array;
   });
   result.forEach(item=>{
       console.info(item);
   });