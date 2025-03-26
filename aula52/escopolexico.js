/*
Escopo Lexico:
Aqui irei utilizar exemplos de função:
Se na função eu chamar uma variavel, mas essa variavel não está na própria função, ela vai buscar no 'pai' dela, se não achar, vai procurar no 'pai' do 'pai'. Até chegar no escopo global, onde se não tiver vai retornar erro.
Mas vamos supor que tenha duas variaveis com o mesmo nome, uma dentro da função e outra fora, primeiro ele vai pegar dentro da função. Só irá pegar fora da função SE NÃO TIVER DENTRO!!!
*/

const nome = 'Eros'

function falaNome(){
    console.log(nome) //consigo bucar qualquer variavel que esteja fora da funcão
}
falaNome()

function usaFalaNome(){
    falaNome()
}

usaFalaNome() //Vai mostrar o meu nome do mesmo jeito.

//Se eu declarar a variavel nome='nuspl' dentro da primeira função ele irá mudar o resultado para NUSPL.
//Vamos ver o que acontece se eu ficar a variavel nome na SEGUNDA FUNÇÃO

function funcao1(){
    console.log(nome)
}
funcao1()

function funcao2(){
    const nome = 'Jankosky'
    funcao1()
}
funcao2()

//Ele ainda retorna o nome EROS, pois ele lembra onde foi criado. Ele irá buscar epenas onde foi criado e não chamado. Mesmo que a variavel nome = 'Jankosky' seja teoricamente o 'pai' na chamada funcao1, ele não é, pois está apenas chamando. só seria pai se estivesse criando a função na funcao2

