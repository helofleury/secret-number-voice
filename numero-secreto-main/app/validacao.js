document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})

const elementoTentativas = document.getElementById('tentativas')
let tentativas = 0


function verificaChute(chute){
    const numero =+ chute

    if(Number.isNaN(numero)){ // NaN = not a number // se NaN for verdadeiro, executa o if
        elementoChute.innerHTML += `<div class="aviso">Valor inválido</div>`

    }
    
    if(numero > maiorValor || numero < menorValor){
        elementoChute.innerHTML += `<div class="aviso">Valor tem que estar entre ${menorValor} e ${maiorValor}</div>`
    }
    

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h1>Parabéns você acertou! O número secreto era ${numeroSecreto}</h1>
            <h2>Você encontrou o número secreto em ${tentativas} tentativas</h2>
            <button id="jogar-novamente">Clique aqui para jogar novamente</button>

        `
        numeroTentativas()    
    }

    if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
        numeroTentativas()
    }

    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
        numeroTentativas()     
    }

    
}

function numeroTentativas(){
    if(tentativas >= 0){
        tentativas++
        elementoTentativas.innerHTML = `<div>Tentativas totais: ${tentativas}</div>`
    }
}