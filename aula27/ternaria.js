//Operação ternaria
// (condicao) ? 'valor para verdadeiro : 'valor para falso'

/* 
const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000){
    console.log('Usuário VIP')
} else{
    console.log('Usuário Normal')
}
*/

//Por ser um If simples, podemos simplificar esse codigo
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuario Normal'; //O ? é para "VERDADEIRO" e o : é para "FALSO"

const corUsuario = null;
const corPadrao = corUsuario || 'preta'; //caso o usuario não escolja uma cor 'null' a cor padrão se mantém.

console.log(nivelUsuario, corPadrao)

