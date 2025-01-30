/*
Operadores de comparação
> - Maior que
>= - Maor ou igual a
< - Menor que
<= - Menor ou igual a
== - igual (Checa igualdade entre dois operando esquerda e direita, checa apenas valor)
=== - igualdade extrita(checa valor e tipo)
!= - diferente (só checa valor)
!== - diferente extrito (checa valor e tipo)
*/

console.log(10 > 5); //Checa se 10 é maior que 5 e retorna True ou False

console.log(10 >= 5); //10 é maior ou igual a 5 (True ou False)

console.log(10 == 10); //10 é igual a 10? NÃO RECOMENDADO, Ex: vai comparar 10 == '10', não são o mesmo, mas retorna true

console.log(10 === '10'); //Retorna false, pois a string 10 não é realmente 10 ('10' é tipo 'dez') RECOMENDADO

console.log(10 != '10'); //Deveria retornar true pois são diferentes, mas retorna false ou seja, pra ele eles sao iguais 

console.log(10 !== '10'); //O mesmo de === (RECOMENDADO)
