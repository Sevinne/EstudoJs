function funcao01() {
    var Vendas = Array();
    var vendedor = Array();
    var opcao, venpcod = 0, Auxvendas = 0, auxvendedor, auxvendaspmes;
    var i = 0;



    do {
        opcao = Number(prompt(
            "                Opções                  "
            + "\n1 - Cadastro de vendedor"
            + "\n2 - cadastro de vendas"
            + "\n3 - Vendas mensais do fucionario"
            + "\n4 - Consultar total de vendas do funcionario"
            + "\n5 - Mostra o codigo do que mais vendeu do mes"
            + "\n6 - Mês com mais vendas"
            + "\n7 - Finalizar "));

        switch (opcao) {

            case 1:

                cadastraVendedor(vendedor);

                break;


            case 02:

                cadastraVendas(vendedor, Vendas);

                break;


            case 03:

                consultaVenda(Vendas);


                break;

            case 04:

                consultaTotalVendas(Vendas);

                break;
            case 05:

                calcularMaisVendeu(Vendas);

                break;

            case 06:

                calculaMesMaisVendeu(Vendas);

                break;

            case 07:
                alert("Obrigado pela preferencia");

                break;

            default:

                alert("Opção invalida");

                break;

        }




    } while (opcao != 7);

}

function cadastraVendedor(vendedor) {
    

    for (i = 0; i <= 4; i++) {

        var informacao = {};

        informacao.codigo = Number(prompt("Coloque o codigo"));
        informacao.nome = prompt("Coloque o nome");

        vendedor[i] = informacao;

        if ((i > 0) && (vendedor[i].codigo != vendedor[i - 1].codigo)) {

            alert("Cadastrado com sucesso");

        } else if (i != 0) {

            alert("Codigo ja cadastrado");

            i--;

        } else if (i == 0) {

            alert("Cadastrado com sucesso");

        }

    }


}
function cadastraVendas(vendedor, Vendas) {


    var cola = funCola(vendedor);

    do {

        var informacao = {};

        informacao.codven = Number(prompt(cola + "\nColoque o codigo do vendedor"));
        informacao.mes = Number(prompt("Coloque o mes"));
        informacao.Vendas = Number(prompt("Coloque a vendas"));

        Vendas[i] = informacao;

        if ((i > 0) && (Vendas[i].codven == Vendas[i - 1].codven) && (Vendas[i].mes == Vendas[i - 1].mes)) {

            alert("Não pode ter um vendendor com duas vendas no mesmo mes");
            i--;

        } else {
            alert("Cadastrado com sucesso");
            i++;

        }

        var Fin = Number(prompt("Terminou de cadastrar as vendas 0 - Sim 1 - Não"));


    } while (Fin != 0);

}
function consultaVenda(Vendas) {

    var cola = funCola(vendedor);

    var codver = Number(prompt("Coloque o codigo\n"+cola));
    var codmes = Number(prompt("Coloque o mes"));

    for (i = 0; i < Vendas.length; i++) {

        if ((codver == Vendas[i].codven) && (codmes == Vendas[i].mes)) {

            venpcod = venpcod + Vendas[i].Vendas;

        }


    }
    alert("Vendas feita pelo " + codver + " no mes " + codmes + " : " + venpcod);
}
function consultaTotalVendas(Vendas) {
    var cola = funCola(vendedor);
    var codver = Number(prompt("Coloque o codigo\n"+cola));

    for (i = 0; i <= Vendas.length; i++) {

        if (codver == Vendas[i].codven) {

            venpcod += Vendas[i].Vendas;

        }


    }
    alert("Vendas feita pelo " + codver + " : " + venpcod);

}
function calcularMaisVendeu(Vendas) {

    var codmes = Number(prompt("Coloque o mes"));

    var Auxvendas = Vendas[0].Vendas;
    var auxvendedor;

    for (i = 0; i < Vendas.length; i++) {

        if ((codmes == Vendas[i].mes) && (Auxvendas <= Vendas[i].Vendas)) {

            Auxvendas = Vendas[i].codven;

            auxvendedor = Vendas[i].codven;

        }


    }
    alert("O vendedor que vendeu mais: " + auxvendedor);

}
function calculaMesMaisVendeu(Vendas) {

    var messes = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

    for (i = 0; i < Vendas.length; i++) {

        messes[Vendas[i].mes - 1] = messes[Vendas[i].mes - 1] + Vendas[i].valor;

    }

    var maior = 0;
    var mesMaior = 0;


    for (i = 0; i < messes.length; i++) {

        maior = messes[i];
        mesMaior = i + 1;

    }
}
function funCola(vendedor){

    var cola = "";

    for (i = 0; i < vendedor.length; i++) {

        cola += vendedor[i].codigo + " - " + vendedor[i].nome + "\n";

    }

    return cola;

}