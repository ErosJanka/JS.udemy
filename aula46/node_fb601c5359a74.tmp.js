//                          setInterval e setTimeout
/*
setIntervel: vai configurar um intervalo de tempo para qe alguma função seja executando em determinado momento
*/

function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR')
}



setInterval(function(){
    console.log(mostraHora());
}, 1000); // 1000 é os milisegundos, ou seja, vai executar a cada segundo

//IMPORTANTE!: o codigo não irá parar, então para ele parar use: Ctrl + Shift + p e escreva stop code run
