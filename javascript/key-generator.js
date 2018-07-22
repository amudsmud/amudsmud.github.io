//key generator
function nykey(nonencrypted, jane) {
    var list_bokstaver = ["O", "9", "E", "L", "C", "1", "r", "R", "j", "q", "0", "4", "i", "æ", "t", "8", "y", "h", "c",
    "A", "X", "T", "ø", "K", "3", "W", "N", "z", "5", "å", "v", "6", "Z", "7", "2", " ", "u", "M", "U",
    "o", "g", "S", "b", "k", "I", "G", "x", "s", "Ø", "Æ", "n", "Q", "Y", "F", "a", "p", "l", "P", "f",
    "e", "V", "B", "d", "Å", "H", "m", "w", "J", "D", "!", "#", "$", "%", "&", "/", "=", "®", "¥", "‰"]
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
        if (Number.isInteger(Number(encry))){var z = Number(encry)}
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


function nykeytokeygenerator(jane){
    var svaret = nykey(document.getElementById("input-felt").value, jane);
    var svar_felt = document.getElementById("svar");
    svar_felt.innerHTML = svaret;
}

/*
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
"æ",
"ø",
"å",
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"Æ",
"Ø",
"Å",
" ",
*/
