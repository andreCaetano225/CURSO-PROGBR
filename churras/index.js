const inpAdultos = document.getElementById("adultos");
const inpCriancas = document.getElementById("criancas");
const inpDuracao = document.getElementById("duracao");

const resultado = document.getElementById("resultado")

function calcular(){

    let adultos = inpAdultos.value;
    let criancas = inpCriancas.value;
    let duracao = inpDuracao.value;


    let qdtCarne = carnepp(duracao) * adultos + (carnepp(duracao) / 2 * criancas)
    let qdtCerveja = cervejapp(duracao) * adultos;
    let qdtBebidas = bebidaspp(duracao) * adultos + (bebidaspp(duracao) / 2 * criancas)
    
    console.log(qdtCarne)


}

function carnepp(duracao){
    if(duracao>=6){
        return 650;
    }
    else {
        return 400;
    }
}


function cervejapp(duracao){
    if(duracao>=6){
        return 2000;
    }
    else {
        return 1200;
    }
}

function bebidaspp(duracao){
    if(duracao>=6){
        return 1500;
    }
    else {
        return 1000;
    }
}
