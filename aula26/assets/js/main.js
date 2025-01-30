const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura")
const exibicao = document.querySelector("#exibicao")
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    calculoIMC();
}); //para não atualizar a pagina quando clica em 'calcular'

//função para quando o botão "calcular" for clicado
function calculoIMC(){
    //Substitui virgula por ponto
    let pesoValue = peso.value.replace(',', '.');
    let alturaValue = altura.value.replace(',', '.');

    let pesoNumber = Number(pesoValue);
    let alturaNumber = Number(alturaValue);
    let imc = pesoNumber/(alturaNumber * alturaNumber);
    let resultado;

    if (isNaN(pesoNumber)){ //Se tiver uma String no peso
        exibicao.innerHTML = `<p class="stringMensagem">Peso Incoreto, por favor, digitar um número válido</p>`;
    } else if(isNaN(alturaNumber)){
         exibicao.innerHTML = `<p class="stringMensagem">Altura Incoreta, por favor, digitar um número válido</p>`;
    }else{ //Se for uma Number
        if(imc < 18.5){
            resultado = "Abaixo do peso";
        }else if(imc >= 18.5 && imc < 25){
            resultado = "Peso normal";
        }else if(imc >= 25 && imc < 30){
            resultado = "Sobrepeso";
        }else if(imc >=30 && imc < 35){
            resultado = "Obesidade grau 1";
        }else if(imc >=35 && imc < 40){
            resultado = "Obesidade grau 2";
        }else{
            resultado = "Obesidade grau 3";
        }

        exibicao.innerHTML = `<p class="numberMensagem">Seu imc é de ${imc.toFixed(2)}(${resultado})</p>`
    }

    console.log(pesoNumber, alturaNumber, imc); //Apenas para ver se os valores estão corretos no console da web 
}
