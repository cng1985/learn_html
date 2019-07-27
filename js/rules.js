var rules = [{ equal_max: 0, equal_min: 1, max_value: 0.5, min_value: 0, step_value: 0.25 },
{ equal_max: 0, equal_min: 1, max_value: 1000, min_value: 0.5, step_value: 0.5 }];

function step(rules,value) {
    if (rules.length == 0) {
        //自定义药品
        return 1;
    }
    for (let index = 0; index < rules.length; index++) {
        const item = rules[index];
        var max = -1;
        var min = -1;
        if(item.equal_min==0){
            if (item.equal_max== 0) {// (0,10)
                max = item.max_value;
                min = item.min_value;
            } else {//(0,10]
                max = item.max_value + 0.001;
                min = item.min_value;
            }

        }else{
            if (item.equal_max== 0) {// (0,10)
                max = item.max_value;
                min = item.min_value-0.001;
            } else {//(0,10]
                max = item.max_value + 0.001;
                min = item.min_value-0.001;;
            }
        }
        if (value > min && value < max) {
            return item.step_value;
        }
    }
    return 1;
}

console.info(step(rules,100000));