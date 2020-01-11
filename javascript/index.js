// Smudi hjem scripts
// All Rights Reserved 2018
/*------------------------------start tid og dato------------------------------*/
function lagmanuellboks() {
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

    // lage en ny a med class="boks", href="kenneth.html", target="_blank" og style="padding: 0"
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
	// id bestememr rekkefølge på boksene. fra  a - d på telefon-view
	nyboks("a", "Klikk her", "booster/booster.html", "for å gå til nye spillet mitt: BOOSTER!🚀", "Booster®", "<i> V 1.1 <br> Sist oppdatert: 11. Januar 2020 </i>")
    nyboks("a", "Klikk her", "https://github.com/amudsmud/amudsmud.github.io/releases/download/V0.4.0-beta/Tilfeldig.setegenerator.V0.4.0-beta.exe", "for å laste ned programmet mitt", "Tilfeldig setegenerator®.", "<i> V 0.3.0-beta <br> Sist oppdatert: 24. April 2018 </i>")
    nyboks("a", "Klikk her", "https://github.com/amudsmud/amudsmud.github.io/releases/download/V1.0-beta/SHUMPEXE.EXE", "for å laste ned spillet mitt", "Noen Virus-program vil se på dette som et virus, men det er det ikke.", "<i> V 0.1.0-beta <br> Sist oppdatert: 23. April 2018 </i>")
    nyboks("a", "Klikk her", "kenneth.html", "for å åpne Noing's fete sirkler", "Laget til: Noing", "Laget av: en random kar")
	nyboks("a", "Klikk her", "noings-fete-klokke.html", "for å åpne Noing's fete stoppeklokke", "Laget til: Gymlærern", "laget av: Kenneth Noing")
	nyboks("a", "Klikk her", "spill/car-town.html", "for å åpne Car Town", "", "<i> V 0.9-beta <br> Sist oppdatert: 13. November 2018 </i>")
	nyboks("a", "Klikk her", "key-generator.html", "for å åpne encryption siden", "Encrypt et ord", "eller decrypt en kode")
	nyboks("a", "Klikk her", "login-side.html", "for å logge inn på Hellerasten siden", "Her kan du logge inn for å laste ned utfylt klassekart over klassen.")
}

/*______________new design alert start______________*/
/*
divv = document.createElement("div");
divv.innerHTML = "New design <br> under development <br>";
divv.setAttribute("id", "divv");;
document.body.appendChild(divv);

divvknapp = document.createElement("button");
divvknapp.innerHTML = "OK";
divvknapp.setAttribute("id", "divvknapp");
divvknapp.setAttribute("onclick", "divv.style.display = 'none';");
divv.appendChild(divvknapp);
*/
/*______________new design alert slutt______________*/
