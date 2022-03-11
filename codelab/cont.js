const prompt = require ("prompt-sync")();

let idadeDias = parseInt(prompt("diga sua idade em dias: "))
console.log(idadeDias)

let diasAnos = Math.trunc(idadeDias/365)
console.log(diasAnos)
console.log(`A idade em anos é ${diasAnos}`)

let restoDias = idadeDias % 365;
console.log(restoDias);

let diasMeses = Math.trunc(restoDias / 30);
console.log("dade em meses " +diasMeses)

