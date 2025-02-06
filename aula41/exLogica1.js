// Escreva uma função que recebe 2 numeros e retorne o maior deles

function aleatório(){
    const numeros = Math.round(Math.random() * (100-1) + 1) //Math Round já arredonda o numero aleatório
    return numeros
}


function maior(numero1, numero2){
    if(numero1 >= numero2){ //posso usar a opção ternaria. (return x > y ? x : y). deixei if/else para ficar mais legivel
        return numero1
    } else{
        return numero2
    }
}
//modo mais simplificado abaixo
//const maior = (numero1, numero2) => numero1 > numero2 ? numero1 : numero2

const num1 = aleatório();
const num2 = aleatório()
const resultado = maior(num1, num2);

console.log(num1, num2)
console.log(resultado)
