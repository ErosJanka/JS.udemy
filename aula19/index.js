/*
PRIMITIVOS (valores imutaveis)- string, number, boolean, undefined, null (bigint, symbol) - dado=valor
ou seja, quando for criar uma variavel e criar outra usando a primeira como referencia, a segunda vai ser uma copia. ex:
let a = 'A'
let b = a
console.log(a, b); //mostrara A A
a = 'palavra'
console.log(a, b); //mostrará palavra A. ou seja, o b que é uma copia nao muda


Referencia (valor mutavel) - array, object, function - passados por referencia
*/

let a = [1, 2, 3];
let b = a; //nesse caso não é uma cópia, ou seja, tanto a quanto b aponta para o mesmo valor do array
let c = b; //aqui também aponta para o mesmo array, mesmo se mudar apenas o A, irá mudar o B e o C.
let d = [...a]; //A maneira mais simples de COPIAR e não apenas transitar os dados se correlacionando. funciona com objetos {...a}
console.log(a, b); //Se eu mudar o valor de A vai mudar também o valor de b

a.push(4);
console.log(a, b); //aqui podemos ver que mesmo adicionando o 4 no A, é acrescentado 4 no B também, ao contrario dos PRIMITIVOS

b.pop();
console.log(a, b); //o mesmo valor aqui. Eu exclui a ultima informação apenas do B, mas também excluiu do A

a.push('Eros');
console.log(c); //podemos ver que eu acrescentei 'Eros' no A, mas também foi acrescentado no c
console.log(d); //podemos ver que D continua [1, 2, 3] como no inicio
