 function criaCalculadora(){
    return {
        display: document.querySelector('.display'), //vai precisar sempre do this


        inicia: function(){ 
            this.cliqueBotoes() //sempre que eu quero referenciar uma chave dentro do meu objeto eu preciso do THIS.
            this.pressionaEnter()
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) { // Verifica se a tecla Enter foi pressionada
                    this.realizaConta();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
            this.display.style.color = "black"
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
            this.display.style.color = "black"
        },
        /*
        slice(0, -1): Remove o último caractere da string no display.
        Começa no índice 0 (início da string).
        Vai até o penúltimo caractere (-1), excluindo o último.
        */

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta); // Avalia a expressão no display

                if (!conta && conta !== 0) { // Verifica se a conta é inválida
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta); // Atualiza o display com o resultado

                if(conta === Infinity){
                    this.display.value = "Impossível dividir por 0"
                    this.display.style.color = "red";
                    this.display.style.fontSize = "1.5em"
                    return
                }
            } catch (e) {
                alert('Conta inválida');
                return;
            }
            //utilizando o eval, ele vai interpretar que o que está no display um codigo JS. ou seja, se colocar no display um alert(), vai exibir o alert na tela. Mas pode ser perigoso
        },


        cliqueBotoes(){
            // Aqui o THIS é a CALCULADORA 
            document.addEventListener('click',(e) =>{ //o problema é que tudo que eu clicar vai aparecer, body, menu, etc
                const el = e.target; //fala o que estou clicando

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },
    }
 }

 const calculadora = criaCalculadora()
 calculadora.inicia()

 //tudo que for metodo vai para baixo na function criaCalculadora. 
 //tudo que for atributos vão para cima (variaveis, etc...)