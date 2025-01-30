const form = document.querySelector('#formulario'); //capturou o formulario

//esse addEventListener é para não atualizar a pagina
form.addEventListener('submit', function (event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso'); //é para informar o elemento que está recebendo o evento
    const inputAltura = event.target.querySelector('#altura'); //por que event e não form? porque o event já esta no form, poupa linha de codigo

    const pesoValue = inputPeso.value.replace(',', '.'); //substitui a virgula por ponto
    const alturaValue = inputAltura.value.replace(',', '.');

    const peso= Number(pesoValue);
    const altura= Number(alturaValue);


    if (!peso){ //!peso = não é peso -> substitui o isNaN(peso); 
        setResultado('Peso inválido', false); //O false é para mostrar ao isValid se é um resultado valido ou não
        return; //isso é para parar o codigo aqui e não continuar rodando
    }

    if (!altura){
        setResultado('Altura inválido', false); //O false é para mostrar ao isValid se é um resultado valido ou não
        return; //isso é para parar o codigo aqui e não continuar rodando 
    }

    const imc = getImc(peso, altura); //esta buscando a function que calcula o IMC
    const nivelImc = getNivelImc(imc); //esta retornando o nivel do imc

    const msg = `Seu Imc é ${imc} (${nivelImc})`;
    setResultado(msg, true);

    console.log(imc, nivelImc)
});

function getNivelImc(imc){ //é onde vai mostrar o seu nível (obseidade, sobrepeso, ...)
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',' Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9){
        return nivel[5]; //'Obesidade grau 3'
    }

    if(imc >= 34.9){ //não precisa colocar o else if porque quando chegar no return de cima, a função para ali.
        return nivel[4];
    }
    
    if(imc >= 29.9){
        return nivel[3];
    }
    
    if(imc >= 24.9){
        return nivel[2];
    }
    
    if(imc >= 18.5){
        return nivel[1];
    }
    
    if(imc < 18.5){
        return nivel[0]; //'Abaixo do peso'
    }
}


function getImc(peso, altura){ //function que calcula o IMC
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


function criaP(){ //função para criar paragrafos
    const p = document.createElement('p');
    return p;
}


//cria uma mensagem
function setResultado (msg, isValid) { //O isValid é para definir se o resultado vai mostrar vermelho ou verde
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';

    const p = criaP();
    
    if(isValid){ //acrescentando uma classe no paragrafo para mostrar vermelho ou verde
        p.classList.add('paragrafo-resultado')
    } else{
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p); //estou colocando o resultado no paragrafo
}