var er_telefon = false;
var gas_pedal_active = false;
var brems_pedal_active = false;
var er_fullskjerm = false;
function start_spill() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        if (confirm("Du bruker telefon, rigth?")){er_telefon = true;};
    }
    menu.start();
    menu.startknapp_func();
    menu.innstillingerknapp_func();
    //platform.start();
    //bil = new firekant(50, 100, "grey", 1000, 900);
    //fartometer = new firekant ("25px", "Arial", "black", 1880, 980, "text");
}
//var stickersrc1 = ["file:///G:/kultus/spill/bilder/stickers/supreme.png", "bilder/stickers/apple.png"];
var stickersrc1 = ["bilder/stickers/supreme.png", "bilder/stickers/apple.png"];

function start_spill1() {
    platform.start();
    bil = new firekant(50, 105, shop.biler[localStorage.bil_nr], container.offsetWidth * 0.5, container.offsetHeight * 0.6, "bil");
    bakgrunn = new firekant(3456 * 1.5, 2688 * 1.5, "bilder/map_bilder/map1.png", container.offsetWidth * 0.5 + 2680, 2688 / 3, "bakgrunn");
    overlag = new firekant(2000, 2000, "black", 0, 0, "overlay");
    fullskjerm_knapp = new firekant(40, 40, "bilder/fullskjerm.png", container.offsetWidth * 0.94, container.offsetHeight * 0.02 , "knapp");
    platform.trykketpå(bil);
    platform.trykketpå(fullskjerm_knapp);
    //"bilder/sedan1_turkis.png"
    if (er_telefon) {
        gas_pedal = new firekant(55, 96, "bilder/car_controls/gas_pedal.png", container.offsetWidth * 0.9, container.offsetHeight * 0.75, "knapp");
        brems_pedal = new firekant(55, 85, "bilder/car_controls/brems_pedal.png", container.offsetWidth * 0.8, container.offsetHeight * 0.75 + 11, "knapp");
    }

    if (window.innerWidth > 700){
        fartometer = new firekant ("15px", "Arial", "black", container.offsetWidth * 0.92, container.offsetHeight * 0.97, "tekst");
        gira = new firekant ("16px", "Arial", "black", container.offsetWidth * 0.86, container.offsetHeight * 0.97, "tekst");
    }
    else {
        fartometer = new firekant ("15px", "Arial", "black", container.offsetWidth * 0.9, container.offsetHeight * 0.97, "tekst");
        gira = new firekant ("16px", "Arial", "black", container.offsetWidth * 0.8, container.offsetHeight * 0.97, "tekst");
    }
    if (window.innerWidth < 900){
        for_liten_vindu_advarsel = new firekant ("14px", "Arial", "red", container.offsetWidth * 0.05, container.offsetHeight * 0.06, "tekst");
    }
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
        this.menu.setAttribute("id", "menudiv");
        container.appendChild(this.menu);
    },
    startknapp : document.createElement("button"),
    startknapp_func : function() {
        this.startknapp.innerHTML = "Free roam";
        this.startknapp.setAttribute("id", "startknapp");
        this.startknapp.setAttribute("class", "knapp");
        this.startknapp.setAttribute("onclick", "platform.vis(); start_spill1()");
        this.menu.appendChild(this.startknapp);
    },
    innstillingerknapp : document.createElement("button"),
    innstillingerknapp_func : function() {
        this.innstillingerknapp.innerHTML = "Shop";
        this.innstillingerknapp.setAttribute("id", "innstillingerknapp");
        this.innstillingerknapp.setAttribute("class", "knapp");
        this.innstillingerknapp.setAttribute("onclick", "shop.start('tittet'); menu.skjul_menu();");
        this.menu.appendChild(this.innstillingerknapp);
    },
    skjul_menu : function() {
        this.menu.style.display = "none";
    }
}

