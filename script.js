
function exercicio1() {


    var vetor = new Array(6);
    var vetorpar = new Array();
    var vetorimp = new Array();
    var i = 01, par = 0, imp = 0;
    var pares, impares;

    while (i <= 6) {

        vetor[i] = Number(prompt("Coloque os numeros"));

        i++;

    }
    for (i = 1; i <= vetor.length; i++) {

        if (vetor[i] % 2 == 0) {

            if (pares == null) {

                vetorpar = vetor[i];

            } else {

                pares = pares + " " + vetor[i];

            }

            par++;

        } else {
            if (i >= 2) {

                impares = impares + " " + vetor[i];

            }
            else {
                impares = vetor[i];

            }


            imp++;

        }



    }


    alert("os pares são " + pares + "\n os impares são " + impares + "\ntem " + par + " pares e " + imp + " impares");

}

function exercicio2() {

    var vetor = new Array(7);
    var i = 1, mult2, mult3, mult2_3;
    var m2 = 0, m3 = 0, m2_3 = 0;

    while (i <= 7) {

        vetor[i] = Number(prompt("Coloque os numeros"));

        i++;
    }

    for (i = 1; i <= vetor.length; i++) {

        if (vetor[i] % 2 == 0) {
            if (m2 == 0) {

                mult2 = vetor[i]

            } else {
                mult2 = mult2 + " " + vetor[i];
            }
            m2++;

        } if (vetor[i] % 3 == 0) {

            if (m3 == 0) {

                mult3 = vetor[i]

            } else {
                mult3 = mult3 + " " + vetor[i];
            }
            m3++;

        } if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)) {
            if (m2_3 == 0) {

                mult2_3 = vetor[i]

            } else {
                mult2_3 = mult2_3 + " " + vetor[i];
            }
            m2_3++;


        }

    }

    alert("Os numeros multiplos de 2 são " + mult2 + "\n os numeros multiplos 3 são " + mult3 + "\nos multiplos de 2 e 3 são " + mult2_3);



}

function exercicio4() {

    var vetor = new Array(15);
    var i = 0;
    var posicao, p = 0;

    while (i <= 15) {

        vetor[i] = Number(prompt("Coloque os numeros"));

        i++;
    }
    for (i = 1; i <= vetor.length; i++) {

        if (vetor[i] == 30) {

            if (p == 0) {

                posicao = i + "ª ";
                p++;
            } else {

                posicao = posicao + "" + i + "ª ";
                p++;
            }

        }

    }

    window.alert("As posições são " + posicao);


}

function exercicio5() {

    var logica = new Array(15);
    var linguagem = new Array(10);
    var i = 0;
    var qte = 0;

    while (i <= 5) {

        logica[i] = Number(prompt("Logica"));

        i++;
    }

    i = 0;

    while (i <= 5) {

        linguagem[i] = Number(prompt("Linguagem da Programação"));

        i++;

    }

    for (i = 1; i <= logica.length; i++) {

        if (i <= 10) {
        
            if (logica[i] == linguagem[i]) {

                qte++;

            }
        }

    }

    alert("A quantidade que cursa o dois é de " + qte);

}