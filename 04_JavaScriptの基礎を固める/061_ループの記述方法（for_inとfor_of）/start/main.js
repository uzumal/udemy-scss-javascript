const arry = [1, 2, 3, 4, 5, 6];

/* i,j,k --> 添字 */
/* i --> インク */
for (let i in arry) {
    console.log(i, arry[i]);
}
/* v --> value */
for (let v of arry) {
    console.log(v);
}
