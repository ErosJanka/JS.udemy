const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const alerta = document.querySelector('.alerta')
const lembrete = document.querySelector('.lembrete')
const lembre = document.querySelector('.lembre')
const insira = document.querySelector('#insira-tempo')
  
lembrete.style.display = 'none'

let data = new Date('2021-03-19 00:00:00');
let timer = null;


iniciar.addEventListener('click', function(event){
    relogio.style.color = 'green'
    timer = setInterval(function(){
        data.setSeconds(data.getSeconds() + 1)
        relogio.innerHTML = data.toLocaleTimeString('pt-BR')
    },1000)
}); 

pausar.addEventListener('click', function(event){
    relogio.style.color = 'red'
    clearInterval(timer);
}); 

zerar.addEventListener('click', function(event){
    relogio.style.color = 'black'
    clearInterval(timer);
    data = new Date('2021-03-19 00:00:00');
    relogio.textContent = data.toLocaleTimeString('pt-BR')
}); 

alerta.addEventListener('click', function(event){
    lembrete.style.display = 'block'
    relogio.style.color = 'black'
    clearInterval(timer);
    data = new Date('2021-03-19 00:00:00');
    relogio.textContent = data.toLocaleTimeString('pt-BR')
});

lembre.addEventListener('click', function(event){
    // Obtém o tempo alvo definido no input (ex: "00:00:10")
    const targetTime = insira.value.trim();
    
    if(timer !== null) return;
    
    timer = setInterval(function(){
        data.setSeconds(data.getSeconds() + 1)
        const currentTime = data.toLocaleTimeString('pt-BR');
        relogio.textContent = currentTime;
        
        // Quando o tempo atual bater com o tempo informado no input, exibe o alerta
        if(currentTime === targetTime){
            alert('O tempo acabou');
            clearInterval(timer);
            timer = null;
        }
    }, 1000)
})
