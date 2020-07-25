var demo = function (name) {
    console.info("init demo");
    this.show = function () {
        console.info("show is run");
    },
        this.name = name;
}

demo.call();

var user = function () {
    demo.call(this);
}

var o = new user();
o.show();

function handleWork(works) {
    if (works instanceof Array) {
        var ems = works.map(item => {
            const promise3 = new Promise((resolve, reject) => {
                item.request();
                resolve();
            });
            return promise3;
        })
        Promise.all(ems).then((values) => {
            console.log(values);
        });
    } else {
        const promise3 = new Promise((resolve, reject) => {
            item.request();
            resolve();
        });
    }


}
