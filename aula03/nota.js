const prompt = require("prompt-sync")();

let notas = []
let soma = 0
let media = 0

for(let i = 0; i <= 3; i++ ){
    notas[i] = parseFloat(prompt("Informe suas nota: "))
    soma += notas[i]
    media = soma / 4
}
if(media >= 7){
    console.log(`A sua media foi ${media} e voce foi aprovado`)
}else if(media > 5 && media < 7  ){
    console.log(`A sua media foi ${media} e voce esta de recuperação!`)
}else if(media < 5){
    console.log(`A sua media foi ${media}, voce esta reprovado!`)
}
