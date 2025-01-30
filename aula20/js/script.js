function meuEscopo() {
    // Seleciona o formulário e o elemento onde os resultados serão exibidos
    const form = document.querySelector('.form'); // Estou pegando todo o formulário e jogando nessa variável "form"
    const resultado = document.querySelector('.resultado'); // Seleciona o elemento onde os resultados serão exibidos

    // Array para armazenar os dados das pessoas
    const pessoas = [];

    // Função que será chamada quando o formulário for enviado
    function recebeEventoForm(evento) {
        // Previne o comportamento padrão do formulário (recarregar a página)
        evento.preventDefault();

        // Obtém os valores dos campos do formulário
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        // Adiciona os dados da pessoa ao array
        pessoas.push({
            nome,
            sobrenome,
            peso,
            altura
        });

        // Exibe os dados da pessoa no console (para depuração)
        console.log(pessoas);

        // Atualiza o conteúdo do elemento de resultado com os dados da pessoa
        resultado.innerHTML += `<p>${nome} ${sobrenome}, ${peso}kg, ${altura}cm</p>`;
    }

    // Adiciona um ouvinte de evento ao formulário para o evento de envio
    form.addEventListener('submit', recebeEventoForm);
}

// Executa a função meuEscopo para inicializar o código
meuEscopo(); 