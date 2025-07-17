
//Dobre os números
//               0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const dobro = numeros.map(function(valor, indice, array){//mapear os valores para os novos valores
    //console.log(valor, indice,array)
    /*
    5 0 [
    5, 50, 80,  1,  2,  3,
    5,  8,  7, 11, 15, 22,
    27
]

5 valor
0 indice
[...] array
    */

    return valor * 2
}); 
console.log(dobro)









//para cada elemento:
//Retorne apenas uma string com o nome da Pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave ID em cada objeto
const pessoas = [
    { nome: 'Eros', idade: 25},
    { nome: 'Geovanna', idade: 24},
    { nome: 'Cassia', idade: 53},
    { nome: 'Cintia', idade: 43},
    { nome: 'Antonio', idade: 64},
    { nome: 'Bruno', idade: 33},
];

const nomes = pessoas.map(function(valor){
    return valor.nome
})
console.log(nomes)

const idades = pessoas.map(function(valor){
    return {idade: valor.idade}
})
console.log(idades)

const id = pessoas.map(function(valor, indice){
    return {ID: indice+1, nome: valor.nome, idade: valor.idade}
})
console.log(id)