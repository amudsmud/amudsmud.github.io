var er_telefon = false;
var gas_pedal_active = false;
var brems_pedal_active = false;
var er_fullskjerm = false;
function start_spill() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        if (confirm("Du bruker telefon, rigth?")){er_telefon = true;};
    }
    //load images før spillet starter
    var load_bakgrunn = new Image();
    load_bakgrunn.src = "bilder/map_bilder/map1.png";
    load_bakgrunn.onload = function(){console.log(load_bakgrunn.src + " loaded");};

    var load_biler_list = ["bilder/kjøretøy/biler/sedan1_default.png",
    "bilder/kjøretøy/biler/sedan1_blå.png",
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
    "bilder/kjøretøy/biler/Tesla-Model-S-mini.jpg"]
    for (i=0; i < load_biler_list.length; i++){
        var load_biler = new Image();
        load_biler.src = load_biler_list[i];
        load_biler.onload = function(){console.log(load_biler.src + " loaded");};
    }

    menu.start();
    menu.startknapp_func();
    menu.shopknapp_func();
    menu.innstillingerknapp_func();
    //platform.start();
    //min_bil = new firekant(50, 100, "grey", 1000, 900);
    //fartometer = new firekant ("25px", "Arial", "black", 1880, 980, "text");
}
var stickersrc1 = ["bilder/stickers/supreme.png", "bilder/stickers/apple.png"];
function start_spill1() {
    platform.start();
    if (typeof(Storage) !== "undefined" && !localStorage.bil_nr) {
        localStorage.setItem("bil_nr", 0);
    }
    if (typeof(Storage) !== "undefined" && !localStorage.kroner) {
        localStorage.setItem("kroner", 0);
    }
    min_bil = new firekant(50, 105, shop.biler[localStorage.bil_nr], container.offsetWidth * 0.5, container.offsetHeight * 0.6, "bil");
    bil1 = new firekant(50, 105, shop.biler[0], container.offsetWidth * 0.52, container.offsetHeight * 0.4, "bil");
    bakgrunn = new firekant(3456 * 1.5, 2688 * 1.5, "bilder/map_bilder/map1.png", container.offsetWidth * 0.5 + 2680, 2688 / 3, "bakgrunn");
    overlag = new firekant(2000, 2000, "black", 0, 0, "overlay");
    fullskjerm_knapp = new firekant(40, 40, "bilder/fullskjerm.png", container.offsetWidth * 0.94, container.offsetHeight * 0.02 , "knapp");
    målstrek = new firekant(110, 10, "white", container.offsetWidth * 0.5-55, container.offsetHeight * 0.28 , "knapp");

    platform.trykketpå(min_bil);
    min_bil.mstand_func_engang();
    platform.trykketpå(fullskjerm_knapp);
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
    shopknapp : document.createElement("button"),
    shopknapp_func : function() {
        this.shopknapp.innerHTML = "Shop";
        this.shopknapp.setAttribute("id", "shopknapp");
        this.shopknapp.setAttribute("class", "knapp");
        this.shopknapp.setAttribute("onclick", "shop.start(); menu.skjul_menu();");
        this.menu.appendChild(this.shopknapp);
    },
    innstillingerknapp : document.createElement("button"),
    innstillingerknapp_func : function() {
        this.innstillingerknapp.innerHTML = "Settings";
        this.innstillingerknapp.setAttribute("id", "innstillingerknapp");
        this.innstillingerknapp.setAttribute("class", "knapp");
        this.innstillingerknapp.setAttribute("onclick", "innstillinger.start(); menu.skjul_menu();");
        this.menu.appendChild(this.innstillingerknapp);
    },
    skjul_menu : function() {
        this.menu.style.display = "none";
    }
}

