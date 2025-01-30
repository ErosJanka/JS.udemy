//Funções executam ações. depois do {} não precisa colocar ';'
//Os () são parametros, que sao muito similar as variaveis

function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
    return 123456 //sera executado o bom dia e retornará 123456, porém não é indicado retornar algo tão diferente da funcao
}

saudacao('luiz'); //Isso aqui é para executar a Funcao. que no caso é a saldacao. o 'luiz' é a informacao que estou mandando para a variavel que esta na funcao (nome)
saudacao('Eros'); //Agora estou mandado 'Eros' para a variavel (nome)

const variavel = saudacao('Carlos');
console.log(variavel) //agora a 'variavel' tem o valor de 123456 por conta do retorno

///////////////////////////////////////
//Abaixo mostrarei o jeito ideal de usar a function

function saudacaoUm(name){
    return `Bom dia ${name}`
}

const variavelUm = saudacaoUm('Catarina');
console.log(variavelUm);

///////////////////////////////////

//vou criar uma funcao que some dois numeros e que retorne apenas o resultado

function soma(x=1, y=1){ //O =1 é uma definicao padrao (pode ser qualquer coisa), para caso não declare a variavel soma
    const resultado = x + y
    return resultado;
}

console.log(soma()); //Retorna 2 pois defini como padrão x e y =1
console.log(soma(2, 4));
console.log(soma(7, 4));
console.log(soma(5, 10));
console.log(soma('Eros', ' Jankosky'));

///////////////////////////////
//criando funcao anonima

const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(9));

///////////////////////////
// jeito mais moderno (arrow function)
//Se só tem uma linha não precisa colocar {}, nem colocar return, nem (). ou seja, ele ficará assim:
//const raizz = n => n ** 0.5;

const raizz = (n) => {
    return n ** 0.5;
}
console.log(raizz(9));