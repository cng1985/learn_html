function getTotalDayByMonth(year, month) {
    month = parseInt(month, 10);
    var d = new Date(year, month, 0);
    return d.getDate();
};

function getFirstDayByMonth(year, month) {
    var d = new Date(year, month-1, 1);
    console.info(d.toDateString())
    return d.getDay();
};

for (let index = 1; index < 12; index++) {
   var date=getTotalDayByMonth(2019,index);
   var week=getFirstDayByMonth(2019,index);

    console.info(`${index%12}-${date}-${week}`)
}