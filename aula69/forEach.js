//Só está disponivel dentro de aarrays

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

for(let valor of a1){
    console.log(valor)
}
let total = 0
a1.forEach(function(valor, indice, array){
    total += valor
})

console.log(total) //450 a soma de todos os numeros


const soma = [1,2,3,4,5,6,7,8,9]

let sooma = 0
soma.forEach(valor => {
    sooma += valor
})
console.log(sooma)