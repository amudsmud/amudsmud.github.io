// kultus scripts
//all rights served 2018
/*------------------------------start tid og dato------------------------------*/


/* dagens dato uten år og mnd  */
var dag = new Date();
document.getElementById("dag").innerHTML = dag.getDate();

/* Sette Dagens dato */
var dato = new Date("january 18, 2018");
document.getElementById("dagensDato").innerHTML = dato.getDate() +'.'+ (dato.getMonth()+1) +'.'+ dato.getFullYear();

/* Sette klokkeslett  ("October 13, 2018 20:23:00") akkurat nå så finner den deagens klokkelsett men kan gjøre sånn at jeg skriver det selv siden det er "sist oppdatert" */
var klokkeslett = new Date("October 13, 2017 19:15:00");
document.getElementById("klokkeslett").innerHTML = klokkeslett.getHours() +':'+ klokkeslett.getMinutes();



/* Hvis minutter er mindre en 10, vis en 0 foran minuttene */
if ( klokkeslett.getMinutes() < 10) {
document.getElementById("klokkeslett").innerHTML = klokkeslett.getHours() +':0'+ klokkeslett.getMinutes();
}

/* Hvis timer er mindre en 10, vis en 0 foran timene */
if ( klokkeslett.getHours() < 10) {
document.getElementById("klokkeslett").innerHTML = '0' + klokkeslett.getHours() +':'+ klokkeslett.getMinutes();
}

/* Hvis både timer og minutter er mindre en 10, vis en 0 foran begge */
if ( klokkeslett.getHours() && klokkeslett.getMinutes() < 10) {
document.getElementById("klokkeslett").innerHTML = '0' + klokkeslett.getHours() +':0'+ klokkeslett.getMinutes();
}

/* Hvis timer er mer enn 10 og minutter er mindre enn 10 */
if ( klokkeslett.getHours() >10 && klokkeslett.getMinutes() < 10) {
document.getElementById("klokkeslett").innerHTML = klokkeslett.getHours() +':0'+ klokkeslett.getMinutes();
}



/*------------------------------slutt tid og dato------------------------------start header script------------------------------*/



// Gjem header når du scroller ned
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
    
    // pass på å scolle mer enn delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // Når du scroller ned og er forbi header høyden, legg til classen .nav-up.
    // Dette er viktig så du aldri saer "bak" header
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

