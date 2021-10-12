const readline = require('readline-sync');

var top = 10;//index value
var bottom = 0;
var floorName = ["B3", "B2", "B1", "1", "2", "2M", "3", "5", "6", "7", "8"]
//1 秀出所有樓層名稱, solution -> 呼叫陣列題工的tostring ( ) 
//2 用程式建立FloorName 樓層名稱 homework #2 push() ,pop()s, unshift(),shift()
//3 讓JS　暫停一段時間後續行　ｈｏｍｅｗｏｒｋ#2
var currentFloor = 5;//index value of floorName
var targetFloor;//B2->index:1


while (true) {//無窮迴圈
    //輸入欲達樓層
    targetFloor = readline.question('目前在' + floorName[currentFloor] + '樓。請問要去哪一層樓?')
    //判斷樓層是否合理
    //從floorName.indexof()取出索引值，若為-1代表無此樓層
    targetFloor = targetFloor.toUpperCase();
    targetFloor = floorName.indexOf(targetFloor);//parseInt轉成整數
    // if (isNaN(targetFloor) || targetFloor < bottom || targetFloor > top {
    if (targetFloor < 0) {
        console.log('請輸入介於' + floorName.toString() + '之間的樓層名稱!')
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
        for (; targetFloor < currentFloor ;) {
            //curuenatFloor = currentfloor -1;
            //currentfloor- =1;
            currentFloor--;
            console.log("電梯在" + floorName[currentFloor] + "樓");
        }

    } else {//up
        console.log("電梯往上....");
        //while(targetFloor>currentfloor){
        do {
            currentFloor = currentFloor + 1;
            //currentfloor+=1;
            //currentfloor++;
            console.log("電梯在" + floorName[currentFloor] + "樓")
        } while (targetFloor > currentFloor);

    }

//移動電梯至欲達樓層
//currentFloor 移到 targetFloor
//if (targetFloor < currentFloor;)
}
