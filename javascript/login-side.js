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
    document.cookie = "gammelbruker=nei; expires=Thu, 14 jun 2018 12:00:00 UTC";
}

function checkCookie() {
    var gbruker = getCookie("gammelbruker");
    console.log(gbruker);

    if (gbruker == "nei") {
        console.log("du ikke har vært her før");
    }

    else {
        lagcookie();
        console.log("d har vært her før");

    }
}


$(document).ready(function(){
    $('#brukernavn-input, #passord-input').keypress(function(e){
      if(e.keyCode==13)
      $('#knapp').click();
    });
});
