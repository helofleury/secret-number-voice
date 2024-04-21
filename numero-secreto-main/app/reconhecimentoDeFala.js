const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const caixaValor = document.getElementById('.caixa')
const elementoChute = document.getElementById('chute')



recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(evento){
    chute = evento.results[0][0].transcript 
    exibeChuteNaTela(chute)
    verificaChute(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div><h3>Você disse:</h3></div>
    <span class="caixa">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
 