var shop = {
    shop : document.createElement("div"),
    shop_menu : document.createElement("div"),
    shop_menu_list1 : document.createElement("button"),
    produktdiv : document.createElement("div"),
    prikkbeholder : document.createElement("div"),
    gå_tilbake_knapp : document.createElement("div"),
    bilde : [],
    produkt : [],
    prikker : [],
    velg_knapp : [],
    kjøp_knapp : [],
    biler : ["bilder/kjøretøy/biler/sedan1_blå.png",
    "bilder/kjøretøy/biler/sedan1_kraftig_blå.png",
    "bilder/kjøretøy/biler/sedan1_grønn.png",
    "bilder/kjøretøy/biler/sedan1_gul.png",
    "bilder/kjøretøy/biler/sedan1_lilla.png",
    "bilder/kjøretøy/biler/sedan1_neon_grønn.png",
    "bilder/kjøretøy/biler/sedan1_oransje.png",
    "bilder/kjøretøy/biler/sedan1_rosa.png",
    "bilder/kjøretøy/biler/sedan1_rød.png",
    "bilder/kjøretøy/biler/sedan1_turkis.png",
    "bilder/kjøretøy/biler/sedan1_svart.png",
    "bilder/kjøretøy/biler/Tesla-Model-S-mini.jpg"],
    start : function(tst) {
        this.shop.setAttribute("id", "shopdiv");
        this.shop.style.display = "block";
        container.appendChild(this.shop);
        /*__*/
        this.shop_menu.setAttribute("id", "shop_menu");
        this.shop.appendChild(this.shop_menu);
        /*__*/
        this.shop_menu_list1.innerHTML = "Cars"
        this.shop_menu_list1.setAttribute("class", "shop_menu_list");
        this.shop_menu_list1.setAttribute("onclick", "shop.mange_produkter("+this.biler.length+")");
        this.shop_menu.appendChild(this.shop_menu_list1);
        /*__*/
        this.produktdiv.setAttribute("id", "produktdiv");
        this.shop.appendChild(this.produktdiv);
        /*__*/
        this.gå_tilbake_knapp.innerHTML = "Gå tilbake";
        this.gå_tilbake_knapp.setAttribute("class", "gå_tilbake_knapp knapp");
        this.gå_tilbake_knapp.setAttribute("onclick", "shop.gå_tilbake();");
        this.produktdiv.appendChild(this.gå_tilbake_knapp);

    },
    gå_tilbake : function() {
        this.shop.style.display = "none"
        menu.menu.style.display = "block";
        for (i = 0; i < this.produkt.length; i++){
            this.produkt[i].style.display = "none"
            this.prikker[i].style.display = "none"
            this.velg_knapp[i].style.display = "none"
            this.kjøp_knapp[i].style.display = "none"
        }
    },
    mange_produkter : function(numb) {
        for (i = 0; i < numb; i++){
            this.produkt[i] = document.createElement("div");
            this.produkt[i].innerHTML = "Car " + (i + 1);
            this.produkt[i].style.display = "none";
            this.produkt[i].setAttribute("class", "produkt");
            //this.produkt2[i].appendChild(this.produkt);
            this.produktdiv.appendChild(this.produkt[i]);

            this.bilde[i] = document.createElement("img");
            this.bilde[i].src = this.biler[i]
            //this.bilde[i].style.display = "none";
            this.bilde[i].setAttribute("class", "produkt_bilde");
            //this.produkt2[i].appendChild(this.produkt);
            this.produkt[i].appendChild(this.bilde[i]);
        }

        this.produkt[0].style.display = "block";

        this.produktdiv.appendChild(this.prikkbeholder);
        for (i = 0; i < numb; i++){
            this.prikker[i] = document.createElement("span");
            this.prikker[i].setAttribute("class", "navi_prikk");
            this.prikkbeholder.appendChild(this.prikker[i]);
            this.prikker[i].setAttribute("onclick", "shop.hvilken_produkt("+i+");");
        }

        for (i = 0; i < numb; i++){
            this.kjøp_knapp[i] = document.createElement("button");
            this.kjøp_knapp[i].innerHTML = "Buy";
            this.kjøp_knapp[i].style.display = "none";
            this.kjøp_knapp[i].setAttribute("class", "kjøp_knapp knapp");
            this.produktdiv.appendChild(this.kjøp_knapp[i]);
            this.kjøp_knapp[i].setAttribute("onclick", "console.log('det funker');");
        }

        for (i = 0; i < numb; i++){
            this.velg_knapp[i] = document.createElement("button");
            this.velg_knapp[i].innerHTML = "Select";
            this.velg_knapp[i].style.display = "none";
            this.velg_knapp[i].setAttribute("class", "velg_knapp knapp");
            this.produktdiv.appendChild(this.velg_knapp[i]);
            this.velg_knapp[i].setAttribute("onclick", "shop.velg_knapp_func("+i+");");
        }

        this.shop_menu_list1.removeAttribute("onclick");
    },
    hvilken_produkt : function(m) {
        for (i = 0; i < this.produkt.length; i++){
            this.produkt[i].style.display = "none"
            this.velg_knapp[i].style.display = "none"
            this.kjøp_knapp[i].style.display = "none"
            this.prikker[i].style.backgroundColor = "rgb(75,75,75)";
        }
        this.velg_knapp[m].style.display = "block"
        this.kjøp_knapp[m].style.display = "block"
        this.produkt[m].style.display = "block";
        this.prikker[m].style.backgroundColor = "rgb(40,40,40)";
    },
    velg_knapp_func : function(m) {
        console.log(this.bilde[m].src);
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("bil_nr", m);
        } else {
            console.log("Local Storgate is not supported!");
        }
    }
}

