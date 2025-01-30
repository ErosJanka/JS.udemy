//Objeto Date é uma funcao contrutora
//Abaixo o link da documentação
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date#Two%20digit%20years
 /*
const treHoras = 60 * 60 * 3 * 1000; //60 segundos  * 60 segundos (é 1hora) * 3 (3 horas) * 1000 (milisegundos)
const umDia = 60 * 60 * 24 * 1000; //é para fazer a conta de 1 dia em formato Milesimos de Segundos (milisegundos)
const data = new Date(0 + treHoras + umDia);
*/

/*
const data = new Date(2019,3,20,15,14,27); // 2019/abril(4)/20 15h:45m:27s obs. o mes janeiro começa com 0
*/


/*
const data = new Date('2019-04-20 20:20:59'); //Jeito mais comum de se ver, por ser uma string o mes de janeiro não começa com 0
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()+ 1); //Mês começa com 0
console.log('Hora', data.getFullYear());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); //Domigo é 0 e 6 é sabado
console.log(data.toString())
console.log(Date.now()); //irá mostrar o Milesimos de Segundos. Se eu colocar na const data ira mostrar a dat atual
*/

//Criando funçaõ que formata a data

function zeroAEsquerda(num){ //essa função é para adicionar o 0. ex: sem ela o mes janeiro fica apenas 1. porém com essa função ele fica 01
    return num >= 10 ? num : `0${num}`
}


function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)