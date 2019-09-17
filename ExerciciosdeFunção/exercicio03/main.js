function root() {

    var stringSt = prompt("Put the fist string");
    var stringNd = prompt("Put the second string");

    VereficationBranch(stringSt, stringNd);

}
function VereficationBranch(stringSt, stringNd) {

    if (stringSt.length > stringNd.length) {

        var AnyVar = stringSt.length;

    } else if (stringSt.length < stringNd.length) {

        var AnyVar = stringNd.length;

    } else {
        var AnyVar = stringNd.length = stringSt.length;
    }
    var Any = 0;
    for (var i = 0; i <= AnyVar; i++) {

        if (stringSt[i] == stringNd[i]) {

            var AnyVer = 0;

            Any += 1;

        } else {

            alert(`The caracters diffent is ${stringSt[i]} and ${stringNd[i]} `)

            break;

            location.reload();
        }

    }
    if (Any >= i) {

        alert(AnyVer);

        location.reload();
    }


}







