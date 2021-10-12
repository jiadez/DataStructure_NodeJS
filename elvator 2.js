const readline = require('readline-sync');

var top = 10;
var bottom = 1
var currentFloor = 5;
var targetFloor;

while (true) {//無窮迴圈
    //輸入欲達樓層
    targetFloor = readline.question('目前在' = currentFloor + '樓。請問要去哪一層樓?')
    //判斷樓層是否合理
    targetFloor = parseInt(targetFloor);//parseInt轉成整數
    if (isNaN(targetFloor) || targetFloor < bottom || targetFloor > top {
        console.log('請輸入介於' + bottom + '到' + top + '之間的整數')
        continue;
    }
    if (targetFloor == currentFloor) {
        console.log('離開電梯');
        break;
    } else {

    }
    if (targetFloor < currentFloor) {//down
        console.log("電梯往下..");
        //改用FOR(初始值;條件判斷;累加減){}
        //while(targetfloor<currentfloor){
        //for(var i=currentfloor;)
        for (; targetFloor < currentFloor; -- ) {
            //curuenatFloor = currentfloor -1;
            //currentfloor- =1;
            //currentfloor--;
            console.log("電梯在" + currentFloor + "樓");
        }







    } else {//up
        console.log("電梯往上....");
        //while(targetFloor>currentfloor){
        do {
            currentFloor = currentFloor + 1;
            //currentfloor+=1;
            //currentfloor++;
            console.log("電梯在" + currentFloor + "樓")
        } while (targetFloor > currentFloor);

    }

}

//移動電梯至欲達樓層
//currentFloor 移到 targetFloor
if (targetFloor < currentFloor) {

}