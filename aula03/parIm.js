const prompt = require("prompt-sync")();

let n1 = parseInt(prompt("Informe um numero: "))

if(n1 % 2 == 0){
    console.log(`O numero ${n1} é par`)
}else{
    console.log(`O numero ${n1} é impar`)
}