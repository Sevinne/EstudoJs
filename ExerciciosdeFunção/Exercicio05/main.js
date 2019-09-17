function root() {

    var number = Number(prompt("Put the a number"));

    verificationBranch(number);

}

function verificationBranch(number) {

    if (number > 0) {

        alert("The number is positive");

    } else {

        alert("The number is negative");

    }
    location.reload();
}







