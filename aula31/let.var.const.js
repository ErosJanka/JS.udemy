const verdadeira = true

//let tem escopo de bloco. ou seja eu declarei a variavel nome fora do bloco de if, ele funciiona no if, porém dentro do bloco do if só funcioa ali dentro

let nome = 'Eros'; //criado
var nome2 = 'Eros'; //criando

var nome2 = 'Nuspl'; //redeclarado, ou seja vai exibir a ultima declaração 

if (verdadeira){
    let nome = "Nuspl"; //tem o mesmo nome do let acima, mas não é amesma variavel 
    console.log(nome, nome2)
    
    
    if(verdadeira){
        let nome = "outra coisa"
        console.log(nome, nome2); //o motor do js vai primeiro procurar no bloco que esta chamando, se não encontrar vai procurar no bloco seguinte até encontrar
    }
}

console.log(nome, nome2); //Ele vai pegar o nome do maior bloco e como o nome2 foi redeclarado, vai pegar a ultima declaração do nome2

function falaOi(){
    var nome = 'Oliveira'
    console.log(nome)
}

falaOi();
