function root() {

    var radius = parseFloat(prompt("Put the radius"));
    heght = parseFloat(prompt("Put the heght "));
    volumeBranch(radius,heght);
}
function volumeBranch(radius,heght) {

    var volume = Math.PI * (radius**2)*heght;

    alert(`The volume is ${volume}`);


    
}







