function root() {

    var number = Array();
    var evenNumber = Array();
    alert("ronei")
    RegisterBranch(number);
    evenNumberBranch(number, evenNumber);


}

function RegisterBranch(number) {

    for (var i = 0; i <= 15; i++) {

        number[i] = Number(prompt("Coloque um numero"));

    }

}
function evenNumberBranch(number, evenNumber) {

    var even = "";
    j = 0;
    for (var i = 0; i <= number.length; i++) {

        if (number[i] % 2 == 0) {

            evenNumber[j] = number[i];
            
            j++;

        } else {

            continue;

        }


    }
    for (var i = 0; i < evenNumber.length; i++) {

        even += `${evenNumber[i]},`;

    }
    alert(even)



}
