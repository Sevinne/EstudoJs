function root() {

    var radius = parseFloat(prompt("Put the radius"));

        volumeBranch(radius);
}
function volumeBranch(radius) {

    var volume = (4*Math.PI *Math.pow(radius,3))/3;

    alert(`The volume is ${volume.toFixed(2)}`);


    
}







