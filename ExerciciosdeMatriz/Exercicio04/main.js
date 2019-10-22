function root() {

    var nota = new Array();
    var nome = new Array();
    var somanota = 0;
    for (var X = 0; X < 5; X++) {

        nota[X] = [];
        nome[X] = prompt(`Coloque o nome do aluno`)
        for (var Y = 0; Y < 5; Y++) {

            nota[X][Y] = Number(prompt(`Coloque a nota de ${nome[X]}`));

        }


    } 
           for (var X = 0; X < 5; X++) {

            for (var Y = 0; Y < 5; Y++) {

                somanota += nota[X][Y];

            }
        }

    alert(somanota)
    media = somanota / nome.length;
    somanotaaluno = 0;
    var auxSituacao = Array();
    var situacao;

    for (var X = 0; X < 5; X++) {

        for (var Y = 0; Y < 5; Y++) {

            somanotaaluno += nota[X][Y];

        }

        var medialuno = somanotaaluno / 5;

        if (medialuno >= media) {

            situacao = "Aprovado";

        } else {

            situacao = "Reprovado";


        }


        var informacao = {};

        informacao.media = medialuno;
        informacao.situacao = situacao;

        auxSituacao[X] = informacao;
    }
    var Menssagem = ""
    for (var X = 0; X < auxSituacao.length; X++) {

        Menssagem += `Nome: ${nome[X]} \nMedia: ${auxSituacao[X].media} \nSituação: ${auxSituacao[X].situacao}\n_________________________________________\n`;

    }

    alert(`Media da sala: ${media}\n${Menssagem}`);
}
