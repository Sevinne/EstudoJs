function root() {

    var matriz = new Array();

    quantElementos = 0;

    for (var i = 0; i < 3; i++) {
        matriz[i] =  [];
        for (var j = 0; j < 5; j++) {

            matriz[i][j] = Number(prompt(`Coloque o numero`))



        }

    }
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 5; j++) {

            if ((matriz[i][j] >= 15) && (matriz[i][j] <= 20)) {

                quantElementos++;

            }
        }
        
    }

    alert(`A quantidade de elementos entre 15 e 20: ${quantElementos}`);
}