var shop = {
    shop : document.createElement("div"),
    shop_menu : document.createElement("div"),
    shop_overskrift : document.createElement("h1"),
    shop_menu_list1 : document.createElement("button"),
    produktdiv : document.createElement("div"),
    prikkbeholder : document.createElement("div"),
    gå_tilbake_knapp : document.createElement("div"),
    eier_bil : [0],
    eier_bil2 : [],
    bilde : [],
    produkt : [],
    prikker : [],
    velg_knapp : [],
    kjøp_knapp : [],
    biler : ["bilder/kjøretøy/biler/sedan1_default.png",
    "bilder/kjøretøy/biler/sedan1_blå.png",
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
    start : function() {
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
        this.shop_overskrift.innerHTML = menu.shopknapp.innerHTML;
        this.shop_overskrift.setAttribute("class", "menu-overskrift");
        this.produktdiv.appendChild(this.shop_overskrift);
        /*__*/
        this.gå_tilbake_knapp.innerHTML = "Return";
        this.gå_tilbake_knapp.setAttribute("class", "gå_tilbake_knapp knapp");
        this.gå_tilbake_knapp.setAttribute("onclick", "shop.gå_tilbake();");
        this.produktdiv.appendChild(this.gå_tilbake_knapp);

        if (typeof(Storage) !== "undefined" && !localStorage.eier_bil) {
            localStorage.setItem("eier_bil", this.eier_bil);
        }
        if (typeof(Storage) !== "undefined" && localStorage.eier_bil) {
            this.eier_bil2 = localStorage.eier_bil.split(/\s*,\s*/)
        }

    },
    gå_tilbake : function() {
        this.shop.style.display = "none"
        menu.menu.style.display = "block";
        for (i = 0; i < this.produkt.length; i++){
            this.produkt[i].style.display = "none"
            this.prikker[i].style.display = "none"
            this.velg_knapp[i].style.display = "none"
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
            this.velg_knapp[i] = document.createElement("button");
            this.velg_knapp[i].innerHTML = "Buy";
            this.velg_knapp[i].style.display = "none";
            this.velg_knapp[i].setAttribute("class", "velg_knapp knapp");
            this.produktdiv.appendChild(this.velg_knapp[i]);
            this.velg_knapp[i].setAttribute("onclick", "shop.kjøp_func("+i+");");
            /*__skrive velg hvis knappen's nummer allerede er i this.eier_bil__*/
            if (typeof(localStorage.eier_bil) !== "undefined"){
                for (x = 0; x < this.eier_bil2.length; x++){
                    if (this.eier_bil2[x] == i){
                        this.velg_knapp[i].innerHTML = "Select";
                        this.velg_knapp[i].setAttribute("class", "velg_knapp knapp");
                        this.produktdiv.appendChild(this.velg_knapp[i]);
                        this.velg_knapp[i].setAttribute("onclick", "shop.velg_knapp_func("+i+");");
                    }
                }
            }
        }
        this.shop_menu_list1.removeAttribute("onclick");
    },
    hvilken_produkt : function(m) {
        for (i = 0; i < this.produkt.length; i++){
            this.produkt[i].style.display = "none"
            this.velg_knapp[i].style.display = "none"
            this.prikker[i].style.backgroundColor = "rgb(75,75,75)";
        }
        this.velg_knapp[m].style.display = "block"
        this.produkt[m].style.display = "block";
        this.prikker[m].style.backgroundColor = "rgb(40,40,40)";
    },
    velg_knapp_func : function(m) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("bil_nr", m);
        } else {
            console.log("Local Storgate is not supported!");
        }
    },
    kjøp_func : function(m) {
        if (1000 > 500){
            if (typeof(localStorage.eier_bil) !== "undefined"){
                localStorage.eier_bil += "," + m
                this.velg_knapp[m].innerHTML = "Select";
                this.velg_knapp[m].setAttribute("onclick", "shop.velg_knapp_func("+m+");");
            } else {
                console.log("Local Storgate is not defined!");
            }
        }
    }
}

var innstillinger = {
    innstillinger : document.createElement("div"),
    innstillinger_menu : document.createElement("div"),
    innstillinger_overskrift : document.createElement("h1"),
    innstillinger_menu_list1 : document.createElement("button"),
    gå_tilbake_knapp : document.createElement("div"),
    start : function() {
        this.innstillinger.setAttribute("id", "innstillingerdiv");
        this.innstillinger.style.display = "block";
        container.appendChild(this.innstillinger);
        /*__*/
        this.innstillinger_menu.setAttribute("id", "shop_menu");
        this.innstillinger.appendChild(this.innstillinger_menu);
        /*__*/
        this.innstillinger_menu_list1.innerHTML = "Cars";
        this.innstillinger_menu_list1.setAttribute("class", "shop_menu_list");
        this.innstillinger_menu_list1.setAttribute("onclick", "");
        this.innstillinger_menu.appendChild(this.innstillinger_menu_list1);
        /*__*/
        this.innstillinger_overskrift.innerHTML = menu.innstillingerknapp.innerHTML;
        this.innstillinger_overskrift.setAttribute("class", "menu-overskrift");
        this.innstillinger_menu.appendChild(this.innstillinger_overskrift);
        /*__*/
        this.gå_tilbake_knapp.innerHTML = "Return";
        this.gå_tilbake_knapp.setAttribute("class", "gå_tilbake_knapp knapp");
        this.gå_tilbake_knapp.setAttribute("onclick", "innstillinger.gå_tilbake();");
        this.innstillinger_menu.appendChild(this.gå_tilbake_knapp);

    },
    gå_tilbake : function() {
        this.innstillinger.style.display = "none";
        menu.menu.style.display = "block";
    }
}



