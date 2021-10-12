const readline = require('readline-sync')

//宣告
let floor = [] //陣列
for (let i = 0; i <= 10; i++) {
    floor[i] = i //1~10樓
}

let currentFloor = 5; //目前樓層
let targetFloor; //到達樓層
//宣告

//主程式
while (true) {//無窮迴圈
    //輸入欲達樓層
    targetFloor = readline.question('目前在' + floor[currentFloor] + '樓，請問要去幾樓？')
    //判斷樓層是否合理
    //從floor.indexOf()取出索引值，若為-1代表無此樓層
    // targetFloor = floor.indexOf(targetFloor)
    if (targetFloor < 0) {
        console.log('請輸入介於' + floor.toString() + '之間的樓層');
        continue
    }
    //判斷樓層是否合理
    //判斷樓層上下樓
    if (targetFloor == currentFloor) {
        setTimeout(console.log('離開樓梯', 5000))
    } else {
        if (currentFloor > targetFloor) { //Down
            for (let i = currentFloor; targetFloor < i; i--) {
                currentFloor = currentFloor - 1
                setTimeout(console.log("電梯在" + floor[currentFloor] + "樓"), 2000)
            }
        } else {
            if (currentFloor < targetFloor) {
                for (let i = currentFloor; i < targetFloor; i++) {
                    currentFloor = currentFloor + 1
                    setTimeout(console.log("電梯在" + floor[currentFloor] + "樓"), 2000)
                }
            }
        }
    }
    // for(var i = 1; i <= 5; i++) {
    //     setTimeout(function(x) {
    //       console.log(x)
    //     }, 1000 * i, i)
}