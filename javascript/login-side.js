function overlayav() {


    var Brukernavn = document.getElementById("brukernavn-input").value;
    var Passord = document.getElementById("passord-input").value;
    if (Brukernavn == "Amud" && Passord == "Smud"){
            document.getElementById("overlay").style.display = "none";
    }
}

$(document).ready(function(){
    $('#brukernavn-input, #passord-input').keypress(function(e){
      if(e.keyCode==13)
      $('#knapp').click();
    });
});
