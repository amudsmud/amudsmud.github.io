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

function lagcookie(cookievalue) {
    var idag = new Date();
    idag.setTime(idag.getTime() + (7*24*60*60*1000+7200000));/*7 står for hvor mange dager, +7200000 for å legge til 2 timer*/
    console.log(idag.toGMTString());
    var utloper = "expires=" + idag.toGMTString();
    document.cookie = "gammelbruker=" + cookievalue + ";" + utloper + "";
}

function loggut() {
    document.cookie = "gammelbruker=expirenu; expires=mon, 01 january 1970 12:00:00 UTC";
    location.reload();
}

/*document.cookie = "gammelbruker=nei; expires=Thu, 18 may 2018 12:00:00 UTC";*/

function nyboks(h1teksten, pteksten) {
    // få bottom-margin på overskrift til å bli 80px
    var overskrift = document.getElementById("overskrift").style.marginBottom = "80px";
    // lage en ny boks med class="hovedvindu" og id="a"
    var divboks = document.createElement("div");
    divboks.setAttribute("class", "hovedvindu");

    // lage en ny h1 med class boks
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "hovedvindu-overskrift");
    h1.innerHTML = h1teksten;
    divboks.appendChild(h1);

    // lage en ny h1 med id hovedvindu-tekst
    var p = document.createElement("p");
    p.setAttribute("id", "hovedvindu-tekst");
    p.innerHTML = pteksten;
    divboks.appendChild(p);

    // lage en ny button med id knapp
    var knapp = document.createElement("button");
    knapp.setAttribute("id", "loggut-knapp");
    knapp.setAttribute("onclick", "loggut()");
    knapp.innerHTML = "Logg ut";
    divboks.appendChild(knapp);

    // plassere divboksen i conatineren
    var container = document.getElementById("container");
    container.appendChild(divboks);
}


function sjekkcookie() {
    var gbruker = getCookie("gammelbruker");
    console.log(gbruker);
    if (gbruker == "Amud") {
        console.log("gbruker er ja");
        $(document).ready(function(){
            $("#overlay").toggleClass("opp");
        });
        document.getElementById("overskrift").innerHTML = "Velkommen " + gbruker;
        nyboks("Hallo igjen, Amud", '');
    }
    if (gbruker == "10B") {
        console.log("gbruker er ja");
        $(document).ready(function(){
            $("#overlay").toggleClass("opp");
        });
        document.getElementById("overskrift").innerHTML = "Velkommen " + gbruker;
        nyboks("Hallo igjen, 10B", 'Her kan du laste ned "Tilfeldig setegenerator" programmet som jeg har utviklet. <br><br> For å starte å bruke programmet mitt, åpner du .exe filen og venter til programmet åpner seg. Deretter velger du 10B som klasse. Programmet tegner da opp et klassekart med samme oppstilling som det i vårt klasserom. elevenes navn blir tilfeldig skrevet i ett av pultene der eleven skal sitte. <br><br> Denne som ligger her er laget spessielt til 10B med alle navene ferdig skrevet inn i programmet.');
    }
}




var gamlbruker = "nei";

function overlayav() {
    console.log("overlayav starter");
    if (gamlbruker == "nei") {
        var Brukernavn = document.getElementById("brukernavn-input").value;
        var Passord = document.getElementById("passord-input").value;

        if (Brukernavn == "Amud" && Passord == "Smud"){
            $(document).ready(function(){
                $("#overlay").toggleClass("opp");
            });
                document.getElementById("overskrift").innerHTML = "Velkommen " + Brukernavn;
                lagcookie("Amud");
                nyboks("Hallo Amud", '');
        }

        else if (Brukernavn == "h" && Passord == "1"){
            $(document).ready(function(){
                $("#overlay").toggleClass("opp");
            });
                document.getElementById("overskrift").innerHTML = "Velkommen 10B";
                lagcookie("10B");
                nyboks("Hallo 10B", 'Her kan du laste ned "Tilfeldig setegenerator" programmet som jeg har utviklet. <br><br> For å starte å bruke programmet mitt, åpner du .exe filen og venter til programmet åpner seg. Deretter velger du 10B som klasse. Programmet tegner da opp et klassekart med samme oppstilling som det i vårt klasserom. elevenes navn blir tilfeldig skrevet i ett av pultene der eleven skal sitte. <br><br> Denne som ligger her er laget spessielt til 10B med alle navene ferdig skrevet inn i programmet.');
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
    $("#brukernavn-input, #passord-input").keypress(function(e){
      if(e.keyCode==13)
      $("#knapp").click();
    });
});


