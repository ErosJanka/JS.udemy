# JS.udemy
 Aulas da Udemy
                                        AULA3
Aprendendo o uso do console.log



                                        AULA4
Aprendendo o uso de comentarios no código



                                        AULA5
Aprendendo a linkar o JavaScript no HTML5



                                        AULA6
Uso de variaveis (LET) e diferencas de STRING e NUMBER



                                        AULA8
                                EXERCICIO: Calculo de IMC
O que foi usado: Declarações de Variaveis; console.log



                                        AULA9
PRIMITIVOS; String, Number, Undefined, Null, Bolean, Objeto



                                        AULA10
ARITIMETICOS; ( +, -, *, /, %, **)



                                        AULA11
Uso de pompt no html para o usuario colocar 2 numeros e JS faz o Calculo



                                        AULA12
                                    DESAFIO: bca
mudar a ordem a, b, c para b, c, a
resolução: criar uma variavel auxiliar || ou || [varA, varB, varC] = [varB, varC, varA]



                                        AULA13
Uso de Strings:
indexOf (Procura a palavra a partir do índice 10)
length (Tamanho da string)
slice(-6) (Pega os 5 últimos caracteres)
toUpperCase() (Coloca a string em maiúsculo)
ETC....
                             EXERCICIO: Manipulação de strings    



                                        AULA14
Uso de Numbers:
mostrar a representação binaria
arredondar 2 numeros
ETC..



                                        AULA15
                    EXERCÍCIO: Junção do uso de strings e Numbers 
mostrando numeros arredondados e frase inteira convertida para maiusculas (e mais...)



                                        AULA16
diferenças de Arrays, Objetos, Funcoes



                                        AULA17
FUNÇÕES (iniciante)



                                        AULA18
Uso de objetos de funções
Lembrete: se tiver [] é array. se tiver {} é objeto



                                        AULA19
Uso de manipulação de Arrays
pop() exclui ultimo valor do array
push() Acrescenta valor no array



                                        AULA20
                            EXERCICIO: Calculo de IMC(intermediario)
utilizando  HTML onde o usuario ira colocar as informações
NO back-end usa-se as functions e objetos



                                        AULA21
Operadores de comparação
> - Maior que
>= - Maor ou igual a
< - Menor que
<= - Menor ou igual a
== - igual (Checa igualdade entre dois operando esquerda e direita, checa apenas valor)
=== - igualdade extrita(checa valor e tipo)
!= - diferente (só checa valor)
!== - diferente extrito (checa valor e tipo)



                                        AULA22
Usuario e senha (simples)



                                        AULA23
&& - AND 
|| - OR



                                        AULA24
Uso de if (exemplo utilisado: bom dia, boa tarde, boa noite)



                                        AULA25
junção de if &&



                                        AULA26
                        EXERCICIO: Calculo de IMC(AVANÇADO)
Junção de tudo que aprendeu até agora



                                        AULA27
Operação ternaria:
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuario Normal';

O ? é para "VERDADEIRO" e o : é para "FALSO"
                                        


                                        AULA28
Uso de DATE
${dia}/${mes}/${ano} ${hora}:${min}:${seg}  
const data = new Date('2019-04-20 20:20:59');
console.log(data.toString())



                                        AULA29
Swich - case 
no exemplo retorna o dia da semana



                                        AULA30
                EXERCÍCIO: Relogio onde mostra a hora e a Data



                                        AULA31
Diferenças de Let, Var e const



                                        AULA32 
ATRIBUIÇÃO VIA DESESTRUTURAÇÃO [ARRAYS]



                                        AULA33
ATRIBUIÇÃO VIA DESESTRUTURAÇÃO {OBJETOS}



                                        AULA34
for (let i = 0; i <= 5; i++){ //de 1+1
    console.log(`Linha ${i}`);
}



                                        AULA35
appendChild
createElement



                                        AULA36
for IN



                                        AULA37
for OF



                                        AULA38
            Exercicio: Pegar a cor do fundo da pagina e colocar nos paragrafos



                                        AULA39
