// Smudi car town V0.8 scripts
// all rights reserved 2018

var stickersrc = ["bilder/stickers/supreme.png", "bilder/stickers/apple.png"];
var stickersrc1 = ["bilder/car-number-0.png",
"bilder/car-number-1.png",
"bilder/car-number-2.png",
"bilder/car-number-3.png",
"bilder/car-number-4.png",
"bilder/car-number-5.png",
"bilder/car-number-6.png",
"bilder/car-number-7.png",
"bilder/car-number-8.png",
"bilder/car-number-9.png"];
var load_bakgrunn = new Image();
var load_biler = []
var load_biler_list = ["bilder/kjøretøy/biler/sedan1_default.png",
"bilder/kjøretøy/biler/sedan1_blå.png",
"bilder/kjøretøy/biler/sedan1_kraftig_blå.png",
"bilder/kjøretøy/biler/sedan1_grønn.png",
"bilder/kjøretøy/biler/sedan1_neon_grønn.png",
"bilder/kjøretøy/biler/sedan1_gul.png",
"bilder/kjøretøy/biler/sedan1_oransje.png",
"bilder/kjøretøy/biler/sedan1_lilla.png",
"bilder/kjøretøy/biler/sedan1_rosa.png",
"bilder/kjøretøy/biler/sedan1_rød.png",
"bilder/kjøretøy/biler/sedan1_turkis.png",
"bilder/kjøretøy/biler/sedan1_grå.png",
"bilder/kjøretøy/biler/sedan1_svart.png",
"bilder/kjøretøy/biler/Tesla-Model-S-mini.jpg"]

var load_keys = []
var load_keys_list = [
"bilder/car_parts/standard-car-parts-png/png/engine.png",
"bilder/car_parts/standard-car-parts-png/png/turbine.png",
"bilder/car_parts/standard-car-parts-png/png/tire.png",
"bilder/car_parts/standard-car-parts-png/png/break.png",
"bilder/car_parts/standard-car-parts-png/png/exhaust-1.png",
"bilder/car_parts/standard-car-parts-png/png/piston.png",
]
var load_goldkeys = []
var load_goldkeys_list = [
"bilder/car_parts/gold-car-parts-png/png/engine.png",
"bilder/car_parts/gold-car-parts-png/png/turbine.png",
"bilder/car_parts/gold-car-parts-png/png/tire.png",
"bilder/car_parts/gold-car-parts-png/png/break.png",
"bilder/car_parts/gold-car-parts-png/png/exhaust-1.png",
"bilder/car_parts/gold-car-parts-png/png/piston.png",
]

var autobil_list = ["bil1", "bil2", "bil3"]