var platform = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.setAttribute("id", "canvasid");
        var container = document.getElementById("container");
        this.canvas.width = container.offsetWidth;
        this.canvas.height = container.offsetHeight;
        this.canvas.style.backgroundColor = "green";
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
                platform.x = e.pageX;
                platform.y = e.pageY;
            }
            else{
            var margin_left = style.marginLeft;
            margin_left = margin_left.replace("px", "");
            var margin_top = style_overskrift.height;
            margin_top = margin_top.replace("px", "");
            platform.x = e.pageX - margin_left;
            platform.y = e.pageY - 200 - 50 - margin_top;
        }
        });
        /*______________*/
        /*_______sjekke om du trykker på bilen_______*/


        /*______________*/
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            platform.keys = (platform.keys || []);
            platform.keys[e.keyCode] = true;
        });
        window.addEventListener('keyup', function (e) {
            e.preventDefault();
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
        min_bil.fart = 0;
        min_bil.gir = 1
        min_bil.lysbool = false
        min_bil.angle = 0;

        bil1.angle = 0;
        bil1.x = 480
        bil1.y = 400
        bil1.asd = 0
        bil1.dsa = 0
    },
    tøm : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    vis : function() {
        this.canvas.style.display = "block";
        startknapp.style.display = "none";
        shopknapp.style.display = "none";
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
        this.canvas.addEventListener("mousemove", function(){
            //Hvis mus er over knapp
            if (ting.type == "knapp"){
                if (platform.x > ting.x
                    && platform.x < ting.x + ting.bredde
                    && platform.y > ting.y
                    && platform.y < ting.y + ting.høyde){
                    if (ting == fullskjerm_knapp){
                        platform.canvas.style.cursor = "pointer"
                    }
                }else {platform.canvas.style.cursor = "default"}
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
    this.mstand = 0;

    this.oppdater_firekant_bakgrunn = function(){
        noe = platform.context;
        if (this.type == "bakgrunn"){
            noe.save();
            noe.translate(this.x, this.y);
            noe.rotate(this.angle);
            noe.drawImage(this.bilde_bakgrunn, this.bredde / -1.2, this.høyde / -2, this.bredde, this.høyde);
            noe.restore();
        }
    }

    this.oppdater_firekant_tekst = function(){
        noe = platform.context;
        if (this.type == "tekst") {
            noe.font = this.bredde + " " + this.høyde;
            noe.fillStyle = this.farge;
            noe.fillText(this.tekst, this.x, this.y);
        }
    }


    this.oppdater_firekant_knapp = function(){
        noe = platform.context;

        if (this.type == "knapp"){
            if (this.farge.startsWith("bilder")){
                noe.drawImage(this.bilde_knapp, this.x, this.y, this.bredde, this.høyde);
            }
            else {
                noe.fillStyle = this.farge;
                noe.fillRect(this.x, this.y, this.bredde, this.høyde);
            }
        }
    }

    this.oppdater_firekant_overlay = function(){
        noe = platform.context;
        if (this.type == "overlay"){
            noe.globalAlpha = 0.8;
            //noe.globalCompositeOperation = "overlay";
            noe.fillStyle = this.farge;
            noe.fillRect(this.x, this.y, this.bredde, this.høyde);
        }

    }


    this.oppdater_firekant_bil = function(){
        noe = platform.context;
        lys2 = platform.context;
        if (this.fart !== this.kjørefart){
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
    }

    this.oppdater_firekant_min_bil = function(){
        noe = platform.context;
        lys1 = platform.context;
        lys2 = platform.context;
        lys3 = platform.context;
        sticker1 = platform.context;
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
    this.rørte = function(ting){
        /*if (this.x < ting.x + ting.bredde/2
            && this.x > ting.x - ting.bredde/2
            && this.y < ting.y + ting.høyde/2
            && this.y > ting.y - ting.høyde/2){
                console.log("only my bed an d my ");
            }*/
        if (this.x - ting.x > -37
            && this.x - ting.x < 37
            && this.y - ting.y > -85
            && this.y - ting.y < 85){
                console.log("KRÆSJ");
            }
    }

    this.ny_posisjon = function(){
        this.angle += this.moveAngle * Math.PI / 180;
        //this.x += this.fart * Math.sin(this.angle);
        //this.y -= this.fart * Math.cos(this.angle);
    }
    this.ny_posisjon2 = function(){
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.fart * Math.sin(this.angle);
        this.y -= this.fart * Math.cos(this.angle);

        this.x -= bakgrunn.fart * Math.sin(min_bil.angle);
        this.y += bakgrunn.fart * Math.cos(min_bil.angle);
    }
    this.mstand_func_engang = function(){
        if (localStorage.mstand){this.mstand = Number(localStorage.mstand);}
        else {localStorage.setItem("mstand", 0); this.mstand = Number(localStorage.mstand);}
    }
    this.mstand_func = function(){
        if (this.fart > 0){this.mstand +=  this.fart/10;}
        else {this.mstand -=  this.fart/10;}


        if (typeof(Storage) !== "undefined" && localStorage.mstand) {
            localStorage.mstand = få_hele_tall(this.mstand)
        }
    }
    this.ny_posisjon_map = function(){
        this.x -= min_bil.fart * Math.sin(min_bil.angle);
        this.y += min_bil.fart * Math.cos(min_bil.angle);
    }
    this.finnx = function(x){
        y = 0.00009*x*x - 0.023*x + 2
        return y
    }

    this.asd = 0;
    this.dsa = 0;
    this.auto_kjør = function(){
        this.runder = 1;
        this.kjørefart = 10;
        this.fart = this.kjørefart;
        //90 graders sving
        this.sving1 = 113;
        if (this.asd>330/this.kjørefart && this.dsa<this.sving1) {this.dsa++; this.fart = 1; this.angle += 0.8 * Math.PI / 180;}
        if (this.asd>2090/this.kjørefart && this.dsa<this.sving1*2) {this.dsa++; this.fart = 1; this.angle += 0.8 * Math.PI / 180;}
        if (this.asd>2670/this.kjørefart && this.dsa<this.sving1*3) {this.dsa++; this.fart = 1; this.angle += 0.8 * Math.PI / 180;}
        if (this.asd>2750/this.kjørefart && this.dsa<this.sving1*4) {this.dsa++; this.fart = 1; this.angle += 0.8 * Math.PI / 180;}
        if (this.asd>2970/this.kjørefart && this.dsa<this.sving1*5) {this.dsa++; this.fart = 1; this.angle -= 0.8 * Math.PI / 180;}
        if (this.asd>4240/this.kjørefart && this.dsa<this.sving1*6) {this.dsa++; this.fart = 1; this.angle -= 0.8 * Math.PI / 180;}
        if (this.asd>4520/this.kjørefart && this.dsa<this.sving1*7) {this.dsa++; this.fart = 1; this.angle += 0.8 * Math.PI / 180;}
        if (this.asd>4644/this.kjørefart && this.dsa<this.sving1*8) {this.dsa++; this.fart = 1; this.angle += 0.8 * Math.PI / 180;}
        if (this.fart == this.kjørefart) {this.asd++;}
        //bil1 sin x posisjon, uavhengig av hovedbilen sin x posisjon
        //console.log(bakgrunn.x - bil1.x);
        //console.log(bakgrunn.y - bil1.y);
        //if (bakgrunn.x - bil1.x<2635 || bakgrunn.x - bil1.x>2725){console.log("PETTER  SOLBERG");}
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
        if (this.fart * 8 < 2000) {this.moveAngle *= this.finnx(this.fart * 8)}
    }
}



function stop_bil() {min_bil.fart = 0;}
function få_hele_tall(x) {y = Math.floor((x * 10) / 10); return y}

function oppdater_spill() {
    platform.tøm();
    platform.resize1();
    if (typeof for_liten_vindu_advarsel !== "undefined") {
        for_liten_vindu_advarsel.tekst = "Vennligst bruk større skjerm for bedre spill-opplevelse";
        for_liten_vindu_advarsel.oppdater_firekant_tekst();
    }
    min_bil.moveAngle = 0;
    bil1.moveAngle = 0;
    bakgrunn.moveAngle = 0;
    //console.log(localStorage.getItem("kroner"));
    min_bil.fartometer = Math.floor((min_bil.fart * 100) / 100 * 8 + 0.4);
    fartometer.tekst = min_bil.fartometer + "KM/T";
    if (min_bil.gir == 0){
        gira.tekst = "Gir: R";
    }
    else {
        gira.tekst = "Gir:" + min_bil.gir;
    }

    //bil1.kjøra()
    bil1.ny_posisjon2();
    målstrek.ny_posisjon2();
    bakgrunn.kjøra()
    bakgrunn.ny_posisjon_map();
    min_bil.kjøra();
    min_bil.ny_posisjon();
    min_bil.mstand_func();
    bakgrunn.oppdater_firekant_bakgrunn();
    målstrek.oppdater_firekant_knapp();

    bil1.auto_kjør();
    bil1.oppdater_firekant_bil();
    min_bil.oppdater_firekant_min_bil();
    min_bil.rørte(bil1)
    //overlag.oppdater_firekant()
    if (er_telefon){
        gas_pedal.oppdater_firekant_knapp();
        brems_pedal.oppdater_firekant_knapp();
        platform.trykketpå(gas_pedal)
        platform.trykketpå(brems_pedal)
    }
    fartometer.oppdater_firekant_tekst();
    gira.oppdater_firekant_tekst();
    fullskjerm_knapp.oppdater_firekant_knapp();
}
