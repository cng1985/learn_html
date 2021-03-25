function show(){
    if(this.age){
        console.info("age"+this.age);
    }
    console.info(arguments[0]);
}

show.call("1");

var demo={};
demo.age=18;
var x=show.bind(demo)
x();

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

show.apply(demo,numbers)
show.call(demo,1,2)
console.info(show.name);