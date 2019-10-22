function principal() {
        // guarda os alunos
        var alunos = []
        entradaAlunos(alunos);
        // guarda as disciplinas
        var disc = []
        entradaDisciplinas(alunos, disc);
        // entrada da qtde de provas
        var provas = []
        entradaProvas(provas, alunos, disc);
        //Resolvendo o item 1 do exercicio
        item1(disc, provas, alunos);
        //Resolvendo o item 2 do exercicio
        item2(disc,provas);
}
function entradaAlunos(alunos) {

        // guarda a qtde de alunos
        var qtdAlu = Number(prompt("Qts alunos"))
        // guarda a qtde de disciplinas
        var qtdDis = Number(prompt("Qts disciplinas"))
        // entrada dos alunos

        for (var i = 0; i < qtdAlu; i++) {
                var obj = {}

                obj.codigo = Number(prompt("Informe codigo do aluno"))

                obj.idade = Number(prompt("Informe idade do aluno"))

                alunos.push(obj)

        }

}
function entradaDisciplinas(disc) {
        // entrada das disciplinas

        for (var j = 0; j < qtdDis; j++) {

                disc.push(Number(prompt("Informe codigo da disciplina")))

        }
}

function entradaProvas(alunos, provas, disc) {

        for (var i = 0; i < alunos.lenght; i++) {
                provas[i] = [] // prepara uma linha da matriz
                for (var j = 0; j < disc.lenght; j++) {
                        provas[i][j] = Number(prompt(`Qtde provas: ${alunos[i].codigo} - ${disc[j]}`))
                }
        }
}
// item 1
function item1(disc, provas, alunos) {
        var discProc = Number(prompt("Informe o codigo da disciplina"))
        var j = disc.indexOf(discProc)
        if (j == -1) {
                alert("Disciplina não existe")
        }
        else {
                var qtde = 0
                for (var i = 0; i < alunos.lenght; i++) {
                        if (provas[i][j] > 2) {
                                if ((alunos[i].idade >= 18) && (alunos[i].idade <= 25)) {
                                        qtde++
                                }
                        }
                }
                alert(`Resposta do item 1  ${qtde}`)
        }
}

// item 2
function item2(disc,provas) {
        var discProc = Number(prompt("Informe o codigo da disciplina"))
        // Indice do vetor da disciplina procurada
        var j = disc.indexOf(discProc)
        // verifica se a disciplina existe
        if (j == -1) {
                alert("Disciplina não existe")
        }
        else {
                var resp = []
                for (var i = 0; i < alunos.lenght; i++) { // saio procurando
                        if (provas[i][j] < 3) {
                                resp.push(alunos[i].codigo)
                        }
                }
                alert(resp)
        }
}
