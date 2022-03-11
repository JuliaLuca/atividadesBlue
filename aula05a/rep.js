const prompt = require ("prompt-sync")();

//let numero = 0

/*while(numero < 10){
    numero ++
    console.log(numero)
}*/

/*const tabuada = prompt("Informe o umero da tabuada que deseja: ");
let numero = 0;

while (numero < 10){
    numero ++;
    const resultado = tabuada * numero;
    console.log(`${tabuada} * ${numero} = ${resultado}`)
}*/

/*let senha = "";
while(senha !== "SENHA_FORTE"){
    //solicitamos uma senha 
    senha = prompt("por favor, digite uma SENHA_FORTE: ")

}
console.log("senha digitada: " ,senha)*/

//DO WHILE

let senha = "";

do {
    senha = prompt("Digite uma SENHA_FORTE: ")
} while (senha != "SENHA_FORTE");