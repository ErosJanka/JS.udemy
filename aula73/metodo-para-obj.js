/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

//Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {
    nome: 'Caneca',
    preco: 1.80
}
const outraCoisa = produto


outraCoisa.nome = "Geovanna Linda"
outraCoisa.preco = 3.80
console.log(produto)
console.log(outraCoisa)
console.log(Object.keys(produto+))

//dessa maneira acima tanto o produto quanto a outraCoisa são os mesmos valores,se eu alterar um altera outro, agora para copiar sem alterar as duas variaveis teria que usar o spread Operator. Abaixo mostrarei como:

const produto2 = {
    nome: 'xicara',
    preco: 2.80
}
const outraCoisa2 = {
    ... produto,
    material: 'Glitter' //posso adicionar mais  coisas
}


outraCoisa2.nome = "Geovanna Maravilhosa"
outraCoisa2.preco = 10.80
console.log(produto2)
console.log(outraCoisa2)

//Utilizando assign
const produto3 = {
    nome: 'Copo',
    preco: 0.80
}
const outraCoisa3 = Object.assign({}, produto3, {material: 'Luz Solar'})


outraCoisa3.nome = "Geovanna Espetacular"
outraCoisa3.preco = 100.80
console.log(produto3)
console.log(outraCoisa3)

