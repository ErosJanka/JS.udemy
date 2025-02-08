//                          setInterval e setTimeout
/*
setIntervel: vai configurar um intervalo de tempo para qe alguma função seja executando em determinado momento
*/

function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR')
}

function funcaoDoIntervalo(){
    console.log(mostraHora())
}

setInterval(funcaoDoIntervalo, 1000); //apenas passando a referecia da funcao sem chamar ele. ou seja, sem ()
