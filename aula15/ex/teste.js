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

/*
nesse caso foi um teste de if, porem o mais indicado é while (enquanto o numero for NaN continua recebendo a mensagem de aviso). este if não funciona com praticidade pois quando o usuario reescreve o promp tenho que fazer todo o processo novamente, isso pode pesar mais a pagina
*/
if (isNaN(numero)){
    alert('Por Favor, digite um numero corretamente')
    numero = prompt('Digite um numero: ')
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
    h1.innerHTML = `Seu número é: ${numero}`
    p.innerHTML = `
    A raiz quadrada: <strong>${raiz}</strong> <br>
    Seu numero é inteiro: <strong>${inteiro}</strong> <br>
    Seu numero é um NaN: <strong>${notNumber}</strong> <br>
    Arredondando para cima: <strong>${cima}</strong> <br>
    Arredondando para baixo: <strong>${baixo}</strong> <br>
    Seu numero com 2 casas decimais: <strong>${decimal}</strong>
    `;
} else{
    h1.innerHTML = `Seu número é: ${numero}`
    p.innerHTML = `
    A raiz quadrada: <strong>${raiz}</strong> <br>
    Seu numero é inteiro: <strong>${inteiro}</strong> <br>
    Seu numero é um NaN: <strong>${notNumber}</strong> <br>
    Arredondando para cima: <strong>${cima}</strong> <br>
    Arredondando para baixo: <strong>${baixo}</strong> <br>
    Seu numero com 2 casas decimais: <strong>${decimal}</strong>
    `;
}