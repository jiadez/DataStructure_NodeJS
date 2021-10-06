var weight, height

const readline = require('readline-sync')
weight = readline.question('請輸入您的體重(kg)?')
if (weight >= 10 && weight <= 200) {
    height = readline.question('請輸入您的身高(cm)?')
    
    if (isNaN(weight) || height <=0 || height>220)
    console.log("你輸入的資料有誤!請輸入介於1~220之間的數字")

    if (height >= 50 && height <= 220) {
        var bmi = weight / ((height / 100) ** 2)
        if (bmi <= 18.5) {
            console.log("體重過輕", bmi)
        }
        else if (bmi <= 24) {
            console.log("體重正常", bmi)
        }
        else if (bmi <= 27) {
            console.log("體重過重", bmi)
        }
    } else {
        console.log("身高輸入錯誤，請重新輸入")
    }
} else {
    console.log("體重輸入錯誤，請重新輸入")
}