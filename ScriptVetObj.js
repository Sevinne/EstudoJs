function funcao() {
    var i;
    var maior = 0;
    var menor = 0;
    var estoquegeral = 0;
    //criando o objeto
    var objeto = {};
    //criando o vetor
    var vetObjeto = new Array();
    //criando os produtos
    for (i = 0; i < 5; i++) {
        objeto.codigo = Number(prompt("Coloque o codigo "));
        objeto.nome = prompt("Coloque o Nome ");
        objeto.qtde = Number(prompt("Coloque o Quantidade "));
        objeto.preco = Number(prompt("Coloque o preço "));
        vetObjeto[i] = objeto;

        alert("Produto cadastrado");

        //        if (vetObjeto[i].codigo ){

        //        }

    }

    for (i = 0; i < vetObjeto.length; i++) {

        estoquegeral = estoquegeral + vetObjeto[i].qtde;



    }
    alert("Estoque geral é de " + estoquegeral);



}