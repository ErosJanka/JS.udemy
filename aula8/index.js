/*
Eros Nuspl jankosky tem 25 anos, pesa 99 kg
tem 1.9 de altura e seu IMC é de ...
Eros Nuspl nasceu em 2000
*/

const nome = 'Eros Nuspl'
const sobrenome = 'Jankosky'
const idade = 25
const peso = 99
const altura = 1.90
let imc; //peso / altura * altura
imc = peso/(altura*altura)
let anoNascimento;
anoNascimento = 2025-idade

console.log(nome + ' ' + sobrenome + ' tem '+ idade + ' anos, pesa '+ peso+ 'kg')
console.log(`Tem ${altura} de altura e seu imc é de ${imc}`)
console.log(nome, 'nasceu em', anoNascimento)