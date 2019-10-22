function root() {

    var matriz = new Array();

    for (var i = 0; i < 2; i++) {
        matriz[i] = [];
        for (var j = 0; j < 4; j++) {

            matriz[i][j] = Number(prompt(`Coloque o numero`));

        }

    }
    var somapar = 0, quant = somapar, quantElementos = somapar;
    for (var i = 0; i < 2; i++) {

        for (var j = 0; j < 4; j++) {

            if ((matriz[i][j] >= 12) && (matriz[i][j] <= 20)) {

                quantElementos++;

            }
            if ((matriz[i][j] % 2) == 0) {

                somapar += matriz[i][j];
                quant++;

            }
        }

    }
    var media = somapar / quant;
    alert(`A quantidade de elementos entre 12 e 20: ${quantElementos}\nA media de pares: ${media.toFixed(2)}`);
}
