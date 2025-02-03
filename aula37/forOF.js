/*
for classico -> Geralmente com iteraveis (array ou string)
for in -> Retorna o indice ou chave (string, array ou abjeto)
for of -> Retorna o valor em sí(iteraveis, arrays ou strings)
*/

//FOR OF -> específico para objetos iteraveis, como, string ou array (que tem indices). E que podemos interar sobre eles. ex:

//            0123456789
const nome = 'Eros Nuspl';

//classico
for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

//IN
for (let i in nome){ //aqui busca o indice
    console.log(nome[i])
}

//OF
for (let valor of nome){ //aqui já busca direto o valor, sem precisar de auxilio do indice
    console.log(valor);
}

//////////////////
//           agora vamos ver com arrays

const nomes = ['Eros', 'Nuspl', 'Oliveira']
for (let valor of nomes){
    console.log(valor); //aqui vai pegar cada valor, ou seja, o nome completo de cada um. É como (nome[i]);
}
