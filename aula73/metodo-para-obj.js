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
    nome: 'Caneca', preco: 1.8
}

const outraCoisa = produto

produto.nome = 'Geovanna Linda' //alterndo o objeto nome 
outraCoisa.preco = 1.5 //Aqui altera também tanto a variavel produto quanto o outraCoisa

console.log(produto)
console.log(outraCoisa)

//abaxio é para saber como ter a variavel copiada e não apontando para o mesmo locaal como acima


//utilizando sprad operator
const original = {
    nome: 'Geovanna maravilhosa',
    preco: 'infinito'
}

const copia = { 
    ...original, 
    material: 'luz' //posso adicionar mais coisas
}

original.nome = 'Geovanna meu amor' //aqui consigo alterar a vaariavel original sem modificar a copia junto

console.log(original)
console.log(copia)

//utilizando Object.assign
const original2 = {
    nome: 'Eros',
    preco: 1.5
}

const copia2 = Object.assign({}, original2, {material: 'Madeira Bruta'})

copia2.preco = 2.5

console.log(original2)
console.log(copia2)


////

console.log(Object.keys(original2))
Object.freeze(original2) //Aqui não me permite mudar nada desse objeto 'original2'


///// mudando propriedades dos objetos
Object.defineProperty(original, 'nome', {
    writable: false, //não pode mais alterar essaa propriedade
    configurable: false,
    value: 'outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(original, 'nome'))
original.nome = 'Geovanna mudada' //não consigo alterar 
delete original.nome; //também não consigo excluir
delete original.preco; //aqui consigo excluir
console.log(original)

//mostrando os valores e não a chave:
console.log(Object.values(produto))

//se eu quiser ler os dois em um array:
console.log(Object.entries(produto)) // [ [ 'nome', 'Geovanna Linda' ], [ 'preco', 1.5 ] ]
//com isso posso iterar sobre esses valores:
for(let entry of Object.entries(produto)){
    console.log(entry)
}