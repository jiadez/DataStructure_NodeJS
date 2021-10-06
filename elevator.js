const readline= require('readline-sync');

var top=10;
var bottom=1
var currentFloor=5;
var targetFloor;

while(true){//無窮迴圈
//輸入欲達樓層
targetFloor= readline.question('目前在'=currentFloor+'樓。請問要去哪一層樓?')
//判斷樓層是否合理
targetFloor=parseInt(targetFloor);//parseInt轉成整數
if(isNaN(targetFloor)||targetFloor<bottom||targetFloor>top {
console.log('請輸入介於'+bottom+'到'+top+'之間的整數')
continue;
}
if(targetFloor==currentFloor){
    console.log('離開電梯');
    break;
}else{

}
//移動電梯至欲達樓層
//currentFloor 移到 targetFloor
console.log('to be continue....')

}