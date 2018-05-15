function overlayav() {


    var Brukernavn = document.getElementById("brukernavn-input").value;
    var Passord = document.getElementById("passord-input").value;
    if (Brukernavn == "Amud" && Passord == "Smud"){
        $(document).ready(function(){
            $("#overlay").toggleClass("opp");
        });
            document.getElementById("overskrift").innerHTML = "Velkommen " + Brukernavn;
    }

    else{
        var feilmld = document.createElement("h3");
        feilmld.setAttribute("id", "feil");
        feilmld.innerHTML = "Brukernavn eller passord er feil";
        var inputdiv = document.getElementById("input-div")
        var knapp = document.getElementById("knapp")
        inputdiv.insertBefore(feilmld,knapp);
        /*inputdiv.appendChild(feilmld);*/
    }
}

$(document).ready(function(){
    $('#brukernavn-input, #passord-input').keypress(function(e){
      if(e.keyCode==13)
      $('#knapp').click();
    });
});