var platform = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.setAttribute("id", "canvasid");
        var container = document.getElementById("container");
        this.canvas.width = container.offsetWidth;
        this.canvas.height = container.offsetHeight;
        this.canvas.style.backgroundColor = "green"
        this.context = this.canvas.getContext("2d");
        var menu = document.getElementById("menudiv");
        menu.appendChild(this.canvas);
        this.interval = setInterval(oppdater_spill, 20);
        /*_______få x og y koordinatene til musepekeren_______*/
        var style = container.currentStyle || window.getComputedStyle(container);
        var overskrift = document.getElementById("overskrift")
        var style_overskrift = overskrift.currentStyle || window.getComputedStyle(overskrift);
        window.addEventListener('mousemove', function (e) {
            if (er_fullskjerm == true){
                platform.x = e.pageX
                platform.y = e.pageY
            }
            else{
            var margin_left = style.marginLeft;
            margin_left = margin_left.replace("px", "")
            var margin_top = style_overskrift.height;
            margin_top = margin_top.replace("px", "")
            platform.x = e.pageX - margin_left;
            platform.y = e.pageY - 200 - 50 - margin_top;
        }
        });
        /*______________*/
        /*_______sjekke om du trykker på bilen_______*/


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
    resize1 : function() {
        this.canvas.width = container.offsetWidth;
        this.canvas.height = container.offsetHeight;
        fullskjerm_knapp.y = container.offsetHeight * 0.02;
        if (er_telefon){
            gas_pedal.y = container.offsetHeight * 0.75;
            brems_pedal.y = container.offsetHeight * 0.75 + 11;
        }
        fartometer.y = container.offsetHeight * 0.97;
        gira.y = container.offsetHeight * 0.97;

        if (window.innerWidth < 450){
            fullskjerm_knapp.x = container.offsetWidth * 0.85;
            if (er_telefon){
                gas_pedal.x = container.offsetWidth * 0.8;
                brems_pedal.x = container.offsetWidth * 0.6;
            }
            fartometer.x = container.offsetWidth * 0.85;
            gira.x = container.offsetWidth * 0.7;
        }
        else if (window.innerWidth < 900){
            fullskjerm_knapp.x = container.offsetWidth * 0.9;
            if (er_telefon){
                gas_pedal.x = container.offsetWidth * 0.85;
                brems_pedal.x = container.offsetWidth * 0.7;
            }
            fartometer.x = container.offsetWidth * 0.9;
            gira.x = container.offsetWidth * 0.8;
        }
        else{
            fullskjerm_knapp.x = container.offsetWidth * 0.94;
            if (er_telefon){
                gas_pedal.x = container.offsetWidth * 0.9;
                brems_pedal.x = container.offsetWidth * 0.8;
            }
            fartometer.x = container.offsetWidth * 0.92;
            gira.x = container.offsetWidth * 0.86;
        }
    },
    resetalt : function() {
        bakgrunn.x = container.offsetWidth * 0.5 + 2680
        bakgrunn.y = 2688 / 3
        bil.fart = 0;
        bil.gir = 1
        bil.lysbool = false
        bil.angle = 0;
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
        if (er_telefon){
            container.classList.add("mobil-fullskjerm");
            this.canvas.classList.add("mobil-fullskjerm");
        }
        else {
            this.canvas.webkitRequestFullscreen(this.canvas.ALLOW_KEYBOARD_INPUT);
            this.canvas.mozRequestFullScreen();
            this.canvas.msRequestFullscreen();
            this.canvas.requestFullscreen();
        }
        er_fullskjerm = true
    },
    trykketpå : function(ting) {
        this.canvas.addEventListener("click", function(){
            if (ting.type == "bil"){
                if (platform.x > ting.x - ting.bredde / 2
                    && platform.x < ting.x + ting.bredde / 2
                    && platform.y > ting.y - ting.høyde / 2
                    && platform.y < ting.y + ting.høyde / 2){
                    console.log(ting.type + " er klikket på");
                }
            }
            //Hvis firekanten er tekst
            if (ting.type == "tekst"){
                //Gjøre om størrelsen på font til et rent tall, og bruke dem i formlene min
                //Dermed vil arealet der teksten kan bli klikket på være i forhold til tekst-størrelsen
                ting.bredde2 = ting.bredde.replace("px", "")
                //Får lengden på teksten sånn at "knappen" funker bedre
                ting.lengde = ting.tekst.length
                if (platform.x > ting.x - ting.bredde2 / 2
                    && platform.x < ting.x + 1 * ting.bredde2 + ting.lengde * 6
                    && platform.y > ting.y - 1.3 * ting.bredde2
                    && platform.y < ting.y + ting.bredde2 / 4){
                    console.log(ting.type + " er klikket på");
                }
            }
            //Hvis firekanten er knapp
            if (ting.type == "knapp"){
                if (platform.x > ting.x
                    && platform.x < ting.x + ting.bredde
                    && platform.y > ting.y
                    && platform.y < ting.y + ting.høyde){
                    if (ting == fullskjerm_knapp){
                        console.log("Fullskjerm knapp er klikket på");
                        platform.fullskjerm()
                    }
                }
            }
        });
        this.canvas.addEventListener("touchstart", function(){
            if (ting.type == "knapp"){
                if (platform.x > ting.x
                    && platform.x < ting.x + ting.bredde
                    && platform.y > ting.y
                    && platform.y < ting.y + ting.høyde){
                        if (er_telefon == true){
                            if (ting == gas_pedal){
                                gas_pedal_active = true
                            }
                            if (ting == brems_pedal){
                                brems_pedal_active = true
                            }
                        }
                }
            }
        }, false);
        this.canvas.addEventListener("touchend", function(){
            if (ting.type == "knapp"){
                if (platform.x > ting.x
                    && platform.x < ting.x + ting.bredde
                    && platform.y > ting.y
                    && platform.y < ting.y + ting.høyde){
                        if (er_telefon == true){
                            if (ting == gas_pedal){
                                gas_pedal_active = false
                            }
                            if (ting == brems_pedal){
                                brems_pedal_active = false
                            }
                        }
                }
            }
        }, false);
    }
}


