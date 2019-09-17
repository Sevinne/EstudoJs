function root() {

    var number = Number(prompt("Put the a number"));

    var situation = verificationBranch(number);

    alert(situation);   

}

function verificationBranch(number) {

    return (number > 0) ? "The number is positive" : "The number is negative"
    
}







