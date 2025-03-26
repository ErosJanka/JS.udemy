// return
//retorna um valor
//termina a função

function soma(a, b){
    return a + b;
}
console.log(soma(5,2))//não confundir o console.log com retorno da funçaõ. O console.log está apenas exibindo o que estou pedindo para exibir

function soma2(a, b){
    console.log(a + b); //aqui apenas está exibindo a soma no console, mas não está retornando nada
}

soma2(5, 2)
//   |  No console do google HTML (era pra ser uma seta pra baixo kk)
//   V
/*
soma(2,5)
7
let s1 = soma(2, 5)
undefined
s1
7
alert('Olá, mundo!');
undefined
let s2 = alert('Olá, mundo!');
undefined
s2
undefined
//o s2 não tem valor, pois ela não tem 'return'
undefined
*/

//uma funçaõ que não retorna nada, mas é importante, aqui ele munda o fundo da pagina
// document.addEventListener('click', function() {
//     document.body.style.backgroundColor= 'red'
// }) //caso queira exibir no f8 deixe essa função em comentário 


function criaPessoa(nome, sobrenome){
    return{nome, sobrenome}
    //return{nome: nome, sobrenome:sobrenome}
    //Pela variavel ter o mesmo nome, o jovascript entende que 'nome' sera a chave no primeiro parametro e 'sobrenome' será a chave do segundo parametro
}
const p1= criaPessoa('Eros', 'Jankosky')

//o p2 é a mesma coisa que a funcao criaPessoa() está fazendo. Mas por que criar uma função se o p2 usa menos linha de código? Na verdade se eu quiser criar mais pessoas não preciso ficar reescrevendo, basta eu fazer como p1 com outros nomes apenas.
const p2= {
    nome: 'Eros',
    sobrenome: 'Nuspl'
}

console.log(p1)
console.log(p2)
console.log(typeof p1) //mostrará o tipo ==> object
console.log(typeof p2) //object



function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto; //quando eu retorno uma função sem executar ela, eu retorno a função em sí
}
const fala = falaFrase('Olá');
const resto = fala('Mundo!') 
console.log(fala) //[Function: falaResto]
console.log(resto) //Olá Mundo!


const olaMundo = falaFrase('Olá')
console.log(olaMundo) //[Function: falaResto] ou seja, olá mundo é uma função, e cmom faço para executar essa funcao?
console.log(olaMundo('Mundo!')) //Olá Mundo!

//um exemplo onde essa função acima seria util
function duplica(n){
    return n * 2
}
function triplica(n){
    return n * 3
}
function quadriplica(n){
    return n * 4
}
console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
//seria complicado ficar refazendo essas funções caso precise fazer 20 por exemplo. Então uso o     
function criaMultiplicador(multiplicador){
    // ----> Esse foi o metodo da funcao acima <---
    // function multiplicacao(n){
    //     return n * multiplicador
    // }
    // return multiplicacao

    // -----> Metodo facilitado <-----
    return function(n){
        return n * multiplicador
    }
}
const duplicaa = criaMultiplicador(2);
const triplicaa = criaMultiplicador(3);
const quadriplicaa = criaMultiplicador(4);
console.log(duplicaa(5))
console.log(triplicaa(10))
console.log(quadriplicaa(10))
