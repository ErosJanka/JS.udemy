//Map vai ter sempre o mesmo tamanho do array original
//Dobre os numeros
//               0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const dobra = numeros.map(valor =>valor*2
);
console.log(dobra)






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

const soNome = pessoas.map(nome => nome.nome)
console.log(soNome)

const idades = pessoas.map(function(obj) {
    return { idade: obj.idade}
})
//também da para fazer assim:
//const idades = pessoas.map(obj => ({idade: obj.nome})):
console.log(idades)

const comId = pessoas.map(function(obj, indice){
    return {ID: indice + 1, nome: obj.nome}
})
console.log(comId)

//Se eu quiser colocar o objeto todo sem eu precisar ficar adicionando cada elemento:
const conId = pessoas.map(function(obj, indice) {
    const newObj = { ...obj }; // Cria uma cópia do objeto original
    newObj.ID = indice + 1;   // Adiciona a propriedade ID
    return newObj;            // Retorna o novo objeto
});
console.log(conId)