function start_spill() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        if (confirm("Du bruker telefon, rigth?")){er_telefon = true;};
    }
    //load images før spillet starter
    load_bakgrunn.src = "bilder/map_bilder/map1.png";
    load_bakgrunn.onload = function(){
        if (load_bakgrunn.src.startsWith("https://amudsmud.github.io")){console.log(load_bakgrunn.src.substring(32) + " loaded");}
        else {console.log(load_bakgrunn.src.substring(59) + " loaded");}
    };
    load_min_sticker = []
    for (var i=0; i < 2; i++){
        load_min_sticker[i] = new Image();
        load_min_sticker[i].src = stickersrc[i]
    }

    for (var i=0; i < load_biler_list.length; i++){
        load_biler[i] = new Image();
        load_biler[i].src = load_biler_list[i];
        load_biler[i].addEventListener("load", console.log(load_biler[i].src + " loaded"));
    }
    for (var i=0; i < load_keys_list.length; i++){
        load_keys[i] = new Image();
        load_keys[i].src = load_keys_list[i];
        load_keys[i].addEventListener("load", console.log(load_keys[i].src + " loaded"));
    }
    for (var i=0; i < load_goldkeys_list.length; i++){
        load_goldkeys[i] = new Image();
        load_goldkeys[i].src = load_goldkeys_list[i];
        load_goldkeys[i].addEventListener("load", console.log(load_goldkeys[i].src + " loaded"));
    }
    if (typeof(Storage) !== "undefined" && !localStorage.maxspeedtune) {
        localStorage.setItem("maxspeedtune", nykey("1.05", 0));
    }
    if (typeof(Storage) !== "undefined" && !localStorage.brake) {
        localStorage.setItem("brake", nykey("1.1", 0));
    }
    if (typeof(Storage) !== "undefined" && !localStorage.boost) {
        localStorage.setItem("boost", nykey("1.1", 0));
    }

    menu.start();
    menu.startknapp_func();
    menu.shopknapp_func();
    menu.controlsknapp_func();
    menu.innstillingerknapp_func();
    //platform.start();
    //min_bil = new firekant(50, 100, "grey", 1000, 900);
    //fartometer = new firekant ("25px", "Arial", "black", 1880, 980, "text");
}
function start_spill1() {
    platform.start();
    if (typeof(Storage) !== "undefined" && !localStorage.bil_nr) {
        localStorage.setItem("bil_nr", 0);
    }
    if (typeof(Storage) !== "undefined" && !localStorage.kroner) {
        localStorage.setItem("kroner", nykey("50", 0));
    }
    min_bil = new firekant(50, 105, load_biler[localStorage.bil_nr].src, container.offsetWidth * 0.5, container.offsetHeight * 0.6, "bil");
    for (var i=0; i < autobil_list.length; i++){
        autobil_list[i] = new firekant(50, 105, load_biler[0].src, container.offsetWidth * 0.52, container.offsetHeight * 0.4 + 150*i, "bil");
    }
    bakgrunn = new firekant(3456 * 1.5, 2688 * 1.5, load_bakgrunn.src, container.offsetWidth * 0.5 + 2680, 2688 / 3, "bakgrunn");
    overlag = new firekant(2000, 2000, "black", 0, 0, "overlay");
    fullskjerm_knapp = new firekant(40, 40, "bilder/fullskjerm.png", container.offsetWidth * 0.94, container.offsetHeight * 0.02 , "knapp");
    målstrek = new firekant(110, 10, "white", container.offsetWidth * 0.5-55, container.offsetHeight * 0.28, "knapp");
    shop_platform = new firekant(140, 215, "grey", container.offsetWidth * 0.5+400, container.offsetHeight * -0.083, "knapp");
    shop_platform_tekst = new firekant ("22px", "Arial", "white", container.offsetWidth * 0.5+440, container.offsetHeight * 0.07, "tekst");
    shop_platform_tekst.tekst = "SHOP";
    tuning_platform = new firekant(140, 215, "grey", container.offsetWidth * 0.5+700, container.offsetHeight * -0.083, "knapp");
    tuning_platform_tekst = new firekant ("22px", "Arial", "white", container.offsetWidth * 0.5+730, container.offsetHeight * 0.07, "tekst");
    tuning_platform_tekst.tekst = "TUNING";
    mer_biler_platform = new firekant(170, 120, "grey", container.offsetWidth * 0.5-245, container.offsetHeight * 0, "knapp");
    mer_biler_platform_tekst = new firekant ("20px", "Arial", "white", container.offsetWidth * 0.5-220, container.offsetHeight * 0.09, "tekst");
    mer_biler_platform_tekst.tekst = "KJØP BILER";
    mer_biler_platfor = new firekant(300, 200, "white", container.offsetWidth * 0.5-300, container.offsetHeight * 0.24, "knapp");


    //platform will do: shop.start(); menu.skjul_menu();

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
        carcoins = new firekant ("22px", "Arial", "yellow", container.offsetWidth * 0.03, container.offsetHeight * 0.05, "tekst");
    }
    else {
        fartometer = new firekant ("15px", "Arial", "black", container.offsetWidth * 0.9, container.offsetHeight * 0.97, "tekst");
        gira = new firekant ("16px", "Arial", "black", container.offsetWidth * 0.8, container.offsetHeight * 0.97, "tekst");
        carcoins = new firekant ("20px", "Arial", "yellow", container.offsetWidth * 0.05, container.offsetHeight * 0.05, "tekst");

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
    controlsknapp : document.createElement("button"),
    controlsknapp_func : function() {
        this.controlsknapp.innerHTML = "Controls";
        this.controlsknapp.setAttribute("id", "controlsknapp");
        this.controlsknapp.setAttribute("class", "knapp");
        this.controlsknapp.setAttribute("onclick", "controls.start(); menu.skjul_menu();");
        this.menu.appendChild(this.controlsknapp);
    },
    innstillingerknapp : document.createElement("button"),
    innstillingerknapp_func : function() {
        this.innstillingerknapp.innerHTML = "Settings";
        this.innstillingerknapp.setAttribute("id", "innstillingerknapp");
        this.innstillingerknapp.setAttribute("class", "knapp");
        this.innstillingerknapp.setAttribute("onclick", "tuning.start(); menu.skjul_menu()");/*innstillinger.start(); menu.skjul_menu();*/
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
    shop_vis_penger : document.createElement("h4"),
    shop_menu_list1 : document.createElement("button"),
    produktdiv : document.createElement("div"),
    prikkbeholder : document.createElement("div"),
    gå_tilbake_knapp : document.createElement("div"),
    eier_bil : [0],
    eier_bil2 : [],
    bilde : [],
    produkt : [],
    produkt_pris : [],
    prikker : [],
    velg_knapp : [],
    kjøp_knapp : [],
    start : function() {
        this.shop.setAttribute("id", "shopdiv");
        this.shop.style.display = "block";
        container.style.marginBottom = "100px";
        container.appendChild(this.shop);
        /*__*/
        this.shop_menu.setAttribute("id", "shop_menu");
        this.shop.appendChild(this.shop_menu);
        /*__*/
        this.shop_menu_list1.innerHTML = "Cars"
        this.shop_menu_list1.setAttribute("class", "shop_menu_list");
        this.shop_menu_list1.setAttribute("onclick", "shop.mange_produkter("+load_biler.length+")");
        this.shop_menu.appendChild(this.shop_menu_list1);
        /*__*/
        this.produktdiv.setAttribute("id", "produktdiv");
        this.shop.appendChild(this.produktdiv);
        /*__*/
        this.shop_vis_penger.innerHTML = "CC: " + nykey(localStorage.getItem("kroner"), 1)
        this.shop_vis_penger.setAttribute("class", "shop_vis_penger");
        this.produktdiv.appendChild(this.shop_vis_penger);
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
        for (var i = 0; i < this.produkt.length; i++){
            this.produkt[i].style.display = "none"
            this.produkt_pris[i].style.display = "none"
            this.prikker[i].style.display = "none"
            this.velg_knapp[i].style.display = "none"
        }
    },
    mange_produkter : function(numb) {
        for (var i = 0; i < numb; i++){
            this.produkt[i] = document.createElement("div");
            this.produkt[i].innerHTML = "Car " + (i + 1);
            this.produkt[i].style.display = "none";
            this.produkt[i].setAttribute("class", "produkt");
            //this.produkt2[i].appendChild(this.produkt);
            this.produktdiv.appendChild(this.produkt[i]);

            this.bilde[i] = document.createElement("img");
            this.bilde[i].src = load_biler[i].src
            //this.bilde[i].style.display = "none";
            this.bilde[i].setAttribute("class", "produkt_bilde");
            //this.produkt2[i].appendChild(this.produkt);
            this.produkt[i].appendChild(this.bilde[i]);
        }
        this.produkt[0].pris = 100;
        this.produkt[1].pris = 800;
        this.produkt[2].pris = 400;
        this.produkt[3].pris = 1000;
        this.produkt[4].pris = 1200;
        this.produkt[5].pris = 900;
        this.produkt[6].pris = 900;
        this.produkt[7].pris = 1100;
        this.produkt[8].pris = 700;
        this.produkt[9].pris = 4000;
        this.produkt[10].pris = 3000;
        this.produkt[11].pris = 10000;
        this.produkt[12].pris = 1500;
        this.produkt[13].pris = 100;

        this.produkt[0].style.display = "block";

        this.prikkbeholder.style.float = "left"
        this.prikkbeholder.style.width = "100%"
        this.produktdiv.appendChild(this.prikkbeholder);
        for (var i = 0; i < numb; i++){
            this.prikker[i] = document.createElement("span");
            this.prikker[i].setAttribute("class", "navi_prikk");
            this.prikkbeholder.appendChild(this.prikker[i]);
            this.prikker[i].setAttribute("onclick", "shop.hvilken_produkt("+i+");");
        }

        for (var i = 0; i < numb; i++){
            this.velg_knapp[i] = document.createElement("button");
            this.velg_knapp[i].innerHTML = "Buy";
            this.velg_knapp[i].style.display = "none";
            this.velg_knapp[i].setAttribute("class", "velg_knapp knapp");
            this.produktdiv.appendChild(this.velg_knapp[i]);
            this.velg_knapp[i].setAttribute("onclick", "shop.kjøp_func("+i+");");
            /*__skrive velg hvis knappen's nummer allerede er i this.eier_bil__*/
            for (x = 0; x < this.eier_bil2.length; x++){
                if (this.eier_bil2[x] == i){
                    this.velg_knapp[i].innerHTML = "Select";
                    this.velg_knapp[i].setAttribute("class", "velg_knapp knapp");
                    this.produktdiv.appendChild(this.velg_knapp[i]);
                    this.velg_knapp[i].setAttribute("onclick", "shop.velg_knapp_func("+i+");");
                }
            }
        }
        this.shop_menu_list1.removeAttribute("onclick");

        for (var i = 0; i < numb; i++){
            this.produkt_pris[i] = document.createElement("h3");
            this.produkt_pris[i].innerHTML = "Price: " + this.produkt[i].pris + "CC"
            this.produkt_pris[i].style.display = "none";
            this.produkt_pris[i].setAttribute("class", "produkt_pris");
            this.produktdiv.appendChild(this.produkt_pris[i]);
        }

    },
    hvilken_produkt : function(m) {
        for (var i = 0; i < this.produkt.length; i++){
            this.produkt[i].style.display = "none"
            this.velg_knapp[i].style.display = "none"
            this.produkt_pris[i].style.display = "none"
            this.prikker[i].style.backgroundColor = "rgb(75,75,75)";
        }
        this.produkt[m].style.display = "block";
        this.velg_knapp[m].style.display = "block"
        this.produkt_pris[m].style.display = "block";
        this.prikker[m].style.backgroundColor = "rgb(40,40,40)";
    },
    velg_knapp_func : function(m) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("bil_nr", m);
        } else {
            console.log("Local Storgate is not supported!");
        }
        if (typeof min_bil !== "undefined"){min_bil.bilde_bil.src = load_biler[localStorage.bil_nr].src}

    },
    kjøp_func : function(m) {
        if (nykey(localStorage.getItem("kroner"), 1) >= this.produkt[m].pris){
            localStorage.eier_bil += "," + m
            this.velg_knapp[m].innerHTML = "Select";
            this.velg_knapp[m].setAttribute("onclick", "shop.velg_knapp_func("+m+");");

            var z = nykey(localStorage.getItem("kroner"), 1)
            z -= this.produkt[m].pris;
            localStorage.setItem("kroner", nykey(z.toString(), 0));
            this.shop_vis_penger.innerHTML = "CC: " + nykey(localStorage.getItem("kroner"), 1)
        }
        else {console.warn("Kjøpet ble ikke gjennomført, error 420: Ikke tilstrekkelige midler.")
        //console.log("%c kjøpet ble kansellert, error 420: ikke tilstrekklig CarCoins", "color: #ff5d0c")
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

var controls = {
    controlsdiv : document.createElement("div"),
    controls_overskrift : document.createElement("h1"),
    gå_tilbake_knapp : document.createElement("div"),
    start : function() {
        this.controlsdiv.setAttribute("id", "controlsdiv");
        this.controlsdiv.style.display = "block";
        /*container.style.marginBottom = "100px";*/
        container.appendChild(this.controlsdiv);
        /*__*/
        this.controls_overskrift.innerHTML = menu.controlsknapp.innerHTML;
        this.controls_overskrift.setAttribute("class", "menu-overskrift");
        this.controls_overskrift.setAttribute("id", "menu-overskrift-controls");
        if (this.controlsdiv.contains(this.controls_overskrift) == false){
            this.controlsdiv.appendChild(this.controls_overskrift);
        };
        /*__*/
        this.gå_tilbake_knapp.innerHTML = "Return";
        this.gå_tilbake_knapp.setAttribute("class", "gå_tilbake_knapp knapp");
        this.gå_tilbake_knapp.style.width = "10%";
        this.gå_tilbake_knapp.style.marginTop = "35px";
        this.gå_tilbake_knapp.setAttribute("onclick", "controls.gå_tilbake();");
        if (this.controlsdiv.contains(this.gå_tilbake_knapp) == false){
            this.controlsdiv.appendChild(this.gå_tilbake_knapp);
        };
        /*__*/
        //kilde til bildet https://www.iconexperience.com/v_collection/icons/?icon=keyboard_key_empty
        if (this.controlsdiv.contains(controls.keydiv) == false){
            controls.nykeydef("bilder/car_controls/W-key.png", " = Drive forward")
            controls.nykeydef("bilder/car_controls/Up-key.png", " = Shift up")
            controls.nykeydef("bilder/car_controls/S-key.png", " = Brake")
            controls.nykeydef("bilder/car_controls/Down-key.png", " = Shift down")
            controls.nykeydef("bilder/car_controls/A-key.png", " = Turn left")
            controls.nykeydef("bilder/car_controls/X-key.png", " = Toggle Headlights")
            controls.nykeydef("bilder/car_controls/D-key.png", " = Turn right")
        };

    },
    nykeydef : function(bildesrc, h1teksten) {
        // lage en ny div med class="keydiv"
        this.keydiv = document.createElement("div");
        this.keydiv.setAttribute("class", "keydiv");
        controls.controlsdiv.appendChild(this.keydiv);

        // lage en ny h1 med class boks
        this.keyh1 = document.createElement("h1");
        this.keyh1.setAttribute("class", "boks");
        this.keyh1.innerHTML = "<img src='" + bildesrc + "' class='controls_keys'>" + h1teksten;
        this.keydiv.appendChild(this.keyh1);

    },
    gå_tilbake : function() {
        this.controlsdiv.style.display = "none"
        menu.menu.style.display = "block";
    }
}


var tuning = {
    tuningdiv : document.createElement("div"),
    tuning_overskrift : document.createElement("h1"),
    gå_tilbake_knapp : document.createElement("div"),
    car_parts_selectdiv : document.createElement("div"),
    car_part_selectdiv : [],
    car_part_img : [],
    car_parts_maindiv : document.createElement("div"),
    car_part_maindiv : document.createElement("div"),
    car_part_maindiv_h1 : [],
    car_part_maindiv_stage : [],
    car_part_maindiv_img : [],
    car_part_maindiv_upgrade_button : [],
    start : function() {
        this.tuningdiv.setAttribute("id", "controlsdiv");
        this.tuningdiv.style.display = "block";
        /*container.style.marginBottom = "100px";*/
        container.appendChild(this.tuningdiv);
        /*__*/
        this.car_parts_selectdiv.setAttribute("id", "car_parts_selectdiv");
        if (this.tuningdiv.contains(this.car_parts_selectdiv) == false){
            this.tuningdiv.appendChild(this.car_parts_selectdiv);
        };
        /*__*/
        this.car_parts_maindiv.setAttribute("id", "car_parts_maindiv");
        if (this.tuningdiv.contains(this.car_parts_maindiv) == false){
            this.tuningdiv.appendChild(this.car_parts_maindiv);
        };
        /*__*/
        this.tuning_overskrift.innerHTML = "Tuning";
        this.tuning_overskrift.setAttribute("class", "menu-overskrift");
        this.tuning_overskrift.setAttribute("id", "menu-overskrift-controls");
        if (this.car_parts_maindiv.contains(this.tuning_overskrift) == false){
            this.car_parts_maindiv.appendChild(this.tuning_overskrift);
        };
        /*__*/
        this.gå_tilbake_knapp.innerHTML = "Return";
        this.gå_tilbake_knapp.setAttribute("class", "gå_tilbake_knapp knapp");
        this.gå_tilbake_knapp.style.width = "10%";
        this.gå_tilbake_knapp.style.marginTop = "35px";
        this.gå_tilbake_knapp.setAttribute("onclick", "tuning.gå_tilbake();");
        if (this.car_parts_maindiv.contains(this.gå_tilbake_knapp) == false){
            this.car_parts_maindiv.appendChild(this.gå_tilbake_knapp);
        };
        if (this.car_parts_selectdiv.contains(tuning.car_part_selectdiv[0]) == false){
            tuning.ny_car_part(load_keys.length)
        };

        this.car_part_maindiv.setAttribute("class", "car_part_maindiv");
        if (this.car_parts_maindiv.contains(this.car_part_maindiv) == false){
            this.car_parts_maindiv.appendChild(this.car_part_maindiv);
        };

    },
    ny_car_part : function(numb) {
        // lage en ny div med class="car_part_selectdiv"
        //car_part_selectdiv: hver enkelt bil del
        //car_parts_selectdiv: hele diven som holder alle "car_part_selectdiv"
        current_car_part = 0;
        for (var i = 0; i < numb; i++){
            this.car_part_selectdiv[i] = document.createElement("div");
            this.car_part_selectdiv[i].setAttribute("class", "car_part_selectdiv");
            tuning.car_parts_selectdiv.appendChild(this.car_part_selectdiv[i]);

            // lage en ny img med class car_part_img
            this.car_part_img[i] = document.createElement("img");
            this.car_part_img[i].setAttribute("class", "car_part_img");
            this.car_part_img[i].src = load_keys[i].src;
            this.car_part_selectdiv[i].appendChild(this.car_part_img[i]);

            this.car_part_maindiv_h1[i] = document.createElement("h1");
            this.car_part_maindiv_h1[i].setAttribute("class", "car_part_maindiv_h1");
            this.car_part_maindiv.appendChild(this.car_part_maindiv_h1[i]);
            this.car_part_maindiv_h1[i].style.display = "none";
            this.car_part_maindiv_h1[current_car_part].style.display = "block";

            this.car_part_maindiv_stage[i] = document.createElement("h1");
            this.car_part_maindiv_stage[i].setAttribute("class", "car_part_maindiv_stage");
            this.car_part_maindiv.appendChild(this.car_part_maindiv_stage[i]);
            this.car_part_maindiv_stage[i].style.display = "none";
            this.car_part_maindiv_stage[current_car_part].style.display = "block";


            this.car_part_maindiv_img[i] = document.createElement("img");
            this.car_part_maindiv_img[i].src = load_keys[i].src;
            this.car_part_maindiv_img[i].setAttribute("class", "car_part_maindiv_img");
            this.car_part_maindiv.appendChild(this.car_part_maindiv_img[i]);
            this.car_part_maindiv_img[i].style.display = "none";
            this.car_part_maindiv_img[current_car_part].style.display = "block";

            this.car_part_maindiv_upgrade_button[i] = document.createElement("button");
            this.car_part_maindiv_upgrade_button[i].innerHTML = "upgrade"
            this.car_part_maindiv_upgrade_button[i].setAttribute("class", "car_part_maindiv_upgrade_button");
            this.car_part_maindiv_upgrade_button[i].setAttribute("onclick", "tuning.upgrade_button(current_car_part)");
            this.car_part_maindiv.appendChild(this.car_part_maindiv_upgrade_button[i]);
            this.car_part_maindiv_upgrade_button[i].style.display = "none";
            this.car_part_maindiv_upgrade_button[current_car_part].style.display = "block";


            this.car_part_selectdiv[i].setAttribute("onclick", "tuning.hvilken_bildel("+i+");");

        };
        this.car_part_maindiv_h1[0].innerHTML = "Engine";
        this.car_part_maindiv_h1[1].innerHTML = "Air intake";
        this.car_part_maindiv_h1[2].innerHTML = "Wheels";
        this.car_part_maindiv_h1[3].innerHTML = "Brakes";
        this.car_part_maindiv_h1[4].innerHTML = "Exhaust";
        this.car_part_maindiv_h1[5].innerHTML = "Piston";
        this.car_part_maindiv_stage[0].innerHTML = "Stage: " + Math.floor(((nykey(localStorage.getItem("maxspeedtune"), 1) - 1) * 20) / 1);
        this.car_part_maindiv_stage[1].innerHTML = "Stage: " + Math.floor(((nykey(localStorage.getItem("maxspeedtune"), 1) - 1) * 20) / 1);
        this.car_part_maindiv_stage[2].innerHTML = "Stage: " + Math.floor(((nykey(localStorage.getItem("brake"), 1) - 1) * 10) / 1);
        this.car_part_maindiv_stage[3].innerHTML = "Stage: " + Math.floor(((nykey(localStorage.getItem("brake"), 1) - 1) * 10) / 1);
        this.car_part_maindiv_stage[4].innerHTML = "Stage: " + Math.floor(((nykey(localStorage.getItem("boost"), 1) - 1) * 10) / 1);
        this.car_part_maindiv_stage[5].innerHTML = "Stage: " + Math.floor(((nykey(localStorage.getItem("boost"), 1) - 1) * 10) / 1);


        if (nykey(localStorage.getItem("maxspeedtune"), 1) == 2){
            this.car_part_img[0].src = load_goldkeys[0].src;
            this.car_part_img[1].src = load_goldkeys[1].src;
            this.car_part_maindiv_img[0].src = load_goldkeys[0].src;
            this.car_part_maindiv_img[1].src = load_goldkeys[1].src;
        }
        if (nykey(localStorage.getItem("brake"), 1) == 4){
            this.car_part_img[2].src = load_goldkeys[2].src;
            this.car_part_img[3].src = load_goldkeys[3].src;
            this.car_part_maindiv_img[2].src = load_goldkeys[2].src;
            this.car_part_maindiv_img[3].src = load_goldkeys[3].src;
        }
        if (nykey(localStorage.getItem("boost"), 1) == 3){
            this.car_part_img[4].src = load_goldkeys[4].src;
            this.car_part_img[5].src = load_goldkeys[5].src;
            this.car_part_maindiv_img[4].src = load_goldkeys[4].src;
            this.car_part_maindiv_img[5].src = load_goldkeys[5].src;
        }

    },
    hvilken_bildel : function(m) {
        tuning.car_part_maindiv_img[current_car_part].style.display = "none"
        tuning.car_part_maindiv_h1[current_car_part].style.display = "none"
        tuning.car_part_maindiv_stage[current_car_part].style.display = "none"
        tuning.car_part_maindiv_upgrade_button[current_car_part].style.display = "none"


        tuning.car_part_maindiv_img[m].style.display = "block"
        tuning.car_part_maindiv_h1[m].style.display = "block"
        tuning.car_part_maindiv_stage[m].style.display = "block"
        tuning.car_part_maindiv_upgrade_button[m].style.display = "block"

        current_car_part = m;
    },
    gå_tilbake : function() {
        this.tuningdiv.style.display = "none"
        menu.menu.style.display = "block";
    },
    upgrade_button : function(m) {
        var zmaxspeed = nykey(localStorage.getItem("maxspeedtune"), 1)
        var zboost = nykey(localStorage.getItem("boost"), 1)
        var zbrake = nykey(localStorage.getItem("brake"), 1)
        zmaxspeed = Number(zmaxspeed) + 0.05;
        zboost = Number(zboost) + 0.1;
        zbrake = Number(zbrake) + 0.1;
        if (zmaxspeed > 2 || zmaxspeed == 2){zmaxspeed = 2; tuning.car_part_img[0].src = load_goldkeys[0].src;
            tuning.car_part_maindiv_img[0].src = load_goldkeys[0].src;
            tuning.car_part_img[1].src = load_goldkeys[1].src;
            tuning.car_part_maindiv_img[1].src = load_goldkeys[1].src;
        }
        if (zbrake > 4 || zbrake == 4){zbrake = 4;
            tuning.car_part_img[2].src = load_goldkeys[2].src;
            tuning.car_part_maindiv_img[2].src = load_goldkeys[2].src;
            tuning.car_part_img[3].src = load_goldkeys[3].src;
            tuning.car_part_maindiv_img[3].src = load_goldkeys[3].src;
        }
        if (zboost > 3 || zboost == 3){zboost = 3;
            tuning.car_part_img[4].src = load_goldkeys[4].src;
            tuning.car_part_maindiv_img[4].src = load_goldkeys[4].src;
            tuning.car_part_img[5].src = load_goldkeys[5].src;
            tuning.car_part_maindiv_img[5].src = load_goldkeys[5].src;
        }
        if (m == 0){localStorage.setItem("maxspeedtune", nykey(zmaxspeed.toString(), 0));};
        if (m == 1){localStorage.setItem("maxspeedtune", nykey(zmaxspeed.toString(), 0));};
        if (m == 2){localStorage.setItem("brake", nykey(zbrake.toString(), 0));};
        if (m == 3){localStorage.setItem("brake", nykey(zbrake.toString(), 0));};
        if (m == 4){localStorage.setItem("boost", nykey(zboost.toString(), 0));};
        if (m == 5){localStorage.setItem("boost", nykey(zboost.toString(), 0));};

        tuning.car_part_maindiv_stage[0].innerHTML = "Stage: " + Math.floor(((nykey(localStorage.getItem("maxspeedtune"), 1) - 1) * 20) / 1);
        tuning.car_part_maindiv_stage[1].innerHTML = "Stage: " + Math.floor(((nykey(localStorage.getItem("maxspeedtune"), 1) - 1) * 20) / 1);
        this.car_part_maindiv_stage[2].innerHTML = "Stage: " + Math.floor(((nykey(localStorage.getItem("brake"), 1) - 1) * 10) / 1);
        this.car_part_maindiv_stage[3].innerHTML = "Stage: " + Math.floor(((nykey(localStorage.getItem("brake"), 1) - 1) * 10) / 1);
        this.car_part_maindiv_stage[4].innerHTML = "Stage: " + Math.floor(((nykey(localStorage.getItem("boost"), 1) - 1) * 10) / 1);
        this.car_part_maindiv_stage[5].innerHTML = "Stage: " + Math.floor(((nykey(localStorage.getItem("boost"), 1) - 1) * 10) / 1);

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
        /*__få x og y koordinatene til musepekeren__*/
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
        /*__*/
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            platform.keys = (platform.keys || []);
            platform.keys[e.keyCode] = true;
        });
        window.addEventListener('keyup', function (e) {
            e.preventDefault();
            platform.keys[e.keyCode] = false;
        });

        window.addEventListener('keydown', function (e) {
            platform.keysDown = (platform.keysDown || []);
            e.preventDefault();
            if (platform.keysDown[e.keyCode] == false){
                platform.keysDown[e.keyCode] = true;
            }
            else {platform.keysDown[e.keyCode] = false;}
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
        carcoins.y = container.offsetHeight * 0.05;


        if (window.innerWidth < 450){
            fullskjerm_knapp.x = container.offsetWidth * 0.85;
            if (er_telefon){
                gas_pedal.x = container.offsetWidth * 0.8;
                brems_pedal.x = container.offsetWidth * 0.6;
            }
            fartometer.x = container.offsetWidth * 0.85;
            gira.x = container.offsetWidth * 0.7;
            carcoins.x = container.offsetWidth * 0.05;
        }
        else if (window.innerWidth < 900){
            fullskjerm_knapp.x = container.offsetWidth * 0.9;
            if (er_telefon){
                gas_pedal.x = container.offsetWidth * 0.85;
                brems_pedal.x = container.offsetWidth * 0.7;
            }
            fartometer.x = container.offsetWidth * 0.9;
            gira.x = container.offsetWidth * 0.8;
            carcoins.x = container.offsetWidth * 0.04;
        }
        else{
            fullskjerm_knapp.x = container.offsetWidth * 0.94;
            if (er_telefon){
                gas_pedal.x = container.offsetWidth * 0.9;
                brems_pedal.x = container.offsetWidth * 0.8;
            }
            fartometer.x = container.offsetWidth * 0.92;
            gira.x = container.offsetWidth * 0.86;
            carcoins.x = container.offsetWidth * 0.03;
        }
    },
    resetalt : function() {
        bakgrunn.x = container.offsetWidth * 0.5 + 2680
        bakgrunn.y = 2688 / 3
        bakgrunn.fart = 0;
        min_bil.fart = 0;
        min_bil.gir = 1
        min_bil.lysbool = false
        min_bil.angle = 0;
        for (var i=0; i < autobil_list.length; i++){
            autobil_list[i].angle = 0;
            autobil_list[i].x = 480
            autobil_list[i].y = 400
            autobil_list[i].asd = 0
            autobil_list[i].dsa = 0
        }
    },
    tøm : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    vis : function() {
        this.canvas.style.display = "block";
        startknapp.style.display = "none";
        shopknapp.style.display = "none";
        controlsknapp.style.display = "none"
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
        this.bilde_sticker.src = stickersrc[0];
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
    this.maksfart = 10;
    this.x = x;
    this.y = y;
    this.mstand = 0;
    this.bilishop = false;
    this.bilituning = false;

    var noe = platform.context;

    this.oppdater_firekant_bakgrunn = function(){
        noe.save();
        noe.translate(this.x, this.y);
        noe.rotate(this.angle);
        noe.drawImage(this.bilde_bakgrunn, this.bredde / -1.2, this.høyde / -2, this.bredde, this.høyde);
        noe.restore();
    }

    this.oppdater_firekant_tekst = function(){
        noe.font = this.bredde + " " + this.høyde;
        noe.fillStyle = this.farge;
        noe.fillText(this.tekst, this.x, this.y);
    }


    this.oppdater_firekant_knapp = function(){
        if (this.farge.startsWith("bilder")){
            noe.drawImage(this.bilde_knapp, this.x, this.y, this.bredde, this.høyde);
        }
        else {
            noe.fillStyle = this.farge;
            noe.fillRect(this.x, this.y, this.bredde, this.høyde);
        }
    }

    this.oppdater_firekant_overlay = function(){
        if (this.type == "overlay"){
            noe.globalAlpha = 0.8;
            //noe.globalCompositeOperation = "overlay";
            noe.fillStyle = this.farge;
            noe.fillRect(this.x, this.y, this.bredde, this.høyde);
        }

    }


    this.oppdater_firekant_bil = function(){
        var lys2 = platform.context;
        var sticker1 = platform.context;
        this.bilde_sticker = new Image();
        for (var i=0; i < autobil_list.length; i++){
            autobil_list[i].bilde_sticker.src = stickersrc1[i];
        }
        //this.bilde_sticker.src = stickersrc1[0];
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

        sticker1.save();
        sticker1.translate(this.x, this.y);
        sticker1.rotate(this.angle);
        sticker1.drawImage(this.bilde_sticker, -6, this.høyde / -1.7, 14, 16);
        sticker1.restore();
    }

    this.oppdater_firekant_min_bil = function(){
        var lys1 = platform.context;
        var lys2 = platform.context;
        var lys3 = platform.context;
        var sticker1 = platform.context;

        if (platform.keysDown && platform.keysDown[88]) {this.lysbool = true;}
        else {this.lysbool = false}

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
        if (this.x - ting.x > -37
            && this.x - ting.x < 37
            && this.y - ting.y > -85
            && this.y - ting.y < 85){
                console.log("KRÆSJ");
                return true;
            }
    }
    this.rørtemålstrek = function(ting){
        if (this.x > ting.x
            && this.x < ting.x + ting.bredde
            && this.y > ting.y
            && this.y + 30< ting.y + ting.høyde + 70){
                return true;
            }
    }
    this.erinni = function(ting){
        if (this.x < ting.x + ting.bredde
            && this.x > ting.x
            && this.y < ting.y + ting.høyde
            && this.y > ting.y){
                return true;
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
    var mstand_temp = 0
    this.mstand_func = function(){
        //når fart er positiv
        if (this.fart > 0){this.mstand +=  this.fart/10; mstand_temp +=  this.fart/10;}
        //når fart er negativ
        else {this.mstand -=  this.fart/10;  mstand_temp -=  this.fart/10;}


        if (typeof(Storage) !== "undefined" && localStorage.mstand) {
            localStorage.mstand = få_hele_tall(this.mstand)
        }

        // for CC til min_bil
        if (mstand_temp > 550 && this.rørtemålstrek(målstrek)) {
            mstand_temp = 0;
            this.CCperrunde = 100;
            var z = nykey(localStorage.getItem("kroner"), 1)
            z += this.CCperrunde;
            localStorage.setItem("kroner", nykey(z.toString(), 0));
        }
    }
    this.ny_posisjon_map = function(){
        this.x -= min_bil.fart * Math.sin(min_bil.angle);
        this.y += min_bil.fart * Math.cos(min_bil.angle);
    }
    this.finnx = function(x){
        //maks fart 128
        //0.00009*x*x - 0.023*x + 2
        //maks fart 311 (230)
        var y = 0.000000000918546*x*x*x*x - 0.000000778869179*x*x*x + 0.000239225998386*x*x - 0.033386551744491*x + 2.22260804529812;
        return y
    }
    this.kjørefart = 4;
    for (var i=0; i < autobil_list.length; i++){
        //150 får jeg fra linje 70(hvor langt det er mellom hver bil)
        autobil_list[i].asd = 0 - (150/autobil_list[i].kjørefart) * i ;
        autobil_list[i].dsa = 0;
    }
    this.auto_kjør = function(){
        this.runder = 1;
        this.fart = this.kjørefart;
        //90 graders sving
        this.sving1 = 113;
        if (this.asd>330/this.kjørefart && this.dsa<this.sving1) {this.dsa++; this.fart = 1; this.angle += 0.8 * Math.PI / 180;}
        if (this.asd>2090/this.kjørefart && this.dsa<this.sving1*2) {this.dsa++; this.fart = 1; this.angle += 0.8 * Math.PI / 180;}
        if (this.asd>2690/this.kjørefart && this.dsa<this.sving1*3) {this.dsa++; this.fart = 1; this.angle += 0.8 * Math.PI / 180;}
        if (this.asd>2770/this.kjørefart && this.dsa<this.sving1*4) {this.dsa++; this.fart = 1; this.angle += 0.8 * Math.PI / 180;}
        if (this.asd>2990/this.kjørefart && this.dsa<this.sving1*5) {this.dsa++; this.fart = 1; this.angle -= 0.8 * Math.PI / 180;}
        if (this.asd>4270/this.kjørefart && this.dsa<this.sving1*6) {this.dsa++; this.fart = 1; this.angle -= 0.8 * Math.PI / 180;}
        if (this.asd>4540/this.kjørefart && this.dsa<this.sving1*7) {this.dsa++; this.fart = 1; this.angle += 0.8 * Math.PI / 180;}
        if (this.asd>4664/this.kjørefart && this.dsa<this.sving1*8) {this.dsa++; this.fart = 1; this.angle += 0.8 * Math.PI / 180;}
        if (this.asd>4946/this.kjørefart && this.dsa<this.sving1*9) {
            for (var i=0; i < autobil_list.length; i++){
                if (this.asd == autobil_list[i].asd){
                    autobil_list[i].auto_kjør_restart();
                }
            }
            this.dsa++;
        }
        if (this.fart == this.kjørefart) {this.asd++;}
        //autobil_list[0] sin x posisjon, uavhengig av hovedbilen sin x posisjon
        //if (bakgrunn.x - autobil_list[0].x<2635 || bakgrunn.x - autobil_list[0].x>2725){console.log("PETTER  SOLBERG");}
    }
    this.auto_kjør_restart = function(){
        for (var i=0; i < autobil_list.length; i++){
            if (this.asd == autobil_list[i].asd){
                this.CCperrunde = 30;
                if (bakgrunn.y - this.y !== 616){
                    this.y = bakgrunn.y - 616
                }
                if (bakgrunn.x - this.x !== 2664){
                    this.x = bakgrunn.x - 2664;
                }
                this.fart = 0;
                this.angle = 0;
                this.asd = 0;
                this.dsa = 0;
            }
        }

        var z = nykey(localStorage.getItem("kroner"), 1)
        z += this.CCperrunde;
        localStorage.setItem("kroner", nykey(z.toString(), 0));
    }
    this.kjøra = function(){
        if (this.gir == 4){
            this.maksfart = 70 / 8 * nykey(localStorage.getItem("maxspeedtune"), 1);
            if (platform.keys && platform.keys[40] && this.fart * 8 < 64 * nykey(localStorage.getItem("maxspeedtune"), 1)) {this.gir -= 1;}/*Ned pil*/
            if (platform.keys && platform.keys[65]) {this.moveAngle = -3 * (this.fart / 8);}/*a*/
            if (platform.keys && platform.keys[68]) {this.moveAngle = 3 * (this.fart / 8);}/*d*/
            if (platform.keys && platform.keys[87] && this.fart * 8 < 20 || gas_pedal_active == true && this.fart * 8 < 20 ) {this.fart += 0.26 / 8 * nykey(localStorage.getItem("boost"), 1);}/*w*/
            else if (platform.keys && platform.keys[87] && this.fart * 8 < 35 || gas_pedal_active == true && this.fart * 8 < 35) {this.fart += 0.3 / 8 * nykey(localStorage.getItem("boost"), 1);}/*w*/
            else if (platform.keys && platform.keys[87] && this.fart * 8 < 50 || gas_pedal_active == true && this.fart * 8 < 50) {this.fart += 0.33 / 8 * nykey(localStorage.getItem("boost"), 1);}/*w*/
            else if (platform.keys && platform.keys[87] || gas_pedal_active == true) {this.fart += 0.35 / 8 * nykey(localStorage.getItem("boost"), 1);}/*w*/
            if (platform.keys && platform.keys[83] || brems_pedal_active == true) {this.fart -= 0.25 / 8 * nykey(localStorage.getItem("brake"), 1);}/*s*/
            if (this.fart > 0) {this.fart -= 0.25 / 8} else {this.fart = 0;}
        }
        if (this.gir == 3){
            this.maksfart = 54 / 8 * nykey(localStorage.getItem("maxspeedtune"), 1);
            if (platform.keys && platform.keys[38] && this.fart * 8 > 50 * nykey(localStorage.getItem("maxspeedtune"), 1)) {this.gir += 1;}/*Opp pil*/
            if (platform.keys && platform.keys[40] && this.fart * 8 < 45 * nykey(localStorage.getItem("maxspeedtune"), 1)) {this.gir -= 1;}/*Ned pil*/
            if (platform.keys && platform.keys[65]) {this.moveAngle = -3 * (this.fart / 8);}/*a*/
            if (platform.keys && platform.keys[68]) {this.moveAngle = 3 * (this.fart / 8);}/*d*/
            if (platform.keys && platform.keys[87] && this.fart * 8 < 20 || gas_pedal_active == true && this.fart * 8 < 20) {this.fart += 0.3 / 8 * nykey(localStorage.getItem("boost"), 1);}/*w*/
            else if (platform.keys && platform.keys[87] && this.fart * 8 < 35 || gas_pedal_active == true && this.fart * 8 < 35) {this.fart += 0.33 / 8 * nykey(localStorage.getItem("boost"), 1);}/*w*/
            else if (platform.keys && platform.keys[87] || gas_pedal_active == true) {this.fart += 0.35 / 8 * nykey(localStorage.getItem("boost"), 1);}/*w*/
            if (platform.keys && platform.keys[83] || brems_pedal_active == true) {this.fart -= 0.25 / 8 * nykey(localStorage.getItem("brake"), 1);}/*s*/
            if (this.fart > 0) {this.fart -= 0.25 / 8} else {this.fart = 0;}
        }
        if (this.gir == 2){
            this.maksfart = 38 / 8 * nykey(localStorage.getItem("maxspeedtune"), 1);
            if (platform.keys && platform.keys[38] && this.fart > 35 / 8 * nykey(localStorage.getItem("maxspeedtune"), 1)) {this.gir += 1;}/*Opp pil*/
            if (platform.keys && platform.keys[40] && this.fart < 25 / 8 * nykey(localStorage.getItem("maxspeedtune"), 1)) {this.gir -= 1;}/*Ned pil*/
            if (platform.keys && platform.keys[65]) {this.moveAngle = -3 * (this.fart / 8);}/*a*/
            if (platform.keys && platform.keys[68]) {this.moveAngle = 3 * (this.fart / 8);}/*d*/
            if (platform.keys && platform.keys[87] && this.fart * 8 < 18 || gas_pedal_active == true && this.fart * 8 < 18) {this.fart += 0.3 / 8 * nykey(localStorage.getItem("boost"), 1);}/*w*/
            else if (platform.keys && platform.keys[87] && this.fart * 8 < 25 || gas_pedal_active == true && this.fart * 8 < 25) {this.fart += 0.33 / 8 * nykey(localStorage.getItem("boost"), 1);}/*w*/
            else if (platform.keys && platform.keys[87] || gas_pedal_active == true) {this.fart += 0.35 / 8 * nykey(localStorage.getItem("boost"), 1);}/*w*/
            if (platform.keys && platform.keys[83] || brems_pedal_active == true) {this.fart -= 0.25 / 8 * nykey(localStorage.getItem("brake"), 1);}/*s*/
            if (this.fart > 0) {this.fart -= 0.25 / 8} else {this.fart = 0;}
        }
        if (this.gir == 1){
            this.maksfart = 22 / 8 * nykey(localStorage.getItem("maxspeedtune"), 1);
            if (platform.keys && platform.keys[38] && this.fart > 15 / 8  * nykey(localStorage.getItem("maxspeedtune"), 1)) {this.gir += 1;}/*Opp pil*/
            if (platform.keys && platform.keys[40] && this.fart == 0) {this.gir -= 1;}/*Ned pil*/
            if (platform.keys && platform.keys[65]) {this.moveAngle = -3 * (this.fart / 8);}/*a*/
            if (platform.keys && platform.keys[68]) {this.moveAngle = 3 * (this.fart / 8);}/*d*/
            if (platform.keys && platform.keys[87] || gas_pedal_active == true) {this.fart += 0.35 / 8 * nykey(localStorage.getItem("boost"), 1);}/*w*/
            if (platform.keys && platform.keys[83] || brems_pedal_active == true) {this.fart -= 0.25 / 8 * nykey(localStorage.getItem("brake"), 1);}/*s*/
            if (this.fart > 0) {this.fart -= 0.20 / 8} else {this.fart = 0;}
        }
        if (this.fart > this.maksfart && this.gir > 0) {this.fart = this.maksfart;};
        if (this.gir == 0){
            this.maksfart = -20 / 8 * nykey(localStorage.getItem("maxspeedtune"), 1);
            if (platform.keys && platform.keys[38] && this.fart == 0) {this.gir += 1;}/*Opp pil*/
            if (platform.keys && platform.keys[65]) {this.moveAngle = -2 * (this.fart / 4);}/*a*/
            if (platform.keys && platform.keys[68]) {this.moveAngle = 2 * (this.fart / 4);}/*d*/
            if (platform.keys && platform.keys[87] || gas_pedal_active == true) {this.fart -= 0.35 / 8 * nykey(localStorage.getItem("boost"), 1);}/*w*/
            if (platform.keys && platform.keys[83] || brems_pedal_active == true) {this.fart += 0.25 / 8 * nykey(localStorage.getItem("brake"), 1);}/*s*/
            if (this.fart < 0) {this.fart += 0.3 / 8} else {this.fart = 0;}
            if (this.fart < this.maksfart) {this.fart = this.maksfart;};
        }
        //gange vinkelen bilen snur på i forholde til farta, jo saktere, desto kraftigere sving
        if (this.fart * 8 < -25) {this.moveAngle *= 1.2}
        else if (this.fart * 8 < -15) {this.moveAngle *= 1.4}
        else if (this.fart * 8 < -10) {this.moveAngle *= 1.6}
        else if (this.fart * 8 < -5) {this.moveAngle *= 1.8}
        else if (this.fart * 8 < 500) {this.moveAngle *= this.finnx(this.fart * 8)}
        //console.log(min_bil.fart);
    }
}



function stop_bil() {min_bil.fart = 0;}
function få_hele_tall(x) {var y = Math.floor((x * 10) / 10); return y}

function oppdater_spill() {
    platform.tøm();
    platform.resize1();
    min_bil.moveAngle = 0;
    bakgrunn.moveAngle = 0;
    min_bil.fartometer = Math.floor((min_bil.fart * 100) / 100 * 8 + 0.4);
    fartometer.tekst = min_bil.fartometer + "KM/T";
    if (min_bil.gir == 0){gira.tekst = "Gir: R";}
    else {gira.tekst = "Gir:" + min_bil.gir;}
    carcoins.tekst = "CC: " + nykey(localStorage.getItem("kroner"), 1)
    shop_platform.ny_posisjon2();
    shop_platform_tekst.ny_posisjon2();
    tuning_platform.ny_posisjon2();
    tuning_platform_tekst.ny_posisjon2();
    mer_biler_platform.ny_posisjon2();
    mer_biler_platform_tekst.ny_posisjon2();
    målstrek.ny_posisjon2();
    bakgrunn.kjøra()
    bakgrunn.ny_posisjon_map();
    min_bil.kjøra();
    min_bil.ny_posisjon();
    min_bil.mstand_func();
    bakgrunn.oppdater_firekant_bakgrunn();
    målstrek.oppdater_firekant_knapp();
    shop_platform.oppdater_firekant_knapp();
    shop_platform_tekst.oppdater_firekant_tekst();
    tuning_platform.oppdater_firekant_knapp();
    tuning_platform_tekst.oppdater_firekant_tekst();
    mer_biler_platform.oppdater_firekant_knapp();
    mer_biler_platform_tekst.oppdater_firekant_tekst();
    if (typeof for_liten_vindu_advarsel !== "undefined") {
        for_liten_vindu_advarsel.tekst = "Vennligst bruk større skjerm for bedre spill-opplevelse";
        for_liten_vindu_advarsel.oppdater_firekant_tekst();
    }
    if (min_bil.erinni(shop_platform) && !min_bil.bilishop){min_bil.bilishop = true; shop.start(); menu.skjul_menu(); min_bil.fart = 1; bakgrunn.fart = 1;}
    else if (!min_bil.erinni(shop_platform)){min_bil.bilishop = false;}

    if (min_bil.erinni(tuning_platform) && !min_bil.bilituning){min_bil.bilituning = true; tuning.start(); menu.skjul_menu(); min_bil.fart = 1; bakgrunn.fart = 1;}
    else if (!min_bil.erinni(tuning_platform)){min_bil.bilituning = false;}

    if (min_bil.erinni(mer_biler_platform)){
         mer_biler_platfor.oppdater_firekant_knapp();
     }
    else if (!min_bil.erinni(mer_biler_platform)){}

    //min_bil.bilde_bil.src = load_biler[localStorage.bil_nr].src
    for (var i=0; i < autobil_list.length; i++){
        autobil_list[i].moveAngel = 0
        autobil_list[i].ny_posisjon2();
        autobil_list[i].auto_kjør();
        autobil_list[i].oppdater_firekant_bil();
    }
    min_bil.oppdater_firekant_min_bil();
    min_bil.rørte(autobil_list[0]);
    //overlag.oppdater_firekant()
    if (er_telefon){
        gas_pedal.oppdater_firekant_knapp();
        brems_pedal.oppdater_firekant_knapp();
        platform.trykketpå(gas_pedal)
        platform.trykketpå(brems_pedal)
    }
    fartometer.oppdater_firekant_tekst();
    carcoins.oppdater_firekant_tekst();
    gira.oppdater_firekant_tekst();
    fullskjerm_knapp.oppdater_firekant_knapp();
}
