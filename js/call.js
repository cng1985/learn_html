var demo=function(name){
    console.info("init demo");
    this.show=function(){
        console.info("show is run");
    },
    this.name=name;
}

demo.call();

var user=function(){
    demo.call(this);
}

var o=new user();
o.show();