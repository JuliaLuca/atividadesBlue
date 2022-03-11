const prompt = require ("prompt-sync")();

let num = prompt("Informe um numero: ")

while(num % 2 == 1){
    console.log("Esse numero é impar!! Não aceitamos!")
    num = prompt("Informe um numero: ")

}
if(num % 2 == 0){
    console.log(`O numero ${num} é par!!`)
}