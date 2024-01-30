const botaoPlayEPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('Capitulo');
const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;


function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayEPause.classList.remove('bi-play-circle-fill');
    botaoPlayEPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayEPause.classList.remove('bi-pause-circle-fill');
    botaoPlayEPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar() {
    if (taTocando === 0) {
        
        tocarFaixa();
        taTocando = 1; //
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeDaFaixa(){
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual
}
function proximaFaixa(){
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else { capituloAtual++;
    }
    audioCapitulo.src = "books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeDaFaixa();
}

function voltarFaixa(){
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else { capituloAtual--;
    }
    audioCapitulo.src = "books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeDaFaixa();
}



botaoPlayEPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);