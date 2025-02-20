const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000) 
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' //se não colocar isso ee vai ficar com o fuso de -3horas. com isso vai ficar 00:00:00
    });
}
console.log(criaHoraDosSegundos(10));


iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado'); //quando iniciar ele remove o vermelho
    clearInterval(timer); //para que ele não fique criando varios contadores e o contador não fique acelerando
    iniciaRelogio()
}); 

pausar.addEventListener('click', function(event){
    clearInterval(timer); //quando eu clico e ele para, mas volta no mesmo contador, porque a variavel segundos mantém o seu estado. não esta criando ela novamente
    relogio.classList.add('pausado'); //quando pausar ele fica vermelho
}); 

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});

/*
Ao invés de de ficar criando varios addEventListener, podemos fazer o seguinte:

document.addEventListener('click', function(event){
    //console.log(event.target); //vai falar qual elemento está sendo clicado

    const element = event.target;

    if(element.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado'); //quando zerar ele remove o vermelho
        segundos = 0;
    }

    if(element.classList.contains('iniciar')){
        relogio.classList.remove('pausado'); //quando iniciar ele remove o vermelho
        clearInterval(timer); //para que ele não fique criando varios contadores e o contador não fique acelerando
        iniciaRelogio()
    }

    if(element.classList.contains('pausar')){
        clearInterval(timer); //quando eu clico e ele para, mas volta no mesmo contador, porque a variavel segundos mantém o seu estado. não esta criando ela novamente
        relogio.classList.add('pausado'); //quando pausar ele fica vermelho
    }
});
*/
