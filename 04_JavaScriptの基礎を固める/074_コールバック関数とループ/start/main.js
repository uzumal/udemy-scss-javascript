
const arry = [1, 2, 3, 4, 5];

function log(val) {
    console.log(val);
}

function forEach(ary, callback) {
    for(let i in ary){
        callback(ary[i]);
    }
}

function double(val) {
    val = val * 2;
    log(val);
}

forEach(arry, double);