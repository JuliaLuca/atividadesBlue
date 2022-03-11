const prompt = require("prompt-sync")();

let a = parseInt(prompt("Diga um numero: "))
let b = parseInt(prompt("Diga um numero: "))

if(a % 2 === 0 && b % 2 === 0){
    console.log(`O numero ${a} e o numero ${b} são multiplos.`)
}else{
    console.log(`O numero ${a} e o numero ${b} são numeros primos, logo, não são multiplos.`)
}