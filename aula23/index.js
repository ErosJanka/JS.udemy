/*
Quando usamos o operador "&& - AND" ele funciona da seguinte maneira: Ele vai lendo da esquerda para a direita e vai conferindo cada TRUE, no final se todos forem TRUe ele retorna o ultimo que leu. Porém quando se depara com um FALSE, ele retorna o primeiro FALSE que encontrar e para aoperação ai.

ex:
console.log('Eros' && 'seila' && 'teste'); //Retorna teste
console.log('Eros' && 0 && 'teste'); //Retorna 0

Por que 0? Pois além do FALSE literal, também temos o FALSY, a lista dos FALSY (false, 0, '', "", ``, null, undefined, NaN) se o && se deparar com um deles é um resultado FALSE e retorna o valor FALSY

Quando usamos o operador "|| - OR" ele funciona também da esquerda para direita. E assim que avistar o primeiro TRUE ele retorna o mesmo, mesmo se tiver outros TRUE mais a frente. Por que? porque o || precisa apenas de uma expressao verdadeira para retornar o valor verdadeiro
ex:
console.log(0 || undefined || false || 'Eros' || true); Retorna Eros

para que eu uso?
const corUsuario = null;
const corPadrao = 'red';
//ai faz uma condicional "IF" que se o usuario escolher uma cor, usar a cor que o usuario escolher. Se não, usar a cor padrão.Ao invés de esccrever toda essa linha de codigo eu posso usar:
const corUsuario = null;
const corPadrao = corUsuario || 'red'; //Aqui retorna 'red' pois o primeiro resultado é FALSE. porém se o usuario colocar alguma cor ele se torna TRUE, então retornará o valor que o usuario escolheu
*/

const corUsuario = null;
const corPadrao = corUsuario || 'red';

console.log(corPadrao)