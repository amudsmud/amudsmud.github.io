var bil;

function start_spill() {
    platform.start();
    bil = new firekant(40, 100, "grey", 400, 300);
}

var container = document.getElementById("container");

var platform = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 400;
        this.canvas.setAttribute("id", "canvasid");
        this.context = this.canvas.getContext("2d");
        container.appendChild(this.canvas);
        this.interval = setInterval(oppdater_spill, 20);
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
    }
}

function firekant(bredde, høyde, farge, x, y) {
    this.bredde = bredde;
    this.høyde = høyde;
    this.angle = 0;
    this.moveAngle = 0;
    this.fart = 0;
    this.akselerasjon = 0;
    this.fartX = 0;
    this.fartY = 0;
    this.x = x;
    this.y = y;
    this.oppdater_firekant = function(){
        noe = platform.context;
        noe.save();
        noe.translate(this.x, this.y);
        noe.rotate(this.angle);
        noe.fillStyle = farge;
        /*noe.fillRect(this.x, this.y, this.bredde, this.høyde);*/
        noe.fillRect(this.bredde / -2, this.høyde / -2, this.bredde, this.høyde);
        noe.restore();
    }
    this.ny_posisjon = function(){
        this.angle += this.moveAngle * Math.PI / 180;
        this.fart += this.akselerasjon;

        this.x += this.fart * Math.sin(this.angle);
        this.y -= this.fart * Math.cos(this.angle);
    }

}

function stop_bil() {
    bil.fartX = 0;
    bil.fartY = 0;
}

function oppdater_spill() {
    platform.tøm();
    bil.moveAngle = 0;
    bil.fart = 0;
    bil.akselerasjon = 0;
    if (platform.keys && platform.keys[65]) {bil.moveAngle = -1;}
    if (platform.keys && platform.keys[68]) {bil.moveAngle = 1;}
    if (platform.keys && platform.keys[87]) {bil.akselerasjon = 1;}/*38*/
    if (platform.keys && platform.keys[83]) {bil.akselerasjon = -1;}/*40*/

    /*console.log(bil.fartY)

    if (bil.fartX > 0.0) {bil.fartX -= 0.1;}
    if (bil.fartX < 0.0) {bil.fartX += 0.1;}

    if (bil.fartY > 0.0) {bil.fartY -= 0.1;}
    if (bil.fartY < 0.0) {bil.fartY += 0.1;}

    if (bil.fartX < 0.1 && bil.fartY < 0.1 ) {akselerasjon = 1;}
    */
    bil.ny_posisjon();
    bil.oppdater_firekant();
}