while (quando)



                                        AULA40
BREACK e CONTINUE



                                        AULA41 
        EXERCÍCIO: Escreva uma função que recebe 2 numeros e retorne o maior deles



                                        AULA42
                                        EXERCÍCIO:
Escreva uma função chamada ePaisagem que recebe dois argumentos, lergura e altura de uma imagem(number).
Retorne true se a imagem estiver no modo paisagem.



                                        AULA43
                                EXERCÍCIO: FIZZ BUZZ



                                        AULA44
TRY - CATCH - THROW 



                                        AULA45
TRY - CATCH - FINNALY



                                        AULA46
setInterval e setTimeout

setIntervel: vai configurar um intervalo de tempo para que alguma função seja executa do em determinado momento (GERALMENTE USADO PARA CONTAR OS SEGUNDOS)
setTimeout: executa uma ação depois de um determinado tempo definido (GERALMENTE USADO PARA PARAR A CONTAGEM)



                                        AULA47
                        EXERCICIO: Timer (inicializar, parar, zerar)



                                        AULA48
                            EXERCICIO: Cria lista de tarefa
Além de criar a lista de tarefa ele tem que guardar na memoria do navegador, então mesmo que eu feche a janela ele guarda as informações da lista



                                        AULA49
Resumo de funções




                                        AULA50
Parametros das funções	
função(EstePArametro){}



                                        AULA51
Retorno da função
function duplica(n){
    return n * 2
}

closure (fechamento)
function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}




                                        AULA52 
Escopo Lexico: procura do escopo (se não tiver na propria funcao, procura no 'pai' da função onde foi criada)



                                        AULA53 
closure
É a habilidade de acessar o seu escopo lexico



                                        AULA54 
Callback
São ações executadas quando uma ação ocorre. Quando uma ação finaliza o callback é executado



                                        AULA55
Funcoes Imadiatas
para fujir do escopo global, não quer que as variaveis, ou funções que definirem toquem no escopo global, pois elas podem ser alteradas.



                                        AULA56
Funções fabricas (Factory Functions)
introdução de THIS
introdução e explicação GET (getter)
introdução e explicação SET (setter)



                                        AULA57
                                EXERCICIO: CALCULADORA




                                        AULA58
Funções Contrutoras
tentar convertar a aula 57 para função construtora

ex: esse é um atributo publico do objet:                        FABRICA
display: document.querySelector('.display')

como é atributo publico da construtora?                         CONSTRUTORA
this.nome = nome


precisa de metodos:                                             FABRICA
inicia: function(){ 
            this.cliqueBotoes() 
            this.pressionaEnter()
        },

                                                                CONSTRUTORA
this.metodo = function (){
        console.log('Sou um método')
    };



                                        AULA59
                    EXERCÍCIO: REcriar a calculadora usando funções construtoras



                                        AULA60
Funções recursivas




                                        AULA61
Funções Geradoras




                                        AULA62
Revisão basico de Arrays



                                        AULA63
Método Splice




                                        AULA64
Concatenação de Arrays
usando o metodo .concat



                                        AULA65
Filter - Filtrando o ARRAY
Nele inclui filtro de numeros comuns, até filtros dentro de Objetos
MISSÕES:
//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com 'a'




                                        AULA66
Map - Mapeando o ARRAY
basicamente a mesma coisa do Filter, porém ele altera o Array original
MISSÕES:
//Retorne apenas uma string com o nome da Pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave ID em cada objeto



                                        AULA67
Reduce - Reduzindo um Array



                                        AULA68
filter+map+reduce
//Retorne a soma do dobro de todos os pares 
// -> Filtrar pares
// -> Dobrar os valores
//  -> Reduzir (somar tudo)

const numerosPaares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac+ valor)
console.log(numerosPaares)




                                        AULA69
forEach


                                        AULA70
Revisão de Objetos




                                        AULA71
Object.defineProperty()
Object.defineProperties()
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: true, //pode alterar
        configurable: true //configuravel
    })
}

const p1 = new Produto ('Camiseta', 20, 3);

console.log(p1)