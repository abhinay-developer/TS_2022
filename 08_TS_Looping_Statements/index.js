/**
 *
 *  1.for Loop
 *  2.While Loop
 *  3.Do While Loop
 */
/** 1-10 */
var number = 1;
for (var i_1 = 1; i_1 <= number; i_1++) {
    // console.log("Number:"+i)
}
/***
 *      i=1  1<=10   Number:1   (2)  i=2   2<=10   Number:2
 */
var i = 1;
while (i <= number) {
    // console.log(i);
    i++;
}
var a = 100;
do {
    // console.log(a);
    a--; //10+1  //11
} while (a >= number); // 11<=10   false
//100+1=101  10+2=102
for (var i_2 = 1; i_2 <= 20; i_2++) {
    console.log("100" + "+" + i_2 + "=" + (i_2 + 100));
}
