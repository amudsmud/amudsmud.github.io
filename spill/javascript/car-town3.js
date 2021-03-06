// Smudi car town V0.3 scripts
// All Rights Reserved 2018
function start_spill() {
    menu.start();
    menu.startknapp_func();
    menu.innstillingerknapp_func();
    //platform.start();
    //knapp.start();
    //bil = new firekant(50, 100, "grey", 1000, 900);
    //fartometer = new firekant ("25px", "Arial", "black", 1880, 980, "text");

}

function start_spill1() {
    platform.start();
    $("platform").attr("contentEditable", "true")
    bil = new firekant(30, 67, "bilder/kjøretøy/biler/Tesla-Model-S-mini.jpg", container.offsetWidth * 0.5, container.offsetHeight * 0.8, "bil");
    fartometer = new firekant ("15px", "Arial", "black", container.offsetWidth * 0.92, container.offsetHeight * 0.97, "text");
    gira = new firekant ("16px", "Arial", "black", container.offsetWidth * 0.86, container.offsetHeight * 0.97, "text");
}


//if (typeof(Storage) !== "undefined") {
//    localStorage.setItem("kroner", 0);
//} else {
//    console.log("Local Storgate is not supported!");
//}


var container = document.getElementById("container");
var menu = {
    menu : document.createElement("div"),
    start : function() {
        this.menu.width = 100;
        this.menu.height = 100;
        this.menu.setAttribute("id", "menudiv");
        container.appendChild(this.menu);
    },
    startknapp : document.createElement("button"),
    startknapp_func : function() {
        this.startknapp.innerHTML = "Start spill";
        this.startknapp.setAttribute("id", "startknapp");
        this.startknapp.setAttribute("class", "knapp");
        this.startknapp.setAttribute("onclick", "platform.vis(); start_spill1()");
        this.menu.appendChild(this.startknapp);
    },
    innstillingerknapp : document.createElement("button"),
    innstillingerknapp_func : function() {
        this.innstillingerknapp.innerHTML = "Innstillinger";
        this.innstillingerknapp.setAttribute("id", "innstillingerknapp");
        this.innstillingerknapp.setAttribute("class", "knapp");
        this.innstillingerknapp.setAttribute("onclick", "platform.fullskjerm();");
        this.menu.appendChild(this.innstillingerknapp);
    }
}

var platform = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.setAttribute("id", "canvasid");
        var container = document.getElementById("container");
        this.canvas.width = container.offsetWidth;
        this.canvas.height = container.offsetHeight;
        this.context = this.canvas.getContext("2d");
        var menu = document.getElementById("menudiv");
        menu.appendChild(this.canvas);
        this.interval = setInterval(oppdater_spill, 20);
        /*_______få x og y koordinatene til musepekeren_______*/
        var style = container.currentStyle || window.getComputedStyle(container);
        var overskrift = document.getElementById("overskrift")
        var style_overskrift = overskrift.currentStyle || window.getComputedStyle(overskrift);
        window.addEventListener('mousemove', function (e) {
            var margin_left = style.marginLeft;
            margin_left = margin_left.replace("px", "")
            var margin_top = style_overskrift.height;
            margin_top = margin_top.replace("px", "")
            platform.x = e.pageX - margin_left;
            platform.y = e.pageY - 200 - 50 - margin_top;
        });
        /*______________*/
        /*_______sjekke om du trykker på bilen_______*/
        this.canvas.addEventListener("click", function(){
            if (platform.x > bil.x - bil.bredde/2
                && platform.x < bil.x + bil.bredde / 2
                && platform.y > bil.y - bil.høyde / 2
                && platform.y < bil.y + bil.høyde / 2){
                console.log("klikket");
            }
        });
        /*______________*/
        window.addEventListener('keydown', function (e) {
            e.preventDefault()
            platform.keys = (platform.keys || []);
            platform.keys[e.keyCode] = true;
        });
        window.addEventListener('keyup', function (e) {
            e.preventDefault()
            platform.keys[e.keyCode] = false;
        });
    },
    tøm : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    vis : function() {
        this.canvas.style.display = "block";
        startknapp.style.display = "none";
        innstillingerknapp.style.display = "none";
    },
    fullskjerm : function() {
        this.canvas.webkitRequestFullscreen(this.canvas.ALLOW_KEYBOARD_INPUT);
        this.canvas.mozRequestFullScreen();
        this.canvas.msRequestFullscreen();
        this.canvas.requestFullscreen();
    }
}


