const arry = [1, 2, 3, 4, 5];

arry.forEach(function(val, i, ary){
    console.log(val, i, ary);
});

arry.forEach(v => console.log(v));

// for(let i in arry) {
//     const v = arry[i];
//     console.log(v);
// }