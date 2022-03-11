const prompt = require ("prompt-sync")();

let nome = prompt("Informe seu nome: ")
let idade = prompt("Informe sua idade: ")
let salario = parseFloat(prompt("Informe seu salario: "))
let eC = prompt("Informe seu estado civil (s,c,v ou d): ")

while(nome.length < 3 || idade < 0 && idade > 150 || salario < 0 || eC !="s" || eC != "c" || eC != "v" || eC != "d" ){
    console.log("Voce não cumpriu com nossas regras, tente novamente!")
    nome = prompt("Informe seu nome: ")
    idade = prompt("Informe sua idade: ")
    salario = prompt("Informe seu salario: ")
    eC = prompt("Informe seu estado civil: ")

    if(nome.length>3 && idade > 0 && idade < 150 && salario > 0 && eC == "s" || eC == "c" || eC == "v" || eC == "d"){
        console.log("Agora sim, esta tudo certo!!!")
        console.log(`nome: ${nome}`)
        console.log(`idade: ${idade}`)
        console.log(`salario: ${salario}`)
        console.log(`estado civil: ${eC}`)

    }
}