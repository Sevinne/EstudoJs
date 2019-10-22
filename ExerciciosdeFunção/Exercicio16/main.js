function root() {

    var number = Array();
    var evenNumber = Array();
    alert("ronei")
    RegisterBranch(number);
    alert(primeNumbersBranch(number));
}

function RegisterBranch(number) {

    for (var i = 0; i <= 100; i++) {

        number[i] = Math.floor(Math.random() * 100);

    }

}
function primeNumbersBranch(number) {

    var prime = "";
    j = 0;

    for (var i = 0; i <= number.length; i++) {

        if ((number[i] % number[i] == 0) ) {
            if ((number[i] % 2 != 0)&&(number[i] % 3 != 0) && (number[i] % 4 != 0) && (number[i] % 5 != 0) && (number[i] % 6 != 0) &&
                (number[i] % 7 != 0) && (number[i] % 8 != 0) && (number[i] % 8 != 0) && (number[i] % 9 != 0)) {


                prime = `${number[i]},`;

            }


        }
        return prime
    }
}