/*
raiz quadrada
se é um numero inteiro
se é um NaN
arredondado para baixo
arredondado para cima
com duas casas decimais
*/

//perguntar ao usuario um numero !!SEMPRE VOLTA COMO STRING!!
let numero = prompt('Digite um numero: ')

//Seleciona o elemento <h1> pelo id
let h1 = document.getElementById('numero')
let p = document.getElementById('paragrafo')

//converter a string para numero para as operações matematicas
numero = Number(numero)

//Math
let raiz = Math.sqrt(numero);
let inteiro = Number.isInteger(numero);
let notNumber = Number.isNaN(numero);
let baixo = Math.floor(numero);
let cima = Math.ceil(numero);
let decimal = numero.toFixed(2);

//esse if é so um texte, nem mostrou na aula ainda kk
if (inteiro == true){
     inteiro = 'Sim'
} else inteiro = 'Não'

//apenas para conferir no console.log(inspecionar do google)
console.log(raiz, inteiro, notNumber, baixo, cima, decimal)

//Atualiza o conteúdo do <h1> e do <p> com o número digitado
h1.innerHTML = `Seu número é: ${numero}`
p.innerHTML = `
    A raiz quadrada: <strong>${raiz}</strong> <br>
    Seu numero é inteiro: <strong>${inteiro}</strong> <br>
    Seu numero é um NaN: <strong>${notNumber}</strong> <br>
    Arredondando para cima: <strong>${cima}</strong> <br>
    Arredondando para baixo: <strong>${baixo}</strong> <br>
    Seu numero com 2 casas decimais: <strong>${decimal}</strong>
    `;