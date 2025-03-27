//São ações executadas quando uma ação ocorre. Quando uma ação finaliza o callback é executado

//função para criar um numero aleatório. Para colocar entre 1 e 3 segundos. as funções f1 até f3 vão aparecer nesse tempo randomico
function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}
console.log(rand())

function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if (callback) callback(); //se callback for verdadeira executa callback
    }, rand())
}
function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if (callback) callback(); //Para que o callback? PARA GARANTIR QUE VAI SER EXIBIDO NA ORDEM CORRETA 
    }, rand())
}
function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand())
}

// Chamando as funções em sequência com callbacks
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Ola, Mundo!')
        })
    })
})



//Um jeito mais bonito de se fazer sem parecer uma arvore de natal 
f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback)
}
function f3Callback(){
    console.log('Ola, Mundo!')
}

//podemos ver que a ação é executada após o termino da contagem de tempo feito no setTimeout. Aqui é uma simulação do que aconteceria na web. Se por algum acaso você não queira que carrege algo primeiro que uma outra função. algo para logar na base de dados por exemplo.
