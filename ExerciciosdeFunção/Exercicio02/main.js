function root() {

    var hours = Number(prompt("Put the hours"));
    var minutes = Number(prompt("Put the minutes"));
    var seconds = Number(prompt("Put the seconds"));

    VerificationBranch(minutes, seconds);
    conversionBranch(hours, minutes, seconds);

}

function VerificationBranch(minutes, seconds) {

    if (((minutes < 60) && (minutes > 0)) || ((seconds < 60) && (seconds > 0))) {

        alert("Registered successfuly");

    } else {

        alert("Minutes or seconds are over 60 or it's less than 0");

        location.reload();

    }


}
function conversionBranch(hours, minutes, seconds) {

    var auxHours = hours * 60;
    
    var auxMinutes = (auxHours + minutes) * 60;
    
    var auxEnd = auxMinutes + seconds;

    alert(`The convesion is of ${auxEnd}`);

    location.reload();

}



