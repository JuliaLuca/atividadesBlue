const prompt = require(`prompt-sync`)();
const num = parseInt(Math.floor(Math.random() * 11))

console.log("Vamos brincar um pouco e testar sua sorte!!!")
let resposta = parseInt(prompt("Informe um numero entre 0 e  10: "))

console.log();

console.log(`O numero escolhido foi ${num}`)
if(num === resposta ){
    console.log("VOCE ACERTOU")

    console.log();

    console.log(`A sua resposta foi ${resposta} e nossa maquina pensou em ${num}`)

}else{
    console.log("Que merda em...Errou")
    
    console.log();

    console.log(`A sua resposta foi ${resposta} e nossa maquina pensou em ${num}`)
}