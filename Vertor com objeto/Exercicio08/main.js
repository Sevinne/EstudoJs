function script() {

    var dados = Array();
    var ttnumeroacid = 0;
    for(var i= 0;i<=5;i++){

        var info = {};

        info.nome_est = prompt("Coloque o nome do estado");
        info.numb_veic = Number(prompt("Numeros de carros que circulava em 2012 em "+info.nome_est));
        info.numb_acid = Number(prompt("Numero de acidentes em 2012"));

        dados[i] = info ;

        ttnumeroacid += dados[i].numb_acid;
    }

    var auxmaior, auxmenor;
    
    var auxnomemaior,auxnomemenor;
    
    var auxnome = dados[0].nome_est;

    var resultados = Array();

    var resulpercentual = "";
    var resulmedia = "";

    auxmaior = dados[0].numb_acid;
    auxmenor = dados[0].numb_acid;
    

    for(var i = 0; i < dados.length; i++){

        if (auxmaior <= dados[i].numb_acid){

                auxmaior = dados[i].numb_acid;

                auxnomemaior = dados[i].nome_est;

        }
        if (auxmenor >= dados[i].numb_acid){

            auxmenor = dados[i].numb_acid;

            auxnomemenor = dados[i].nome_est;
        }

        var info = {};

        info.nome_est = dados[i].nome_est;
        var calculo = (dados[i].numb_acid/ttnumeroacid)*100;
        info.pencentual = calculo.toFixed(2) + "%"
        var calculo = dados[i].numb_acid / dados[i].numb_veic
        info.media = calculo.toFixed(2);

        resultados[i] = info; 

    }

    for(var i = 0; i < dados.length; i++){

        resulpercentual += resultados[i].nome_est + ": " +resultados[i].pencentual+"\n";
        resulmedia += resultados[i].nome_est+": "+resultados[i].media+"\n";

    }

    alert("Reultados");
    alert("Maior indice de acidente\n"+auxnomemaior+": "+auxmaior+
        "\nMenor indice de acidente\n"+auxnomemenor +": "+auxmenor);

        alert("Percentual de cada estado\n"+resulpercentual);
        alert("Media de cada estado\n"+resulmedia);





}