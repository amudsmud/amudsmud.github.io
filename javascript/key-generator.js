//key generator
function nykey(nonencrypted, jane) {
    var list_bokstaver = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k","l", "m", "n","o", "p", "q", "r","s", "t", "u", "v", "w",
    "x", "y", "z", "æ", "ø", "å", " ", "!", "#", "$", "%", "&", "/", "=", "®", "¥", "‰"]
    var list_tall= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var encry = ""
        for (i=0; i < nonencrypted.length; i++){
            for (o=0; o < list_bokstaver.length; o++){
                if (list_bokstaver[o] == nonencrypted[i]){
                    if (jane == 0) {
                        encry = encry + list_bokstaver[o+10]
                    }
                    if (jane == 1) {
                        encry = encry + list_bokstaver[o-10]
                    }
                }
            }
        }
        if (Number.isInteger(parseInt(encry))){var z = parseInt(encry)}
        else {var z = encry}
    return z
}



function selectText(node) {
    node = document.getElementById(node);

    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
}
const clickable = document.querySelector("#k1");
clickable.addEventListener('click', () => selectText('svar'));
const clickable2 = document.querySelector("#k2");
clickable2.addEventListener('click', () => selectText('svar'));


function nykeytokeygenerator(jane){
    var svaret = nykey(document.getElementById("input-felt").value, jane);
    var svar_felt = document.getElementById("svar");
    svar_felt.innerHTML = svaret;
}
