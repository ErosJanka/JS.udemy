/*
Operadores Logicos

&& -> AND -> E -> todas as expressoes tem que ser 'true' para retornar 'true'
|| -> OR -> OU -> pelo menos uma das expressoes tem que ter 'true', mesmo tendo varias 'false'
! -> NOT -> NÃO -> Não é'expressao'0
*/

//Tenho que checar se tem dinheiro no bolso 'E' se esta sol la fora
console.log(true && true);
//exemplo:
const usuario = 'Eros'; //form que usuario digitou
const senha = '123456'; //form que usuario digitou
const vaiLogar = usuario === 'Eros' && senha === '123456'; //ambos retornam true pois são iguais '==='
console.log(vaiLogar)

//Preciso ter dinheiro 'OU' estar sol lá fora
console.log(true || false);

//inverte. se eu coloco !false ele retorne true. e vice versa
console.log(!true); //retorna: 'false'