function exercicio3() {

    var codigo = new Array(3);
    var quantidade = new Array(3);
    var pedido = new Array();
    var i = 0, co = 0, estoque;


    while (i <= 3) {

        codigo[i] = prompt("Coloque o codigo do produto");

        quantidade[i] = Number(prompt("Coloque a sua quantidade"));

        i++;

    }

    i = 1;

    while (i > 0) {


        if (i == 1) {

            pedido[i] = prompt("CLIENTE");

        } if (i == 2) {

            pedido[i] = prompt("Coloque o codigo do produto");

        } if (i == 3) {

            pedido[i] = Number(prompt("Coloque o quantidade do produto"));

            pedido[3] = 0;
        }
        i++;

        if (pedido[0] == 0) {

            break;
        }

    }

    for (i = 0; i <= codigo.length; i++) {

        if (pedido[1] != codigo[i]) {

            co++;

        }
        if (co >= 3) {

            alert("Codigo inexistente")

        } else {

            if (pedido[2] < quantidade[i]) {

                alert("Nao temos estoque suficiente dessa mercadoria");


            } else {

                quantidade[i] = quantidade[i] - pedido[2];

            }
        }
    }


    for (i = 0; i <= codigo.length; i++) {

        estoque = " " + codigo[i] + " " + quantidade[i] + "\n";

    }
    
    alert(estoque);

}

function exercicio6(){

    var totalvendas = Array (2);
    var percentual = Array (2);
    var nome = Array(2);
    var salarioto = Array(2);
    var relatorio;
    var i = 0, total, maior=0,menor=999999,posimaior,posimenor;

    while (i <= 2){

        nome[i] = prompt("Coloque o nome")
        totalvendas[i] =Number(prompt ("Coloque o total de vendas"));
        percentual[i] = Number(prompt("Coloque o percentual %"));

        i++;

    }
    for(i=0;i<=nome.length;i++){

        salarioto[i] = totalvendas[i] + (totalvendas[i]*(percentual[i]/100));


    }
    for(i=0;i<nome.length;i++){

        alert("Nome: " + nome[i] + "Salario: R$ " + salarioto[i] +"\n");  
        
        total =Number( total + totalvendas[i]);  
        
        if(salarioto[i] > maior){

            posimaior = i
            menor = salarioto[i];
        }
        if (salarioto[i] < menor){

            posimenor = i;

        }

    }
    
alert ("Total de vendas de todos são de "+ total +"\n O funcionario que vai receber mais é "+ nome[posimaior] + " seu salario é "+salarioto[posimaior]
+ "O funcionario que vai receber menos é "+ nome[posimenor] + " seu salario é "+salarioto[posimenor]);
}