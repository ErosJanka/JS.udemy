//                                              ATRIBUIÇÃO VIA DESESTRUTURAÇÃO [ARRAYS]

/*
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A


//atribuição via Desestruração. Estou atribuindo para cada indice do array [b, c, a] atribuindo no valor das variaveis [a, b, c]
const letras = [b, c, a]; 
[a, b, c] = letras;

console.log(a, b, c)
*/
//indice          0    1    2    3    4    5    6    7    8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

/*
vamos supor que eu queira atribuir cada numero, eu teria que refazer cada variavel para mudar cada numero. como abaixo:
const primeiroNumero = numeros[0]
const segundoNumero = numeros[1]
.
.
.
console.log(primeiroNumero)

MAS tem um jeito de simplificar tudo isso
*/

const [primeiroNumero, segundoNumero, ...resto] = numeros //o ... serve para pegar o restante do array e o 'resto' é o nome da variavel que atribui para esse resto

console.log(primeiroNumero, segundoNumero)
console.log(resto)

const [um, , tres, , cinco, , sete, , nove] = numeros; //O espaçamento serve para pular um numero
console.log(um, tres, cinco)

/*
HÁ um outro modo mais Avançado, porém mais atrapalha do que ajuda por ser mais complexo na hora da ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

//Indice              0          1          2
//indice           0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]// 3 arrays dentro de 1 array

const [,[, , seis]] = numeros; //traduzindo: [,(essa virgula é para pular o primeiro array principal)[, , seis(as duas virgulas é para pular os dois numeros paara chegar no 6)](esse é o array que precisamos)]

//jeito mais simples abaixo
const [lista1, lista2, lista3] = numeros; //pega os arrays principais
const [,,nove] = lista3; //pega o numero 9 do 3° array

console.log(numeros[1][2]); //para acessar o numero 6, preciso buscar no indice principal 1 e depois dentro desse indice o 2
console.log(seis);
console.log(lista3);
console.log(nove);

*/
