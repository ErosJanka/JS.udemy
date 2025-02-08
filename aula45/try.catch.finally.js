//                                                  TRY - CATCH - FINNALY

/*
try { //executado quando não há erros
    console.log('abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro'); //por esse erro o try encerra e manda para o CATCH
    console.log('fechei o arquivo'); //por conta do erro não chegaria nessa linha de codigo
}catch(erro){ //executado quando há erro
    console.log('tratando o erro'); //não fecharia o arquivo aqui
} finally{ //executado sempre. Mas pode omitir se não precisar que o codigo seja executado 
    console.log('FINNALY: Eu sempre sou executado') //pode sempre tentar fechar no finally ao invés no try.
}
*/

function retornaHora(data){//quero que 'data' seja exatamente um objeto de Date
    if(data && !(data instanceof Date)){ //Se a data for lançada e não for uma instancia de Date...
        throw new TypeError('Eperando instancia de Date'); //Estou motrando qual é o erro que daria caso não coloque uma data.
    }

    if(!data){ //Se a data não for enviada
        data = new Date()
    }

    return data.toLocaleTimeString('pr-BR', {
        hour: '2-digit', //garantindo que a hora apareça com 2 digitos ex: 09:00 ao invés de 9:00
        minute: '2-digit',
        second: '2-digit',
        hour12: false //para não aparecer o formado de 12 horas ex: 9:34 Pm
    });
}

try{
const data = new Date('01-01-1970 09:34:12');
const hora = retornaHora();
console.log(hora)
} catch(erro){
    //tratar erro
    console.log(erro)
} finally{
    console.log('Tenha um bom dia')
}