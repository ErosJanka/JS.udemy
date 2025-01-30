//Se precionar Ctrl + I ele ira iniciar o Copilot 

//Mensagem para o usuário digitar dois numeros 
let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

//converter os Strings em Numbers
num1 = Number(num1);
num2 = Number(num2);


//Mostrar resultado ao usuario
let resultado = num1 + num2
alert(`O resultado é: ${resultado}`)

/*
MAIS AVANÇADO

// Mensagem para o usuário digitar dois números 
let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

// Converter os Strings em Numbers
num1 = Number(num1);
num2 = Number(num2);

// Loop para garantir que os números são válidos
while (isNaN(num1) || isNaN(num2)) {
    alert('Digite um número válido');
    num1 = Number(prompt('Digite um número: '));
    num2 = Number(prompt('Digite outro número: '));
}

// Mostrar resultado ao usuário
let resultado = num1 + num2;
alert(`O resultado é: ${resultado}`);

*/
