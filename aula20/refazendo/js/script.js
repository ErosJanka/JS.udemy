function meuEscopo(){
    const form = document.querySelector('.form')
    const apresentacao = document.querySelector('.apresentacao')

    const pessoas = []

    function cadastroPessoas(formulario){
        formulario.preventDefault();
        const nome = form.querySelector('.nome').value
        const sobrenome = form.querySelector('.sobrenome').value
        const peso = form.querySelector('.peso').value
        const altura = form.querySelector('.altura').value

        
        pessoas.push({
            nome,
            sobrenome,
            peso,
            altura
        })
        console.log(formulario)

        apresentacao.innerHTML += `${nome} ${sobrenome}, ${peso}, ${altura}`
    }
    
    form.addEventListener('submit', cadastroPessoas);
}
meuEscopo()