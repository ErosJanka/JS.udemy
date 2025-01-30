/*
            NOTAS:

o parametro da função é uma variavel temporaria e quando chamo a função mudaData e atribuo ele na variavel dataa. Então substitui a variavel temporaria pela dataa

então nomeSemana(mudaSemana). a VAriavel temporaria mudaSemana é substituida pela variavel dataa. 
*/

function exibicao (){
const mostrar = document.querySelector('.container')
const dataa = new Date();

//função que muda o nome da semana
function nomeSemana(mudaSemana){
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


//Função de muda o nome do mês
function nomeMes(mudaMes){
    switch(mudaMes){
        case 1:
            return 'Janeiro';
        case 2:
            return 'Fevereiro';
        case 3:
            return 'Março';
        case 4:
            return 'Abril';
        case 5:
            return 'Maio';
        case 6:
            return 'Junho';
        case 7:
            return 'Julho';
        case 8:
            return 'Agosto';
        case 9:
            return 'Setembro';
        case 10:
            return 'Outubro';
        case 11:
            return 'Novembro';
        case 12:
            return 'Dezembro';
    }
}


//function para poder editar qualquer data ou hora
function mudaData(data){ // 'data' é o parâmetro (variável temporária)
    const dia = data.getDate();
    const mes = nomeMes(data.getMonth() + 1); //chamando a função para alterar o numero no mes para nome dele
    const ano = data.getFullYear();
    const semana = nomeSemana(data.getDay()); //chamando a função para mudar o numero da semana par ao nome dela
    const hora = data.getHours();
    const minutos = data.getMinutes();

    console.log(`${semana}, ${dia}, ${mes}, ${ano}, ${hora}, ${minutos}`)
    return `${semana}, ${dia} de ${mes} de ${ano}   ${hora}:${minutos}`
}
mostrar.innerHTML = mudaData(dataa)
}
exibicao();
