//Diferença da função fabrica da contrutora é:
//Fabria -> é uma função normal e retorna um objeto voluntariamente
//Construtora -> Ela já faz muitas coisas, ela já cria um objeto, já retorna um objeto.
//contrutora -> precisa mudar a convenção de como a gente escreve as funções
//Construtora -> sempre precisa iniciar o nome com a letra MAIUSCULA 
//Construtora -> Pessoa (new) -> igual a criaPessoa()
//Construtora -> Não precisa das virgulas

function Pessoa(nome, sobrenome){ //como eu sei que é uma construtora, eu sei que o corpoda função já vai ser o objeto que vai ser criado
    
    //metodos privados
    //vou criar um ID que só vou precisar desse ID dentro da função
    const ID = 123456 //essa variavel só vai viver aqui dentro, ela não vai estar disponivel via . por conta do this 

    //pode ser muito util quando preciso de algo interno. EX: validar CPF 
    const metodoInterno = function (){

    }

    //metodos publicos
    this.nome = nome//referindo a Pessoa() que está sendo criado
    this.sobrenome = sobrenome

    this.metodo = function (){
        console.log('Sou um método')
    };
}
//this.nome = é o mesmo que pessoa.nome = 

const p1 = new Pessoa('Eros', 'Jankosky')
const p2 = new Pessoa('Geovanna', 'Miranda')

console.log(p1.nome)
console.log(p2.nome)
p1.metodo()

//A palavra new cria um novo objeto vazio, faz o this apontar para o objeto que está selecionado e retorna implicitamente para a variavel
