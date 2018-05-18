function getCookie(cookienavn) {
    var navn = cookienavn + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var valuel = decodedCookie.split(";");
    for(var i = 0; i < valuel.length; i++) {
        var c = valuel[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(navn) == 0) {
            return c.substring(navn.length, c.length);
        }
    }
    return "";
}



function lagcookie() {
    document.cookie = "gammelbruker=ja; expires=Thu, 19 may 2018 12:00:00 UTC";
}

/*document.cookie = "gammelbruker=nei; expires=Thu, 18 may 2018 12:00:00 UTC";*/

var gamlbruker = "nei";

function checkCookie() {
    var gbruker = getCookie("gammelbruker");
    if (gbruker == "ja") {
        console.log("else if i overlayav funker");
        $(document).ready(function(){
            $("#overlay").toggleClass("opp");
        });
    }
}


function overlayav() {
    console.log("overlayav starter");
    if (gamlbruker == "nei") {
        console.log("SYYYYYYY");
        var Brukernavn = document.getElementById("brukernavn-input").value;
        var Passord = document.getElementById("passord-input").value;

        if (Brukernavn == "Amud" && Passord == "Smud"){
            $(document).ready(function(){
                $("#overlay").toggleClass("opp");
            });
                document.getElementById("overskrift").innerHTML = "Velkommen " + Brukernavn;
                lagcookie();
                console.log(gbruker);
        }

        else{
            var feilmld = document.createElement("h3");
            feilmld.setAttribute("id", "feil");
            feilmld.innerHTML = "Brukernavn eller passord er feil";
            var inputdiv = document.getElementById("input-div")
            var knapp = document.getElementById("knapp")
            inputdiv.insertBefore(feilmld,knapp);
        }
    }
}

$(document).ready(function(){
    $('#brukernavn-input, #passord-input').keypress(function(e){
      if(e.keyCode==13)
      $('#knapp').click();
    });
});







/*
function overlayav() {
    var Brukernavn = document.getElementById("brukernavn-input").value;
    var Passord = document.getElementById("passord-input").value;

    if (Brukernavn == "Amud" && Passord == "Smud"){
        $(document).ready(function(){
            $("#overlay").toggleClass("opp");
        });
            document.getElementById("overskrift").innerHTML = "Velkommen " + Brukernavn;
            document.cookie = "gammelbruker=ja; expires=Thu, 14 jun 2018 12:00:00 UTC";
            var gbruker = getCookie("gammelbruker");
            console.log(gbruker);
    }

    else{
        var feilmld = document.createElement("h3");
        feilmld.setAttribute("id", "feil");
        feilmld.innerHTML = "Brukernavn eller passord er feil";
        var inputdiv = document.getElementById("input-div")
        var knapp = document.getElementById("knapp")
        inputdiv.insertBefore(feilmld,knapp);
    }
}
*/
