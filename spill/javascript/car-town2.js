function start_spill() {
    menu.start();
    menu.startknapp_func();
    menu.innstillingerknapp_func();
    platform.start();
    //knapp.start();
    bil = new firekant(50, 100, "grey", 1000, 900);
    fartometer = new firekant ("25px", "Arial", "black", 1880, 980, "text");

}


if (typeof(Storage) !== "undefined") {
    localStorage.setItem("kroner", 0);
} else {
    console.log("Local Storgate is not supported!");
}


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
        this.startknapp.setAttribute("onclick", "platform.vis();");
        this.menu.appendChild(this.startknapp);
    },
    innstillingerknapp : document.createElement("button"),
    innstillingerknapp_func : function() {
        this.innstillingerknapp.innerHTML = "Innstillinger";
        this.innstillingerknapp.setAttribute("id", "innstillingerknapp");
        this.innstillingerknapp.setAttribute("class", "knapp");
        this.innstillingerknapp.setAttribute("onclick", console.log("123"));
        this.menu.appendChild(this.innstillingerknapp);
    }
}

var platform = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 2000;
        this.canvas.height = 1000;
        this.canvas.setAttribute("id", "canvasid");
        this.context = this.canvas.getContext("2d");
        var menu = document.getElementById("menudiv");
        menu.appendChild(this.canvas);
        this.interval = setInterval(oppdater_spill, 20);
        /*_______få x og y koordinatene til musepekeren_______*/
        var style = this.canvas.currentStyle || window.getComputedStyle(this.canvas);
        var overskrift = document.getElementById("overskrift")
        var style_overskrift = overskrift.currentStyle || window.getComputedStyle(overskrift);
        window.addEventListener('mousemove', function (e) {
            var margin_left = style.marginLeft;
            margin_left = margin_left.replace("px", "")
            var margin_top = style_overskrift.height;
            margin_top = margin_top.replace("px", "")
            platform.x = e.pageX - margin_left;
            platform.y = e.pageY - 180 - 50 - margin_top;
        })
        /*______________*/
        /*_______sjekke om du trykker på noe_______*/
        document.addEventListener("click", function(){
            if (platform.x > 520 && platform.x < 600){}
        });
        /*______________*/
        window.addEventListener('keydown', function (e) {
            platform.keys = (platform.keys || []);
            platform.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            platform.keys[e.keyCode] = false;
        })
    },
    tøm : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    vis : function() {
        this.canvas.style.display = "block";
        startknapp.style.display = "none";
        innstillingerknapp.style.display = "none";
    }
}

var knapp = {
    knapp : document.createElement("button"),
    start : function() {
        this.knapp.addEventListener('click', function() {
            console.log("hadawdawdawdadsadwaw");
        })
        this.knapp.width = 100;
        this.knapp.height = 50;
        this.knapp.x = 50;
        this.knapp.y = 100;
        this.knapp.setAttribute("id", "start-knapp");
        container.appendChild(this.knapp);

}}


function firekant(bredde, høyde, farge, x, y, type) {
    this.type = type;
    this.bredde = bredde;
    this.høyde = høyde;
    this.farge = farge;
    this.angle = 0;
    this.moveAngle = 0;
    this.fart = 0;
    this.fartometer = Math.floor(this.fart * 100) / 100;
    this.maksfart = 8;
    this.akselerasjon = 0;
    this.x = x;
    this.y = y;
    this.oppdater_firekant = function(){
        if (this.type == "text") {
          noe.font = this.bredde + " " + this.høyde;
          noe.fillStyle = this.farge;
          noe.fillText(this.text, this.x, this.y);
        }

        else {
        noe = platform.context;
        noe.save();
        noe.translate(this.x, this.y);
        noe.rotate(this.angle);
        noe.fillStyle = farge;
        /*noe.fillRect(this.x, this.y, this.bredde, this.høyde);*/
        noe.fillRect(this.bredde / -2, this.høyde / -2, this.bredde, this.høyde);
        noe.restore();
        }
    }
    this.ny_posisjon = function(){
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.fart * Math.sin(this.angle);
        this.y -= this.fart * Math.cos(this.angle);
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
    platform.tøm()
    bil.moveAngle = 0;
    if (platform.keys && platform.keys[65]) {bil.moveAngle = -1;}/*a*/
    if (platform.keys && platform.keys[68]) {bil.moveAngle = 1;}/*d*/
    if (platform.keys && platform.keys[87]) {bil.fart += 0.2;}/*w*/
    if (platform.keys && platform.keys[83]) {bil.fart -= 0.1;}/*s*/
    if (bil.fart > 0) {bil.fart -= 0.05} else {bil.fart = 0;}
    if (bil.fart > bil.maksfart) {bil.fart = bil.maksfart;};
    //console.log(localStorage.getItem("kroner"));

    //document.onclick = console.log("het");

    bil.fartometer = Math.floor((bil.fart * 100) / 100 * 5 + 0.4);
    fartometer.text = bil.fartometer + "KM/T";
    bil.ny_posisjon();
    bil.oppdater_firekant();
    fartometer.oppdater_firekant();
    //console.log(platform.y);
}
