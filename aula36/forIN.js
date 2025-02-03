const frutas = ['Morango', 'pêra', 'Uvas'];

//jeito classico
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}


/*
for in -> lê os indices ou chaves do objeto
*/

//contador. Está lendo os indices
for (let i in frutas){
    console.log(i)
}

//jeito simplificado de for para exibir 
for (let i in frutas){
    console.log(frutas[i])
}

//agora com objetos

const pessoa = {
    nome: 'Eros',
    sobrenome: 'Jankosky',
    idade: 25
}
for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}


//console.log(pessoa.nome); //para acessar o nome no obejto pessoa
// const chave = 'nome'
// console.log(pessoa[chave]);  //O memso que no de cima, porém mais dinâmico. ex: quero criar uma variavel para o nome

