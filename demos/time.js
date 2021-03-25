function timeDelay(time, callback) {
    if (callback) {
        setTimeout(() => {
            callback();
        }, 300);
    }
}


timeDelay(100,()=>{
    console.info("100");

    timeDelay(150,()=>{
        console.info("150");

    })
});
timeDelay(200,()=>{
    console.info("200");
});

timeDelay(300,()=>{
    console.info("300");
});

timeDelay(50,()=>{
    console.info("50");
});


console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })
  .then(function() {
    console.log('promise3')
  })
  .then(function() {
    console.log('promise4')
  })

console.log('script end')