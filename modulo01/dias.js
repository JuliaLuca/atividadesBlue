const prompt = require ("prompt-sync")();
//Faça o cálculo contrário: Leia um valor inteiro correspondente à 
//idade de uma pessoa em dias e informe-a em anos, meses e dias. Também considere todo ano com 
//365 dias e todo mês com 30 dias

const diasDVida = parseInt(prompt("informe quantos dias de vida voce tem :"))
const ano = parseInt(diasDVida / 365 )
const meses = parseFloat(diasDVida / 30.417).toFixed(2)

console.log("voce tem " +ano+ " anos e " +meses+ " meses de vida.")