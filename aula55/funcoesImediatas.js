// IIFE -> Immediately invoked function expression (Expressão de função invocada imediatamente)
//para fujir do escopo global, não quer que as variaveis, ou funções que definirem toquem no escopo global, pois elas podem ser alteradas.
//Além disso não queremos poluir o escopo global, então como fujimos do escopo global? envolto a função com (), e finalizo com (); para chamar imediatamente

(function(){
    const nome = 'Eros'
    console.log(nome)
})(); //() chama a função imediatamente, colocando essa função anonima ela não vai para o escopo global

const nome = 'Outro nome'
console.log(nome)
console.log(typeof console.log); // Deve exibir "function". Estava dando algum erro na hora de exibir o console.

(function(idade, peso, altura){
    const sobrenome = 'Jankosky'
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function chamaNome(){
        console.log(criaNome('Eros'))
    }

    chamaNome()
    console.log(idade, peso, altura)
})(25, 102, 1.89);
