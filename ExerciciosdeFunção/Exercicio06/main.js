function root() {

    var number = Array();
    var evenNumber = Array();
    RegisterBranch(number);
}

function RegisterBranch(number) {

    for (var i = 0; i <= 15; i++) {

        number[i] = Math.random(1,100);

    }

}
function evenNumberBranch(number) {
    
    for (var i = 0; i <= number.length; i++) {

        if (number[i] % 2 == 0){


            evenNumber[i] = number[i];
            

        }else{

            continue;

        }


    }


}
