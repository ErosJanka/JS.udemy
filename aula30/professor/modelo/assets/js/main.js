const h1 = document.querySelector('.container h1'); //dessa forma vai pegar apenas o h1 da casse
const data = new Date();

//função que muda o nome da semana
function nomeSemana(mudaSemana){ //Para semana a mesma coisa, vou deixar com o switch/case para parametro
    switch(mudaSemana) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sabado';
        default:
            return '';
    }

}

function GetNomeMes(numeroMes){ //Substitui o switch/case
    const meses = [`Janeiro`, `Fevereiro`, `Março`, `Abril`, `Maio`, `Junho`, `Julho`, `Agosto`, `Setembro`, `Outubro`, `Novembro`, `Dezembro`]

    return meses[numeroMes];
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = nomeSemana(diaSemana);
    const nomeMes = GetNomeMes(numeroMes)

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de ` +
        `${data.getFullYear()}  ${data.getHours()}:${data.getMinutes()}`
    )
}



h1.innerHTML = criaData(data)

                                      /////////////////////////////////////////////////////                       
/*                                   
                                    JEITO SIMPLIFICADO PARA FAZER O MESMO CODIGO DE CIMA

const h1 = document.querySelector('.container h1'); //dessa forma vai pegar apenas o h1 da casse
const data = new Date();
const opcoes = {
    dateStyle: 'full', //dia da semana e a data
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleString('pt-BR', opcoes)

*/

                                     /////////////////////////////////////////////////////                       



