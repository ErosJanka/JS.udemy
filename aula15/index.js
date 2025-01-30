let num1 = 9.54578;

let num2 = Math.floor(num1);//arredonda para baixo (resultado 9)
console.log(num2)

let num3 = Math.ceil(num1); //Arredonda para cima (resultado 10)
console.log(num3)

let num4 = Math.round(num1); //Arredonda para o numero inteiro mais proximo
console.log(num4)

//Achar o maior numero (min para o menor)
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));

//Gera um numero aleatório
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //Gera um numero aleatorio entre 5 e 10 porém numeros quebrados "6.478". por isso utilizei o Math.round
console.log(aleatorio); 
