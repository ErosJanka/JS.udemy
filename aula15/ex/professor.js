const numero = Number(prompt('Digite um numero: '));
const numeroTitulo = document.getElementById('numero.titulo')
const numeroTexto = document.getElementById('texto')

//o que a pessoa digitar irá mostrar ao usuario
numeroTitulo.innerHTML = numero

texto.innerHTML = '';
texto.innerHTML += `<p> A raiz quadrada: <strong>${numero ** 0.5}</strong></p>`;
texto.innerHTML += `<p>Seu numero é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML += `<p>Seu numero é um NaN: <strong>${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`;
texto.innerHTML += `<p>Seu numero com 2 casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;