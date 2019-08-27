function funcao02() {

    var vethabitantes = Array();
    var i;
    var media, salariotodo = 0;
    var mediafilhos, filhostodo = 0;
    var maior;
    var qtemullher = 0;
    var s;

    for (i = 0; i <= 3; i++) {
        var informacao = {};
        informacao.salario = Number(prompt("Coloque o salario do habitante"));
        informacao.idade = Number(prompt("Coloque a idade do habitante"));
        informacao.nfilhos = Number(prompt("Coloque a quantidade de filhos do habitante"));
        informacao.sexo = prompt("Coloque o sexo do habitante com 'F' para feminino e 'M' para masculino ");
        vethabitantes.push(informacao);

    }
    alert(vethabitantes);

    for (i = 0; i <= vethabitantes.length; i++) {

        //salariotodo = salariotodo + vethabitantes[i].salario;
        filhostodo = filhostodo + vethabitantes[i].nfilhos;

        maior = vethabitantes[i].salario;

        if (vethabitantes[i].salario >= maior) {

            maior = vethabitantes[i].salario;

        }
        s = vethabitantes[i].sexo;

        if ((s.toUpperCase() == "F") && (vethabitantes[i].salario > 1000)) {

            qtemullher++;

        }   

    }
    media = salariotodo / vethabitantes.length;
    mediafilhos = filhostodo / vethabitantes.length;
    var percentual = (qtemullher / vethabitantes.length) * 100;
    alert("A media do salario: " + media + "\n A media de filhos: " + mediafilhos +
        "\n percentual de mulheres: " + percentual)
}