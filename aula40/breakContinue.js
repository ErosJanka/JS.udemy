//                                              BREACK e CONTINUE
/*
Isso permite eque eu tenha controle, por exemplo, quando pular um elemento, ou quebrar o laço e terminar o laço a qualquer momento.Funcionam em todos os laços (For(todos), while e do while). diferenças dos dois:
continue: ele apenas para uma interação do laço, mas continua no proximo.
break: ele já corta o laço na hora, não continua.
*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//vamos supor que eu não quero executar o codigo de exibir o resultado quando o numero for '2'
for (let numero of numeros){

    if(numero === 2){
        console.log('pulei o numero 2')
        continue; //sempre que o js encontrar esse palavra ele vai voltar para a proxima operação. como console.log está abaixo do continue ele não executará quando a operação encontrar o numero 2
    }

    console.log(numero)

    if(numero === 7){
        console.log('7 encontrado, saindo...')
        break; //Quando o JS encontrar essa palavra ele para o laço na hora. Não contuna repetindo
    }

}

console.log('#################')

for (let i in numeros){
    let numero = numeros[i]

    if(numero === 2){
        console.log('pulei o numero 2')
        continue; //sempre que o js encontrar esse palavra ele vai voltar para a proxima operação. como console.log está abaixo do continue ele não executará quando a operação encontrar o numero 2
    }

    console.log(i)

    if(numero === 7){
        console.log('7 encontrado, saindo...')
        break; //Quando o JS encontrar essa palavra ele para o laço na hora. Não contuna repetindo
    }

}

