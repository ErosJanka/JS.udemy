/*
Sempre que eu crio um appendChild ele acrescenta um elemento no final do local qye escolhemos. se eu colocar no body. vai colocar abaixo do script, se eu colocar na section, vai ser colocado no final dela, ou seja, abaixo do H1
*/

const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //0
    {tag: 'div', texto: 'Frase 2'}, //1
    {tag: 'footer', texto: 'Frase 3'}, //2
    {tag: 'section', texto: 'Frase 4'} //3
];

const container = document.querySelector('.container');
const div = document.createElement('div'); //criando o elemento div

for (let i = 0; i < elementos.length; i++){ //vai buscar até o ultimo elemento do array 
let {tag, texto} = elementos[i]; //vai desestruturar e mostrar a tag e texto de cada indice
let tagCriada = document.createElement(tag); //criando elementos de acordo com a tag de cada indice 
tagCriada.innerHTML = texto
div.appendChild(tagCriada);//dentro da div que criamos vamos colocar os elementos nela

console.log(tagCriada);
}

container.appendChild(div); //selecionou o container que esta no HTML, e colocar os elementos que estão na div