var knapp = {
    knapp : document.createElement("button"),
    start : function() {
        this.knapp.addEventListener('click', function() {
            console.log("ok");
        });
        this.knapp.width = 100;
        this.knapp.height = 50;
        this.knapp.x = 50;
        this.knapp.y = 100;
        this.knapp.setAttribute("id", "start-knapp");
        container.appendChild(this.knapp);

}}


function firekant(bredde, høyde, farge, x, y, type) {
    this.type = type;
    if (type == "bil") {
        this.bilde = new Image();
        this.bilde.src = farge;
    }
    this.bredde = bredde;
    this.høyde = høyde;
    this.farge = farge;
    this.gir = 1;
    this.angle = 0;
    this.moveAngle = 0;
    this.fart = 0;
    this.fartometer = Math.floor(this.fart * 100) / 100;
    this.maksfart = 8;
    this.akselerasjon = 0;
    this.x = x;
    this.y = y;
    this.oppdater_firekant = function(){
        noe = platform.context;
        if (this.type == "text") {
          noe.font = this.bredde + " " + this.høyde;
          noe.fillStyle = this.farge;
          noe.fillText(this.text, this.x, this.y);
        }

        else if (this.type == "bil"){
        noe.save();
        noe.translate(this.x, this.y);
        noe.rotate(this.angle);
        //noe.fillRect(this.bredde / -2, this.høyde / -2, this.bredde, this.høyde);
        noe.drawImage(this.bilde, this.bredde / -2, this.høyde / -2, this.bredde, this.høyde);
        //noe.fillRect(this.x, this.y, this.bredde, this.høyde);
        noe.restore();
        }
        else {
            console.log("ERROR: ingen type valgt på new firekant");
        }
    }
    this.ny_posisjon = function(){
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.fart * Math.sin(this.angle);
        this.y -= this.fart * Math.cos(this.angle);
    }
    this.klikk = function(){
        this.bilde.onclick = function(){
            console.log("åk");
        }
        if (this.bilde.clicked == true){
            console.log("ok");
        }
    }

    this.kjøra = function(){
        if (this.gir == 3){
            this.maksfart = 56 / 8;
            if (platform.keys && platform.keys[40] && this.fart < 45 / 8) {this.gir -= 1;}/*Ned pil*/
            if (platform.keys && platform.keys[65]) {this.moveAngle = -1 * (this.fart / 8);}/*a*/
            if (platform.keys && platform.keys[68]) {this.moveAngle = 1 * (this.fart / 8);}/*d*/
            if (platform.keys && platform.keys[87] && this.fart < 20 / 8) {this.fart += 0.28 / 8;}/*w*/
            else if (platform.keys && platform.keys[87] && this.fart < 35 / 8) {this.fart += 0.34 / 8;}/*w*/
            else if (platform.keys && platform.keys[87]) {this.fart += 0.5 / 8;}/*w*/
            if (platform.keys && platform.keys[83]) {this.fart -= 0.4 / 8;}/*s*/
            if (this.fart > 0) {this.fart -= 0.25 / 8} else {this.fart = 0;}
        }
        if (this.gir == 2){
            this.maksfart = 38 / 8;
            if (platform.keys && platform.keys[38] && this.fart > 35 / 8) {this.gir += 1;}/*Opp pil*/
            if (platform.keys && platform.keys[40] && this.fart < 25 / 8) {this.gir -= 1;}/*Ned pil*/
            if (platform.keys && platform.keys[65] && this.fart < 15 / 8) {this.moveAngle = -1 * (this.fart / 4);}/*a*/
            if (platform.keys && platform.keys[65] && this.fart > 15 / 8) {this.moveAngle = -1 * (this.fart / 8);}/*a*/
            if (platform.keys && platform.keys[68] && this.fart < 15 / 8) {this.moveAngle = 1 * (this.fart / 4);}/*d*/
            if (platform.keys && platform.keys[68] && this.fart > 15 / 8) {this.moveAngle = 1 * (this.fart / 8);}/*d*/
            if (platform.keys && platform.keys[87] && this.fart < 18 / 8) {this.fart += 0.3 / 8;}/*w*/
            else if (platform.keys && platform.keys[87] && this.fart < 25 / 8) {this.fart += 0.5 / 8;}/*w*/
            else if (platform.keys && platform.keys[87]) {this.fart += 0.6 / 8;}/*w*/
            if (platform.keys && platform.keys[83]) {this.fart -= 0.3 / 8;}/*s*/
            if (this.fart > 0) {this.fart -= 0.25 / 8} else {this.fart = 0;}
        }
        if (this.gir == 1){
            this.maksfart = 22 / 8;
            if (platform.keys && platform.keys[38] && this.fart > 15 / 8) {this.gir += 1;}/*Opp pil*/
            if (platform.keys && platform.keys[40] && this.fart == 0) {this.gir -= 1;}/*Ned pil*/
            if (platform.keys && platform.keys[65] && this.fart < 15 / 8) {this.moveAngle = -1 * (this.fart / 4);}/*a*/
            if (platform.keys && platform.keys[65] && this.fart > 15 / 8) {this.moveAngle = -1 * (this.fart / 8);}/*a*/
            if (platform.keys && platform.keys[68] && this.fart < 15 / 8) {this.moveAngle = 1 * (this.fart / 4);}/*d*/
            if (platform.keys && platform.keys[68] && this.fart > 15 / 8) {this.moveAngle = 1 * (this.fart / 8);}/*d*/
            if (platform.keys && platform.keys[87]) {this.fart += 0.7 / 8;}/*w*/
            if (platform.keys && platform.keys[83]) {this.fart -= 0.4 / 8;}/*s*/
            if (this.fart > 0) {this.fart -= 0.20 / 8} else {this.fart = 0;}
        }
        if (this.fart > this.maksfart && this.gir > 0) {this.fart = this.maksfart;};
        if (this.gir == 0){
            this.maksfart = -25 / 8;
            if (platform.keys && platform.keys[38] && this.fart == 0) {this.gir += 1;}/*Opp pil*/
            if (platform.keys && platform.keys[65] && this.fart < 15 / 8) {this.moveAngle = -1 * (this.fart / 4);}/*a*/
            if (platform.keys && platform.keys[65] && this.fart > 15 / 8) {this.moveAngle = -1 * (this.fart / 8);}/*a*/
            if (platform.keys && platform.keys[68] && this.fart < 15 / 8) {this.moveAngle = 1 * (this.fart / 4);}/*d*/
            if (platform.keys && platform.keys[68] && this.fart > 15 / 8) {this.moveAngle = 1 * (this.fart / 8);}/*d*/
            if (platform.keys && platform.keys[87]) {this.fart -= 0.8 / 8;}/*w*/
            if (platform.keys && platform.keys[83]) {this.fart += 0.4 / 8;}/*s*/
            if (this.fart < 0) {this.fart += 0.3 / 8} else {this.fart = 0;}
            if (this.fart < this.maksfart) {this.fart = this.maksfart;};
        }
    }

}

function knapp(størrelse, font, farge, x, y, tekst) {
    this.størrelse = størrelse;
    this.font = font;
    this.x = x;
    this.y = y;
    this.tekst = tekst;
    this.oppdater_knapp = function(){
      noe.font = this.størrelse + " " + this.font;
      noe.fillStyle = farge;
      noe.fillText(this.tekst, this.x, this.y);
    }
}


function stop_bil() {bil.fart = 0;}

function oppdater_spill() {
    platform.tøm();
    bil.klikk();
    bil.moveAngle = 0;
    //console.log(localStorage.getItem("kroner"));
    bil.fartometer = Math.floor((bil.fart * 100) / 100 * 8 + 0.4);
    fartometer.text = bil.fartometer + "KM/T";
    if (bil.gir == 0){
        gira.text = "Gir: R";
    }
    else {
        gira.text = "Gir:" + bil.gir;
    }
    bil.kjøra();
    bil.ny_posisjon();
    bil.oppdater_firekant();
    fartometer.oppdater_firekant();
    gira.oppdater_firekant();
    //console.log(platform.y);
}
