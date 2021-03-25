
// const arry = new Array(1,2,3,4,5,6);
const arry = [1, 2, 3, 4, 5, 6, 'moji', false];
// arry[5] = 8;
/* 後ろに追加 */
arry.push('new item');
/* 先頭に追加 */
arry.unshift('new item1');
/* 最後尾消す */
const val = arry.pop();
/* 先頭を消す */
const val2 = arry.shift();
console.log(arry);
console.log(val);
console.log(val2);