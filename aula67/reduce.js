//Some todos os numeros
//Retorne um array com os pares (filter)
//Retorne um array com o dobro dos valores (map)
//               0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const soma = numeros.reduce(function(acumulador, valor, indice, array){
 console.log(acumulador, valor)
 let total = acumulador + valor
 return total
}, 0);//o 0 é o valor inicial para o acumulador, o valor que eu quero que inicie  o acumulador
console.log(soma)








//Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Eros', idade: 25},
    { nome: 'Geovanna', idade: 24},
    { nome: 'Cassia', idade: 53},
    { nome: 'Cintia', idade: 43},
    { nome: 'Antonio', idade: 64},
    { nome: 'Bruno', idade: 33},
];