function firekant(bredde, høyde, farge, x, y, type) {
    this.type = type;
    this.farge = farge;
    if (this.type == "bil") {
        this.bilde_bil = new Image();
        this.bilde_bil.src = this.farge;
        this.bilde_lys1 = new Image();
        this.bilde_lys1.src = "bilder/lys1.png";
        this.bilde_lys2 = new Image();
        this.bilde_lys2.src = "bilder/lys2.png";
        this.bilde_lys3 = new Image();
        this.bilde_lys3.src = "bilder/lys3.png";
        this.bilde_sticker = new Image();
        this.bilde_sticker.src = stickersrc1[0];
    }
    if (this.type == "bakgrunn") {
        this.bilde_bakgrunn = new Image();
        this.bilde_bakgrunn.src = this.farge;
    }
    if (this.type == "knapp" && this.farge.startsWith("bilder")) {
        this.bilde_knapp = new Image();
        this.bilde_knapp.src = this.farge;
    }
    this.bredde = bredde;
    this.høyde = høyde;
    this.gir = 1;
    this.lysbool = false;
    this.angle = 0;
    this.moveAngle = 0;
    this.fart = 0;
    this.fartometer = Math.floor(this.fart * 100) / 100;
    this.maksfart = 8;
    this.x = x;
    this.y = y;
    this.oppdater_firekant = function(){
        noe = platform.context;
        lys1 = platform.context;
        lys2 = platform.context;
        lys3 = platform.context;
        sticker1 = platform.context;
        if (this.type == "tekst") {
            noe.font = this.bredde + " " + this.høyde;
            noe.fillStyle = this.farge;
            noe.fillText(this.tekst, this.x, this.y);
        }
        else if (this.type == "bakgrunn"){
            noe.save();
            noe.translate(this.x, this.y);
            noe.rotate(this.angle);
            noe.drawImage(this.bilde_bakgrunn, this.bredde / -1.2, this.høyde / -2, this.bredde, this.høyde);
            noe.restore();
        }
        else if (this.type == "bil"){
            if (this.lysbool) {
                if (platform.keys && platform.keys[88]) {
                    this.lysbool = false;
                    console.log(this.lysbool);
                }
            }
            else {
                if (platform.keys && platform.keys[88]) {
                    this.lysbool = true;
                    console.log(this.lysbool);
                }
            }
            if (this.lysbool){
                lys1.save();
                lys1.translate(this.x, this.y);
                lys1.rotate(this.angle);
                lys1.drawImage(this.bilde_lys1, this.bredde / -1.3, this.høyde * -1.74, this.bredde + 5, this.høyde + 20);
                lys1.drawImage(this.bilde_lys1, this.bredde / -3.1, this.høyde * -1.74, this.bredde + 5, this.høyde + 20);
                lys1.restore();
            }
            if (this.gir == 0){
                lys3.save();
                lys3.translate(this.x, this.y);
                lys3.rotate(this.angle);
                lys3.drawImage(this.bilde_lys3, this.bredde - this.bredde * 1.43, this.høyde / 10.4, 15, 15);/*-2.3*/
                lys3.drawImage(this.bilde_lys3, this.bredde - this.bredde * 0.86, this.høyde / 10.4, 15, 15);
                lys3.restore();
            }
            if (platform.keys && platform.keys[83] || brems_pedal_active == true){
                lys2.save();
                lys2.translate(this.x, this.y);
                lys2.rotate(this.angle);
                lys2.drawImage(this.bilde_lys2, this.bredde - this.bredde * 1.43, this.høyde / 10.4, 15, 15);/*-2.3*/
                lys2.drawImage(this.bilde_lys2, this.bredde - this.bredde * 0.86, this.høyde / 10.4, 15, 15);
                lys2.restore();
            }
            noe.save();
            noe.translate(this.x, this.y);
            noe.rotate(this.angle);
            noe.drawImage(this.bilde_bil, this.bredde / -2, this.høyde / -1.4, this.bredde, this.høyde);
            //noe.fillRect(this.x, this.y, this.bredde, this.høyde);
            noe.restore();


            sticker1.save();
            sticker1.translate(this.x, this.y);
            sticker1.rotate(this.angle);
            sticker1.drawImage(this.bilde_sticker, 30 / -2, this.høyde / -1.8, 30, 10);
            sticker1.restore();

            //if (this.bilde_sticker.src == stickersrc1[0]){console.log("supreme");}
            //if (this.bilde_sticker.src == stickersrc1[1]){console.log("apple");}
        }
        else if (this.type == "knapp"){
            if (this.farge.startsWith("bilder")){
                noe.drawImage(this.bilde_knapp, this.x, this.y, this.bredde, this.høyde);
            }
            else {
                noe.fillStyle = this.farge;
                noe.fillRect(this.x, this.y, this.bredde, this.høyde);
            }
        }
        else if (this.type == "overlay"){
            noe.globalAlpha = 0.8;
            //noe.globalCompositeOperation = "overlay";
            noe.fillStyle = this.farge;
            noe.fillRect(this.x, this.y, this.bredde, this.høyde);
        }
        else {
            console.log("ERROR: ingen type valgt på new firekant");
        }
    }

    this.ny_posisjon = function(){
        this.angle += this.moveAngle * Math.PI / 180;
        //this.x += this.fart * Math.sin(this.angle);
        //this.y -= this.fart * Math.cos(this.angle);
    }
    this.ny_posisjon_map = function(){
        this.x -= bil.fart * Math.sin(bil.angle);
        this.y += bil.fart * Math.cos(bil.angle);
    }


    this.kjøra = function(){
        if (this.gir == 4){
            this.maksfart = 78 / 8;
            if (platform.keys && platform.keys[40] && this.fart * 8 < 74) {this.gir -= 1;}/*Ned pil*/
            if (platform.keys && platform.keys[65]) {this.moveAngle = -3 * (this.fart / 8);}/*a*/
            if (platform.keys && platform.keys[68]) {this.moveAngle = 3 * (this.fart / 8);}/*d*/
            if (platform.keys && platform.keys[87] && this.fart * 8 < 20 || gas_pedal_active == true && this.fart * 8 < 20 ) {this.fart += 0.27 / 8;}/*w*/
            else if (platform.keys && platform.keys[87] && this.fart * 8 < 35 || gas_pedal_active == true && this.fart * 8 < 35) {this.fart += 0.32 / 8;}/*w*/
            else if (platform.keys && platform.keys[87] && this.fart * 8 < 50 || gas_pedal_active == true && this.fart * 8 < 50) {this.fart += 0.4 / 8;}/*w*/
            else if (platform.keys && platform.keys[87] || gas_pedal_active == true) {this.fart += 0.5 / 8;}/*w*/
            if (platform.keys && platform.keys[83] || brems_pedal_active == true) {this.fart -= 0.4 / 8;}/*s*/
            if (this.fart > 0) {this.fart -= 0.25 / 8} else {this.fart = 0;}
        }
        if (this.gir == 3){
            this.maksfart = 56 / 8;
            if (platform.keys && platform.keys[38] && this.fart * 8 > 52) {this.gir += 1;}/*Opp pil*/
            if (platform.keys && platform.keys[40] && this.fart * 8 < 45) {this.gir -= 1;}/*Ned pil*/
            if (platform.keys && platform.keys[65]) {this.moveAngle = -3 * (this.fart / 8);}/*a*/
            if (platform.keys && platform.keys[68]) {this.moveAngle = 3 * (this.fart / 8);}/*d*/
            if (platform.keys && platform.keys[87] && this.fart * 8 < 20 || gas_pedal_active == true && this.fart * 8 < 20) {this.fart += 0.28 / 8;}/*w*/
            else if (platform.keys && platform.keys[87] && this.fart * 8 < 35 || gas_pedal_active == true && this.fart * 8 < 35) {this.fart += 0.34 / 8;}/*w*/
            else if (platform.keys && platform.keys[87] || gas_pedal_active == true) {this.fart += 0.5 / 8;}/*w*/
            if (platform.keys && platform.keys[83] || brems_pedal_active == true) {this.fart -= 0.4 / 8;}/*s*/
            if (this.fart > 0) {this.fart -= 0.25 / 8} else {this.fart = 0;}
        }
        if (this.gir == 2){
            this.maksfart = 38 / 8;
            if (platform.keys && platform.keys[38] && this.fart > 35 / 8) {this.gir += 1;}/*Opp pil*/
            if (platform.keys && platform.keys[40] && this.fart < 25 / 8) {this.gir -= 1;}/*Ned pil*/
            if (platform.keys && platform.keys[65]) {this.moveAngle = -3 * (this.fart / 8);}/*a*/
            if (platform.keys && platform.keys[68]) {this.moveAngle = 3 * (this.fart / 8);}/*d*/
            if (platform.keys && platform.keys[87] && this.fart * 8 < 18 || gas_pedal_active == true && this.fart * 8 < 18) {this.fart += 0.3 / 8;}/*w*/
            else if (platform.keys && platform.keys[87] && this.fart * 8 < 25 || gas_pedal_active == true && this.fart * 8 < 25) {this.fart += 0.5 / 8;}/*w*/
            else if (platform.keys && platform.keys[87] || gas_pedal_active == true) {this.fart += 0.6 / 8;}/*w*/
            if (platform.keys && platform.keys[83] || brems_pedal_active == true) {this.fart -= 0.4 / 8;}/*s*/
            if (this.fart > 0) {this.fart -= 0.25 / 8} else {this.fart = 0;}
        }
        if (this.gir == 1){
            this.maksfart = 22 / 8;
            if (platform.keys && platform.keys[38] && this.fart > 15 / 8) {this.gir += 1;}/*Opp pil*/
            if (platform.keys && platform.keys[40] && this.fart == 0) {this.gir -= 1;}/*Ned pil*/
            if (platform.keys && platform.keys[65]) {this.moveAngle = -3 * (this.fart / 8);}/*a*/
            if (platform.keys && platform.keys[68]) {this.moveAngle = 3 * (this.fart / 8);}/*d*/
            if (platform.keys && platform.keys[87] || gas_pedal_active == true) {this.fart += 0.7 / 8;}/*w*/
            if (platform.keys && platform.keys[83] || brems_pedal_active == true) {this.fart -= 0.4 / 8;}/*s*/
            if (this.fart > 0) {this.fart -= 0.20 / 8} else {this.fart = 0;}
        }
        if (this.fart > this.maksfart && this.gir > 0) {this.fart = this.maksfart;};
        if (this.gir == 0){
            this.maksfart = -25 / 8;
            if (platform.keys && platform.keys[38] && this.fart == 0) {this.gir += 1;}/*Opp pil*/
            if (platform.keys && platform.keys[65]) {this.moveAngle = -2 * (this.fart / 4);}/*a*/
            if (platform.keys && platform.keys[68]) {this.moveAngle = 2 * (this.fart / 4);}/*d*/
            if (platform.keys && platform.keys[87] || gas_pedal_active == true) {this.fart -= 0.8 / 8;}/*w*/
            if (platform.keys && platform.keys[83] || brems_pedal_active == true) {this.fart += 0.4 / 8;}/*s*/
            if (this.fart < 0) {this.fart += 0.3 / 8} else {this.fart = 0;}
            if (this.fart < this.maksfart) {this.fart = this.maksfart;};
        }
        /*gange vinkelen bilen snur på i forholde til farta, jo saktere, desto kraftigere sving*/
        if (this.fart * 8 < -25) {this.moveAngle *= 1.2}
        else if (this.fart * 8 < -15) {this.moveAngle *= 1.4}
        else if (this.fart * 8 < -10) {this.moveAngle *= 1.6}
        else if (this.fart * 8 < -5) {this.moveAngle *= 1.8}
        else if (this.fart * 8 < 5) {this.moveAngle *= 2}
        else if (this.fart * 8 < 15) {this.moveAngle *= 1.8}
        else if (this.fart * 8 < 25) {this.moveAngle *= 1.6}
        else if (this.fart * 8 < 35) {this.moveAngle *= 1.5}
        else if (this.fart * 8 < 42) {this.moveAngle *= 1.2}
        else if (this.fart * 8 < 50) {this.moveAngle *= 1}
        else if (this.fart * 8 < 60) {this.moveAngle *= 0.9}
        else if (this.fart * 8 < 70) {this.moveAngle *= 0.8}
        else if (this.fart * 8 < 80) {this.moveAngle *= 0.7}
        else if (this.fart * 8 < 100) {this.moveAngle *= 0.6}
        else if (this.fart * 8 < 125) {this.moveAngle *= 0.5}
        else if (this.fart * 8 < 150) {this.moveAngle *= 0.45}
        else if (this.fart * 8 < 175) {this.moveAngle *= 0.4}
        else if (this.fart * 8 < 200) {this.moveAngle *= 0.35}
        else {this.moveAngle *= 0.3}

    }
}



