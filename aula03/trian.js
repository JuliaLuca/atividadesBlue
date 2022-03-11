const prompt = require("prompt-sync")();

let numero = []

for(let i = 0; i <= 2; i ++){
    numero[i] = parseFloat(prompt("informe os lados do triangulo: "))
    numero.sort((a,b) => b - a)
}
console.log(numero)

if(numero[0] >= (numero[1]+numero[2])){
    console.log("NÃO FORMA UM TRIANGULO")

}else if(numero[0]^2 == (numero[1]^2) + (numero[2]^2)){
    console.log("TRIANGULO RETANGULO")

}else if(numero[0]^2 > (numero[1]^2) + (numero[2]^2 )){
    console.log("TRIANGULO OBTUSANGULO")

}else if(numero[0]^2 < (numero[1]^2) + (numero[2]^2)){
    console.log("TRIANGULO ACUTANGULO")
}

//ta dando erro nos calculos!!! 