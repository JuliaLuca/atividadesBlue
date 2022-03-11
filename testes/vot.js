const prompt = require("prompt-sync")();

let cand1 = 0                  
let cand2 = 0 
let cand3 = 0 
let nulo = 0 
let branco = 0 
let voto 

console.log("|  ESCOLHA EM QUEM VAI VOTAR !    |")
console.log("| 1- Caio                         |")
console.log("| 2- Fernanda                     |")
console.log("| 3- Omega                        |")
console.log("| 4- Nulo                         |")
console.log("| 5- Branco                       |")

console.log();

voto = prompt("Em que voce vai votar?")

while(voto != 0){

    if(voto === 1){
        cand1++
        console.log("Seu voto foi adicionado!")
    }else if(voto === 2){
        cand2++
        console.log("Seu voto foi adicionado!")
    }else if(voto === 3){
        cand3++
        console.log("Seu voto foi adicionado!")
    }else if(voto === 4){
        nulo++
        console.log("Seu voto foi adicionado!")
    }else if(voto === 5){
        branco++
        console.log("Seu voto foi adicionado!")
    }

}
console.log("Votação encerrada!!")

