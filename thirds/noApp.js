var datas = [{ "no": "132526198205292413", "name": "贾宁山", "type": null, "state": null, "project": "项目一" },
{ "no": "342221197008242034", "name": "曹广银", "type": null, "state": null, "project": "项目一" },
{ "no": "130705197310021837", "name": "陈桂锁", "type": null, "state": null, "project": "项目一" },
{ "no": "130929198009087374", "name": "孔垂彬", "type": null, "state": null, "project": "项目一" },
{ "no": "210623197003105659", "name": "胡连毅", "type": null, "state": null, "project": "项目一" },
{ "no": "110105197301122533", "name": "王志成", "type": null, "state": null, "project": "项目一" },
{ "no": "130929198009087374", "name": "孔垂彬", "type": null, "state": null, "project": "项目一" },
{ "no": "110225196712315918", "name": "肖珍", "type": null, "state": null, "project": "项目一" }];

var demo = require("./underscore.js");

var errors = [];
for (let index = 0; index < datas.length; index++) {
    const element = datas[index];
    for (let j = index + 1; j < datas.length; j++) {
        const temp = datas[j];
        if (temp.no == element.no) {
            var error = {};
            error.one = index + 1;
            error.two = j + 1;
            error.oneName=element.name;
            error.twoName=temp.name;
            errors.push(error);
        }
    }
}

if(errors.length>0){
    for (let index = 0; index < errors.length; index++) {
        const element = errors[index];
        console.info(element.one + "**************" +element.two)

    }
}
