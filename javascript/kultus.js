/* dagens dato uten år og mnd  */
var dag = new Date();
document.getElementById("dag").innerHTML = dag.getDate();

/* Sette Dagens dato */
var dato = new Date();
document.getElementById("dagensDato").innerHTML = dato.getDate() +'.'+ (dato.getMonth()+1) +'.'+ dato.getFullYear();

/* Sette klokkeslett  ("October 13, 2017 20:23:00") akkurat nå så finner den deagens klokkelsett men kan gjøre sånn at jeg skriver det selv siden det er "sist oppdatert" */
var klokkeslett = new Date();
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







