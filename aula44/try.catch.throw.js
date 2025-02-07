//                                                  TRY - CATCH - THROW 
//Caso eu queira executar um código que eu saiba que é potencialmente perigoso de dar erro eu posso utilizar o try e catch. onde o TRY vai tentar executar o codigo e caso dê algum erro vai pular para o bloco de baixo onde coloquei o CATCH. então executará o catch que ao invés de exibir o codigo de erro, ira exibir o que eu colocar no bloco catch.

/*
try{ //tente executar esse codigo, caso de algum erro eu preciso que caia no bloco 'catch'
console.log(euNaoExisto); //aqui exibirá um erro que a variavel nao foi definida
}catch(erro){
    console.log('euNaoExisto não existe'); //o indicado não é mostrar  ao usuario o problema interno do programa
}
*/


function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números')
    }

    return x + y
}
try{
console.log(soma(1, 2));
console.log(soma(1, '2'));
} catch(erro){
    //console.log(erro); NÃO FAZER ASSIM
    console.log('Alguma coisa mais amigável ao usuario caso dê erro')
}