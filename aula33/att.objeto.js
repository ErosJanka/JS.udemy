//                                              ATRIBUIÇÃO VIA DESESTRUTURAÇÃO {OBJETOS}

const pessoa = {
    nome: 'Eros',
    sobrenome: 'Jankosky',
    endereco: {
        rua: 'Av. Pedro Friggi',
        numero: 2600
    }
};

//atribuição via desestruturação 
const { nome: teste, sobrenome, idade = 'indefinido', endereco : {rua: r = 123456, numero}, endereco } = pessoa; 
/*
sobrenome => como já tem uma variavel sobrenome no objeto pessoa ele já cria uma variavel com esse nome que é o sobrenome.
No nome:teste => estou trocando o nome da variavel 'nome' por 'teste', mas continua com o valor 'Eros'
idade = 'indefinido' => caso não tenha, tem como eu colocar um valor padrão.
endereco : {rua, numero} => Para pegar os valores do objeto dentro do objeto
endereco => E para exibir o obejo completo basta escrever o nome dele
rua: r = 123456 => eu renomeei rua para r e defini um padrão caso não tenha a variavel 'rua'
const {nome, ... resto} => caso eu queria pegar  o resto é so fazer igual ao array 

*/
console.log(teste, sobrenome, idade, r, numero, endereco)
