function tocaSom (idAudio) {
    document.querySelector(idAudio).play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;

//document.querySelectorAll('.tecla');
const listaDeTeclas = document.querySelectorAll('.tecla');
//let cont = 0;

//while(cont< listaDeTeclas.length) {
for (let cont=0; cont<listaDeTeclas.length; cont++){

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;


    listaDeTeclas[cont].onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {tecla.classList.remove('ativa');}

    //cont += 1;
}