// kultus hjem scripts
// all rights served 2018
/*------------------------------start tid og dato------------------------------*/
function myFunction() {
	var id = document.getElementById("id").value;
    var ateksten = document.getElementById("ateksten").value;
    var href = document.getElementById("href").value;
    var h1teksten = document.getElementById("h1teksten").value;
    var ptekstenover = document.getElementById("ptekstenover").value;
    var ptekstenunder = document.getElementById("ptekstenunder").value;

    nyboks(id, ateksten, href, h1teksten, ptekstenover, ptekstenunder)
    //document.getElementById("farge").style.color = farge;
}


function nyboks(id, ateksten, href, h1teksten, ptekstenover, ptekstenunder) {
    // lage en ny boks med class="boks" og id="a"
    var divboks = document.createElement("div");
    divboks.setAttribute("class", "boks");
    divboks.setAttribute("id", id);

    // lage en ny h1 med class boks
    var h1 = document.createElement("h1");
    h1.setAttribute("class", "boks");
    var h1tekst = document.createTextNode(" " + h1teksten);
    h1.appendChild(h1tekst);
    divboks.appendChild(h1);

    // lage en ny a med class="boks", href="kenneth2.0.html", target="_blank" og style="padding: 0"
    var a = document.createElement("a");
    a.setAttribute("class", "boks");
    a.setAttribute("href", href);
    a.setAttribute("target", "_blank");
    a.setAttribute("style", "padding: 0");
    a.innerHTML = ateksten;
    h1.insertBefore(a,h1tekst);

    // lage en ny p med class boks
    var p = document.createElement("p");
    p.setAttribute("class", "boks");
    p.innerHTML = ptekstenover + "<br><br>"  + ptekstenunder;
    divboks.appendChild(p);



    // finne bytte-rekkefølge diven og plassere boksen før bildet
    var divrekkefølge = document.getElementById("idbytte-rekkefølge");
    var bildet = document.getElementById("bilde");
    divrekkefølge.insertBefore(divboks,bildet);
}

function mangebokser() {
    // nyboks(id, ateksten, href, h1teksten, ptekstenover, ptekstenunder)
    nyboks("b", "Klikk her", "login-side.html", "for å logge inn på Hellerasten siden", "Hellerasten siden er ikke oppe for øyeblikket. ", "Kommer i løpet av våren 2018")
    nyboks("a", "Klikk her", "https://github.com/amudsmud/amudsmud.github.io/releases/download/V0.4.0-beta/Tilfeldig.setegenerator.V0.4.0-beta.exe", "for å laste ned programmet mitt", "Tilfeldig setegenerator®.", "<i> V 0.3.0-beta <br> Sist oppdatert: 24. April 2018 </i>")
    nyboks("a", "Klikk her", "https://github.com/amudsmud/amudsmud.github.io/releases/download/V1.0-beta/SHUMPEXE.EXE", "for å laste ned spillet mitt", "Noen Virus-program vil se på dette som et virus, men det er det ikke.", "<i> V 0.1.0-beta <br> Sist oppdatert: 23. April 2018 </i>")
    nyboks("a", "Klikk her", "kenneth2.0.html", "for å åpne noing's fete sirkler", "Laget til: Noing", "laget av: en random kar")
    nyboks("a", "Klikk her", "noing-fete-klokke.html", "for å åpne noing's fete stoppeklokke", "Laget til: Gymlærern", "laget av: Kenneth Noing")

}

/*
var divboks = document.querySelectorAll("div.boks");
document.getElementById("");
document.getElementsByClassName("")
h1.innerHTML = "bruh";
h1.setAttribute("class", "boks");
divrekkefølge.appendChild(divboks);
*/
