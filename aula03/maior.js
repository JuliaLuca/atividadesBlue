const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Me informe um numero: "))
let num2 = parseInt(prompt("Me diga outro numero: "))

if(num1 > num2){
    console.log(`O numero ${num1} é maior do que ${num2}`)
}else{
    console.log(`O numero ${num2} é maior do que ${num1}`)
}