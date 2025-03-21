const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi(){ //função para criar listas
    const li =document.createElement('li')
    return li;
}

//tarefa para apertar a tecla enter e enviar o input
inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!inputTarefa.value) return; //se o input não tiver valor, não ficará colocando espaços em branco
        criaTarefa(inputTarefa.value) //quando clicar no botão ele vai pegar o texto que está no input e jogar o texto para a função criaTarefa
    }
    //console.log(e) //para saber o codigo da tecla pressionada no console do google
})

//funçaõ para quando enviar a tarefa ele limpa o input para adicionar uma nova tarefa
function limpainput (){
    inputTarefa.value = '';
    inputTarefa.focus(); //Após adicionar uma tarefa, o campo de entrada (inputTarefa) é automaticamente selecionado e pronto para receber uma nova entrada do usuário.
}

//função para criar um botão de apagar uma listas
function criaBotaoApagar (li){
    li.innerText += '   '; //cria um espaço entre o texto e o botão
    const botaoApagar = document.createElement ('button');
    botaoApagar.innerText = 'Apagar'
    // botaoApagar.classList.add('apagar'); //cria uma classe no botão
    botaoApagar.setAttribute('class', 'apagar') //melhor que a opção de cima, pois aqui posso definir qual atributo quero adicionar, pode ser um id, type, title, etc.
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar); //A linha li.appendChild(botaoApagar); adiciona o botão de apagar (botaoApagar) como um filho do elemento de lista (li). Isso significa que o botão será exibido dentro do item da lista no HTML.
    salvarTarefas(); //sempre que apagar uma tarefa ele salva 
}



function criaTarefa(textoInput) {
    const li = criaLi(); //a variavel dessa função é diferente da variavel da função criaLi
    li.innerText = textoInput;
    tarefas.appendChild(li) //Imagine que o li seja uma folha e o appendChild é o que está escrito na folha
    limpainput();
    criaBotaoApagar(li);
    salvarTarefas();
}


btnTarefa.addEventListener('click', function(){ //é normal nessas funções anonimas colocar apenas function(e){}
    if (!inputTarefa.value) return; //se o input não tiver valor, não ficará colocando espaços em branco

    criaTarefa(inputTarefa.value) //quando clicar no botão ele vai pegar o texto que está no input e jogar o texto para a função criaTarefa

    //console.log(inputTarefa.value) //está pegando o valor que está no input (caixa para escrever o texto) este console é apenas p/ teste
});

document.addEventListener('click', function(e){
    const el = e.target; //el é ELEMENTO 
    //console.log(el) //Quando você clica em qualquer lugar do documento, o manipulador de eventos é acionado. A linha const el = e.target; captura o elemento que foi clicado e o armazena na variável el. Em seguida, console.log(el); imprime esse elemento no console.

    //verificar se o botão que está sendo clicado é realmente o botão de apagar
    if(el.classList.contains('apagar')){
        el.parentElement.remove() //irá remover o "pai" do elemento, que é a lista criada, i li inteiro é removido
        salvarTarefas(); // Atualiza o armazenamento local após remover o item
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li') // vai pegar os li dentro de tarefas
    const listaDeTarefas = []; //criação de ARRAY para capturar apenas os textos dos li

    //iterar as nodeList e pegar todos os textos dele
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()//substitui a palavra apagar (está pegando o texto do botão), para NADA ''. E o trim serve para remover os espaços em branco nas extremidades

        listaDeTarefas.push(tarefaTexto); //jogar o texto dentro da listaDeTarefas
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas); //foi criado uma string do ARRAY convertido para JSON
    //local no navegador onde pode salvar coisas
    localStorage.setItem('tarefas', tarefasJSON);
}

//função para ler as tarefas e jogar devolta no URL
function adcionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    //converter as tarefas que esão em string para Array, ou seja, mostrar a lista novamente
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

adcionaTarefasSalvas()