var aluno = {
    nome: "André",
    notas: [9,8],
//  MEDIA É UM METODO NESSE CASO UMA FUNÇÃO
    media: function(n1,n2){
        return (n1 + n2) / 2;
    }
}

var aluno1 = {
    nome: "Vitor",
    notas: [4,8],
//  MEDIA É UM METODO NESSE CASO UMA FUNÇÃO
    media: function(n1,n2){
        return (n1 + n2) / 2;
    }
}


console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas [1]))



console.log(aluno1.nome);
console.log(aluno1.media(aluno1.notas[0], aluno1.notas [1]))