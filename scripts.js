// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // document.getElementById("demo").innerHTML = fruits
// document.getElementById("demo").innerHTML = fruits.toString();
// document.getElementById("demo").innerHTML = fruits.join(" * ");
// fruits.pop()
// document.getElementById("demo").innerHTML = fruits

document.getElementById("demo").innerHTML = wordsArray.join(" --- ")
document.getElementById("demo").innerHTML = wordsArray.push("vasara")
document.getElementById("demo").innerHTML = wordsArray
wordsArray.shift()
document.getElementById('demo').innerHTML = wordsArray
wordsArray.unshift('paveikslas')
document.getElementById('demo').innerHTML = wordsArray
wordsArray[2] = "Paskaita"
wordsArray[10] = "XXX"
document.getElementById('demo').innerHTML = wordsArray
delete wordsArray[20]
document.getElementById('demo').innerHTML = wordsArray
const newArray = wordsArray.concat("KROKODILAS")
document.getElementById('demo').innerHTML = newArray