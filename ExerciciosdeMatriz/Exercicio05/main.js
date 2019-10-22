function root() {

        var mensal = new Array();
        var totalmes = new Array();
        var somanota = 0;
        for (var X = 0; X < 6; X++) {
                mensal[X] = [];

                for (var Y = 0; Y < 4; Y++) {

                        mensal[X][Y] = Number(prompt(`coloque o valor da semana`));

                }

        }
        var somanotames = 0;
        var total = 0
        totalsemana = Array();
        for (var X = 0; X < 6; X++) {

                totalmes[X] = 0

                for (var Y = 0; Y < 4; Y++) {

                        totalmes[X] += mensal[X][Y];
                        
                        total += mensal[X][Y];
                }

        }
        for (var Y = 0; Y < 6; Y++) {
                for (var X = 0; X < 6; X++) {
                        totalsemana[Y] += mensal[X][Y]
                }
        }


        var Menssagem = ""
        for (var X = 0; X < totalmes.length; X++) {

                switch (X) {

                        case 0:

                                Menssagem += `Mes: Janeiro \nTotal do Mes: ${totalmes[X]} \n `;

                                break;
                        case 1:
                                Menssagem += `Mes: Fevereiro \nTotal do Mes: ${totalmes[X]} \n `;

                                break;
                        case 2:
                                Menssagem += `Mes: Março \nTotal do Mes: ${totalmes[X]} \n `;

                                break;
                        case 3:
                                Menssagem += `Mes: Abril \nTotal do Mes: ${totalmes[X]} \n `;

                                break;
                        case 4:
                                Menssagem += `Mes: Maio \nTotal do Mes: ${totalmes[X]} \n `;

                                break;
                        case 5:
                                Menssagem += `Mes: Junho \nTotal do Mes: ${totalmes[X]} \n`;

                                break;
                        case 6:
                                Menssagem += `Mes: Julho \nTotal do Mes: ${totalmes[X]} \n `;

                                break;
                        case 7:
                                Menssagem += `Mes: agosto \nTotal do Mes: ${totalmes[X]} \n`;

                                break;
                        case 8:
                                Menssagem += `Mes: Setembro \nTotal do Mes: ${totalmes[X]} \n `;

                                break;
                        case 9:
                                Menssagem += `Mes: Outubro \nTotal do Mes: ${totalmes[X]}  \n`;

                                break;
                        case 10:
                                Menssagem += `Mes: Novembro \nTotal do Mes: ${totalmes[X]}  \n`;

                                break;
                        case 11:
                                Menssagem += `Mes: Dezembro \nTotal do Mes: ${totalmes[X]}  \n`;

                                break;

                }
                segundamenssagem = "";
                for (var i = 0; i < totalsemana.length; i++) {

                        if (i == 0) {

                                segundamenssagem += `1ª semana ${totalsemana[X]}`

                        } else {
                                segundamenssagem += `${X + 1}ª semana ${totalsemana[X]}`

                        }

                }

        }

        alert(`Relatorio Anual \nTotal do Ano: ${total} \n${Menssagem} \n${segundamenssagem}`);
}
