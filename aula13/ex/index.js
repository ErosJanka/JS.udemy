const nome = prompt('Digite o seu nome completo: ');
let quantidade = nome.length;
let maiúsculaNome = nome.toUpperCase();
let minúsculaNome = nome.toLowerCase();
let segundaLetra = maiúsculaNome[1];
let letraE = maiúsculaNome.indexOf('E');
let ultimaLetraE = maiúsculaNome.lastIndexOf('E');
let ultimasTresLetras = maiúsculaNome.slice(-3);
let palavrasNome = nome.split(' ');


//document.body.innerHTML serve para escrever no corpo do HTML
document.body.innerHTML = `O seu nome é: <strong>${nome}</strong> <br>`; 
document.body.innerHTML += `O seu nome tem <strong>${quantidade}</strong> letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${segundaLetra}</strong> <br>`;
document.body.innerHTML += `A primeira letra E do seu nome está na posição: <strong>${letraE}</strong> <br>`;
document.body.innerHTML += `A última letra E do seu nome está na posição: <strong>${ultimaLetraE}</strong> <br>`;
document.body.innerHTML += `As últimas três letras do seu nome são: <strong>${ultimasTresLetras}</strong> <br>`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${palavrasNome}</strong> <br>`; //mostra o array
document.body.innerHTML += `Seu nome em maiúsculas: <strong>${maiúsculaNome}</strong> <br>`;
document.body.innerHTML += `Seu nome em minúsculas: <strong>${minúsculaNome}</strong> <br>`;

//Eros Nuspl Oliveira Jankosky