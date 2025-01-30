
let num1 = 1;
let num2 = 2.5;
console.log(num1.toString() + num2); //Aqui eu quero juntar os numeros(concatenar) e não somar eles, porém dessa forma eu apenas defini temporariamente.

/*
Se eu quiser alterar para sempre o Number para String eu digito:
num1 = num1.toString();
*/

num3 = 1500
console.log(num3.toString(2)); //Para mostrar a representação binaria do número

num4 = 10.5789551255547
console.log(num4.toFixed(2)); //Para arredondar 2 numeros. lemnrando que dessa maneira não altera para sempre, vamos supor que você precise desse numero inteiro, mas precise mostrar arredondado para o cliente.

console.log(Number.isInteger(num1)); //Se retornar "true" é porque o numero é inteiro, se "false" é um numero decimal (12.8)

let temp = num1 * 'ola'; //Aqui retornará NaN (Not a Number)
console.log(Number.isNaN(temp)) //Para verificar se é um NaN ele retornará "true". Se "false" é uma conta valida
