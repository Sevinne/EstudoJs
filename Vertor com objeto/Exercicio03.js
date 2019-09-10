function funcao03() {

    var habitantes = Array(3);
    var mediaid, somatid = 0, qteC = 0, maior, qteF = 0, percentual;
    var i, percentualHo, qteHomem = 0;
    var sexo;
    for (i = 0; i <= 3; i++) {
        var informacacao = {};
        informacacao.sexo = prompt("Coloque o sexo 'F' - Feminino e 'M'-Masculino");
        informacacao.altura = Number(prompt("Coloque a altura"));
        informacacao.idade = Number(prompt("Coloque a idade"));
        informacacao.C_olhos = prompt("Coloque a cor  'A' - azuis 'V'-verdes 'C'- Castanho");
        habitantes[i] = informacacao;

    }
    for (i = 0; i <= 3; i++) {

    alert(habitantes[i].sexo);
    alert(habitantes[i].altura);
    alert(habitantes[i].idade);
    alert(habitantes[i].C_olhos);
    }
    for (i = 0; i <= 3; i++) {

        var olhos = habitantes[i].C_olhos;

        if ((olhos.toUpperCase() == "C") && (habitantes[i].altura > 1.6)) {

            somatid = somatid + habitantes[i].altura;

            qteC++;

        }
        maior = habitantes[i].idade;

        if (maior <= habitantes[i].idade) {

            maior = habitantes[i].idade;

        }
        sexo = habitantes[i].sexo;

        if (((sexo.toUpperCase() == "F") && ((habitantes[i].idade >= 20) && (habitantes[i].idade <= 45))) ||
            (olhos.toUpperCase() == "V") && (habitantes[i].altura < 1.7)) {

            qteF++;

        }
        if (sexo.toUpperCase() == "M") {

            qteHomem++;

        }

    }
    percentual = (qteHomem / habitantes.length) * 100;
    mediaid = somatid / 3;

    alert("A media de olhos Castanho e > 1.6: " + mediaid + "\n Maior idade: " + maior + "\n Mulher entre 20 e 45 ou olhos Verdes e altura > 1.7: " + qteF + "\npercentual de homens: " + percentual)
}