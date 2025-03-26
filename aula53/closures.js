//parecido com o escopo Lexico
//É a habilidade de acessar o seu escopo lexico


function retornaFuncao(){
    const nome = 'Eros'
    return function (){
        return nome;
    }
}

const funcao = retornaFuncao() //recebe a funcao anonima
console.log(funcao) //[Function (anonymous)]
console.log(funcao()) //Eros



//Um jeito melhor para se fazer isso é assum:
function retornaF(nome){
    return function(){
        return nome
    }
}
const funcao2 = retornaF('Jankosky')
console.log(funcao2())
