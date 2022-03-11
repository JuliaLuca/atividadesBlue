const prompt = require ("prompt-sync")();

let nome = prompt("Diga seu nome: ")
let senha = prompt("Diga sua senha: ")

while (senha == nome){
    console.log("Sua senha e nome estão iguais! Informe outra!")
    nome = prompt("Informe seu nome : ")
    senha = prompt("Informe a sua senha: ")

    if(senha != nome){
        console.log("Agora sim, estão diferentes!")
        console.log(`nome : ${nome}`)
        console.log(`senha: ${senha}`)
    }
}
