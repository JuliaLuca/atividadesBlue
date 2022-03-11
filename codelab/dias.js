const prompt = require ("prompt-sync")();

let anos = parseInt(prompt("Diga seus anos: "));
let meses = parseInt(prompt("Diga seus meses: "));
let dias = parseInt(prompt("Diga seus dias: "));

console.log();

let anosParaDias = anos * 365;
console.log(anosParaDias);
console.log();

let mesPDias = meses * 30;
console.log(mesPDias);
console.log();

let totDias = mesPDias + anosParaDias + dias;
console.log(totDias);

