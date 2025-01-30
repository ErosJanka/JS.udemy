const data = new Date();//posso colocar qualçquer dia da semana que eu quiser ('1987-04-21 00:00:00')
let diaSemana = data.getDay(); //o dia da semana começa com 0=Domingo


function getDiaSemana(diaSemana) {
    switch (diaSemana) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sábado';
        default:
            return '';
    }
}
    
let diaSemanaTexto = getDiaSemana(diaSemana);
console.log(diaSemana, diaSemanaTexto)
    
/*
switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
}
*/




/*
if (diaSemana === 0){
    diaSemanaTexto = 'Domingo'
} else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = ' '
}
*/