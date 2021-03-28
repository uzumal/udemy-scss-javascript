const arry = [1,2,6,4,5];

arry.reduce(function(accu, curr) {
    console.log(accu,curr);
    // return accu + curr;
});

const str = 'animation';
const strArry = str.split('');

console.log(strArry);

/* "" 空文字を入れることで配列一番目を参照させる */
const result = strArry.reduce((accu, curr) => {
    // return accu + "<" + curr + ">";
    return `${accu}<${curr}>`;
}, "");

console.log(result);