// Smudi scripts
// all rights served 2018
/*------------------------------start tid og dato------------------------------*/




/* Sette Dagens dato */
var dato = new Date("April 27, 2018");
document.getElementById("dagensDato").innerHTML = dato.getDate() +'.'+ (dato.getMonth()+1) +'.'+ dato.getFullYear();

/* Sette klokkeslett  ("April 20, 2018 17:23:00") akkurat n� s� finner den deagens klokkelsett men kan gj�re s�nn at jeg skriver det selv siden det er "sist oppdatert" */
var klokkeslett = new Date("April 20, 2018 17:15:00");
document.getElementById("klokkeslett").innerHTML = klokkeslett.getHours() +':'+ klokkeslett.getMinutes();



/* Hvis minutter er mindre en 10, vis en 0 foran minuttene */
if ( klokkeslett.getMinutes() < 10) {
document.getElementById("klokkeslett").innerHTML = klokkeslett.getHours() +':0'+ klokkeslett.getMinutes();
}

/* Hvis timer er mindre en 10, vis en 0 foran timene */
if ( klokkeslett.getHours() < 10) {
document.getElementById("klokkeslett").innerHTML = '0' + klokkeslett.getHours() +':'+ klokkeslett.getMinutes();
}

/* Hvis b�de timer og minutter er mindre en 10, vis en 0 foran begge */
if ( klokkeslett.getHours() && klokkeslett.getMinutes() < 10) {
document.getElementById("klokkeslett").innerHTML = '0' + klokkeslett.getHours() +':0'+ klokkeslett.getMinutes();
}

/* Hvis timer er mer enn 10 og minutter er mindre enn 10 */
if ( klokkeslett.getHours() >10 && klokkeslett.getMinutes() < 10) {
document.getElementById("klokkeslett").innerHTML = klokkeslett.getHours() +':0'+ klokkeslett.getMinutes();
}



/*------------------------------slutt tid og dato------------------------------start header script------------------------------*/



// Gjem header n�r du scroller ned
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // pass p� � scolle mer enn delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // N�r du scroller ned og er forbi header h�yden, legg til classen .nav-up.
    // Dette er viktig s� du aldri saer "bak" header
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll ned
        $('header').removeClass('nav-down').addClass('nav-opp');
    } else {
        // Scroll opp
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-opp').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
