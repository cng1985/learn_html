function show() {
    console.info(this);
}

var hi = {};
hi.age = 18;
hi.name = "age";
hi.show = show;
hi.show();

var ada66 = {};
ada66.age = 35;
ada66.name = "ada66";
ada66.show = show;
ada66.show();