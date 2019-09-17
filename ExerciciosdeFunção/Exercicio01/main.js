function root() {

    var number = Number(prompt("Coloque o numero"));
    checkTwing(number);

}

function checkTwing(number) {
    var soma = 0;

    if ((number == 0) || (number == 1)) {

        alert("A soma é : 1")

    } else {

        while (number > 1) {

            soma += number;
            number --;
        }
        alert(`A soma é : ${soma}`)


    }
    location.reload();

}