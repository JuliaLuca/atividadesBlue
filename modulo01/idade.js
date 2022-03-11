const prompt = require ("prompt-sync")();

//Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 ano
//s, 2 meses 37 dias. Calcule e exiba o total de dias que essa pessoa já viveu. Obs.:
//apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.

// dias de vida =  idade * 365
// meses =  idade * 12

const idade = parseInt(prompt("Informe a sua idade: "))
const diaDeVida = parseInt(idade * 365)
const meses = parseInt(idade * 12)

console.log("Voce tem " +idade + " anos," +diaDeVida+ " dias vividos " +meses + " meses de vida.")

