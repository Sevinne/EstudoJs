function objetos() {
    var vet = [];
    var lista = "";
    for (var i = 0; i < 2; i++) {
        var objetos = {};
        objetos.codigo = Number(prompt("Digite o codigo"));
        objetos.descricao = prompt("Digite a descrição");
        objetos.quantidade = Number(prompt("Digite a quantidade"));
        objetos.preco = Number(prompt("Digite o preço"));

        for (var j = 0; j < vet.length; j++) {
            if (objetos.codigo < vet[j].codigo) {
                vet.splice(j, 0, objetos);
                alert("Adicionado com sucesso");
                break;
            }
        }
        if (j == vet.length) {
            vet.push(objetos);
            alert("Adicionado com sucesso");
        }
    }
    var cod = Number(prompt("Infome o codigo"))
    for (var i = 0; i < 2; i++) {
        if (cod == vet[i].codigo) {
            vet[i].descricao = prompt("Digite a descrição");
            vet[i].quantidade = Number(prompt("Digite a quantidade"));
            vet[i].preco = Number(prompt("Digite o preço"));
            break;
        }
    }
    if (i == 5) {
        alert("Produto não existe")
    }
    for (i = 0; i < vet.length; i++) {
        alert(vet[i].codigo + " " + vet[i].descricao + " " + vet[i].preco + " " + vet[i].quantidade);
    }
    for (i = 0; i < vet.length; i++)
        if (vet[i].quantidade < 5) {
            lista += ("\n Produto com inferior a 5 é " + vet[i].descricao);
        }
    alert(lista)

}