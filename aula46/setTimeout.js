//                                              setInterval e setTimeout
/*
setIntervel: vai configurar um intervalo de tempo para que alguma função seja executa do em determinado momento
setTimeout: executa uma ação depois de um determinado tempo definido
*/

function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR')
}


const timer = setInterval(function(){ //coloque em uma variavel para criar um afunção onde irá fazer parar a execução do código
    console.log(mostraHora()); 
}, 1000); // 1000 é os milisegundos, ou seja, vai executar a cada segundo

setTimeout(function(){ //função para parar o setInterval
    clearInterval(timer)
}, 3000) //vai parar depois de 3 segundos

setTimeout(function(){ //daqui 5 segundos vai executar o que pedi, que é escrever 'olá, Mundo'
    console.log('olá, Mundo')
}, 5000)
