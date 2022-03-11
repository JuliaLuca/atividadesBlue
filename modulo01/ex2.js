const prompt = require ("prompt-sync")();

//Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, 
//o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, o 
//número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.
const p1 = parseFloat (8.90)
const p2 = parseFloat (9.90)

console.log("--------------------------------------")
console.log("| INFORME O QUE DESEJA DO NOSSO MENU |")
console.log("--------------------------------------")
console.log("| 1- peça1                           |")
console.log("--------------------------------------")
console.log("| 2 - peça2                          |")
console.log("--------------------------------------")

let opcao = prompt("Insira uma das opções:")
let quant = prompt("Quantas quantidades deseja?")

if(opcao == 1 ){
    let totQuant =parseFloat (p1 * quant).toFixed(2)
    console.log("O total a se pagar é de R$" +totQuant)
}else if (opcao == 2){
    let tot = parseFloat(p2 * quant).toFixed(2)
    console.log("O total a se pagar é de R$" +tot)
}
