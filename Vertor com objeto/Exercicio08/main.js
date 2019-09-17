function script() {

    var dados = Array();

    var ttnumeroacid = 0;

    cadastroEstado(dados, ttnumeroacid);

    verificacaoMaiorMenor(dados);

    resultado(dados, ttnumeroacid);
}
function cadastroEstado(dados, ttnumeroacid) {

    for (var i = 0; i <= 2; i++) {

        var info = {};

        info.nome_est = prompt("Coloque o nome do estado");
        info.numb_veic = Number(prompt("Numeros de carros que circulava em 2012 em " + info.nome_est));
        info.numb_acid = Number(prompt("Numero de acidentes em 2012"));
        auxindice = (info.numb_acid / info.numb_veic) * 100;
        info.indice = auxindice.toFixed() * 100;
        dados[i] = info;

        ttnumeroacid += dados[i].numb_acid;
    }

}
function verificacaoMaiorMenor(dados) {
    var auxmaior, auxmenor;
    var auxnomemaior, auxnomemenor;

    auxmaior = dados[0].indice;
    auxmenor = dados[0].indice;

    for (var i = 0; i < dados.length; i++) {

        if (auxmaior <= dados[i].indice) {

            auxmaior = dados[i].indice;

            auxnomemaior = dados[i].nome_est;

        }
        if (auxmenor >= dados[i].indice) {

            auxmenor = dados[i].indice;

            auxnomemenor = dados[i].nome_est;
        }
    }
    alert("Reultados");
    alert(`Maior indice de acidente\n ${auxnomemaior} : ${auxmaior} \nMenor indice de acidente\n ${auxnomemenor} : ${auxmenor}`);
}
function resultado(dados) {
    var total = 0;
    for (var i = 0; i < dados.length; i++) {

        total += dados[i].numb_veic;

    }

    var resulpercentual = "";

    for (var i = 0; i < dados.length; i++) {

        var pencentual = (dados[i].numb_veic / total) * 100;
        var pencentualToFixed = pencentual.toFixed();

        resulpercentual += `${dados[i].nome_est} : ${pencentualToFixed} %\n`;

    }

    alert(`Percentual de cada estado\n ${resulpercentual}`);

    var totalAcidentes = 0;
    resulMedia = 0;

    for (var i = 0; i < dados.length; i++) {

        totalAcidentes += dados[i].numb_acid;

    }
    for (var i = 0; i < dados.length; i++) {

        var media = (dados[i].numb_acid / totalAcidentes) * 100;

        var mediaToFixed = media.toFixed();

        resulMedia += `${dados[i].nome_est} : ${mediaToFixed} %\n`;

    }
    alert(`Media de cada estado\n" + ${resulMedia}`);

}
