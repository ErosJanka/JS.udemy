//Declaração de função (function hoisting). Posso utilizar a função tanto depois de ter declarado ela quanto antes. Posso utilizar ela por exemplo tanto na linha 7 quanto nalinha 2. Por que? Porque todas as declarações vão ser elevadas para topo do arquivo na hora da execução.
falaOi() //chama a funcão
function falaOi(){
    console.log("Oie")
}


//First-class objects(objetos de primeira classe) falar que a função pode ser tratada em javascript em outra linguagem de programação. podemos tratar as funções como dados
//function expression.criar a fuinção como um dado, posso fazer uma função apenas para criar esse dado 'souUmDado'. Essa variavel recebeu umafunção então ela vai ser tratada como um dado
const souUmDado = function (){
    console.log('Sou um dado');
};

souUmDado()


function executaFuncao(funcao){ //(funcao) é esperando receber um parametro. aqui ele esta esperando receber uma funcao. Ele é uma variavel que vai receber na função executaFuncao.
    console.log('Vou executar a sua função a baixo')
    funcao();
}

executaFuncao(souUmDado)


//arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

//Dentro de um objeto 
const obj = {
    falar: function (){ //o jeito mais moderno é falar(){
        console.log('Estou falando...')
    }
}
obj.falar()