function stop_bil() {bil.fart = 0;}

function oppdater_spill() {
    platform.tøm();
    platform.resize1();
    if (typeof for_liten_vindu_advarsel !== "undefined") {
        for_liten_vindu_advarsel.tekst = "Vennligst bruk større skjerm for bedre spill-opplevelse";
        for_liten_vindu_advarsel.oppdater_firekant();
    }
    bil.moveAngle = 0;
    bakgrunn.moveAngle = 0;
    //console.log(localStorage.getItem("kroner"));
    bil.fartometer = Math.floor((bil.fart * 100) / 100 * 8 + 0.4);
    fartometer.tekst = bil.fartometer + "KM/T";
    if (bil.gir == 0){
        gira.tekst = "Gir: R";
    }
    else {
        gira.tekst = "Gir:" + bil.gir;
    }
    bakgrunn.kjøra()
    bakgrunn.ny_posisjon_map();
    bil.kjøra();
    bil.ny_posisjon();
    bakgrunn.oppdater_firekant();
    bil.oppdater_firekant();
    //overlag.oppdater_firekant()
    if (er_telefon){
        gas_pedal.oppdater_firekant();
        brems_pedal.oppdater_firekant();
        platform.trykketpå(gas_pedal)
        platform.trykketpå(brems_pedal)
    }
    fartometer.oppdater_firekant();
    gira.oppdater_firekant();
    fullskjerm_knapp.oppdater_firekant();
}
