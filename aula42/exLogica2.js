/*
Escreva uma função chamada ePaisagem que recebe dois argumentos, lergura e altura de uma imagem(number).
Retorne true se a imagem estiver no modo paisagem.
*/

// poderia fazer da maneira comentada abaixo:
// function ePaisagem(alt, larg){
//     if (larg > alt){
//         return true
//     }
//     return false
// }

//ou

const paisagem = (largura, altura) => largura > altura;

// function ePaisagem(altura, largura){
//     return largura > altura
//     //o mesmo que: return largura > altura ? true : false
// }

const altura = 1080
const largura = 1920

console.log(paisagem(largura, altura))
