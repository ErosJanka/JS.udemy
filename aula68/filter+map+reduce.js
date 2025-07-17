//Retorne a soma do dobro de todos os pares 
// -> Filtrar pares
// -> Dobrar os valores
//  -> Reduzir (somar tudo)
//               0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosPares = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor * 2
}).reduce(function(ac, valor){
    return ac + valor
})
console.log(numerosPares)

// [ 50, 80, 2, 8, 22 ] Pares
// [ 100, 160, 4, 16, 44 ] dobro
// 324 soma

//abaixo fazei com arrow function
const numerosPaares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac+ valor)
console.log(numerosPaares)

// [ 50, 80, 2, 8, 22 ] Pares
// [ 100, 160, 4, 16, 44 ] dobro
// 324 soma
