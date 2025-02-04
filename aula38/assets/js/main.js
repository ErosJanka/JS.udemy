//Exercicio: Pegar a cor do fundo da pagina e colocar nos paragrafos

const ps = document.querySelectorAll('p'); //cria uma NodeList. muito parecido com array mas não é. mas da pra usar como se fosse um array (for classico, for in, for of)

const estilosBody = getComputedStyle(document.body);//aqui tem tudo que foi computado de estilo no body
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

//abaixo eu vou bucar cada paragrafo. como cada paragrafo é um indice da NodeList

for (let valor of ps){
    valor.style.backgroundColor = backgroundColorBody;
    valor.style.color = 'white';
    console.log(valor);
}

console.log(ps)

//obs. tudo isso da para ser feito direto no navegador
