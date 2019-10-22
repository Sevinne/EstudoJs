function root(){
        var idade = [];
        var matriz = [];
        var prova = new Array(1,2,3,4,5);
    
    
        for(var i = 0; i < 8; i++){
            idade[i] = Number(prompt("Digite a Idade do Aluno: "));
        }
        for (i = 0; i < 8; i++){
            matriz[i] = [];
            for(var j = 0; j < prova.length; j++){
                matriz[i][j] = Number(prompt(`Digite a Nota das Provas:  `));
            }
        }
    }