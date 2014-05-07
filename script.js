/**
 * Created by gast-c16 on 05.05.14.
 */

function onLoad(){
    document.getElementById('result').style.borderStyle = "none";
}

function add() {
    document.getElementById('result').value = parseFloat(document.getElementById('number1').value) +
        parseFloat(document.getElementById('number2').value);
    reset();
}
function sub() {
    document.getElementById('result').value = parseFloat(document.getElementById('number1').value) -
        parseFloat(document.getElementById('number2').value);
    reset();
}
function multiply() {
    document.getElementById('result').value = parseFloat(document.getElementById('number1').value) *
        parseFloat(document.getElementById('number2').value);
    reset();
}
function pow() {
    document.getElementById('result').value = Math.pow(parseFloat(document.getElementById('number1').value),
        parseFloat(document.getElementById('number2').value));
    reset();
}
function root() {
    document.getElementById('result').value = Math.pow(parseFloat(document.getElementById('number1').value),
        (1 / parseFloat(document.getElementById('number2').value)));
    reset();
}
function log() {
    document.getElementById('result').value = Math.log(parseFloat(document.getElementById('number1').value)) /
        Math.log(parseFloat(document.getElementById('number2').value));
    reset();
}
function divide() {
    if(parseFloat(document.getElementById('number2').value) == 0) {
        document.getElementById('error').style.visibility = "visible";
        document.getElementById('result').value = "-1";
        document.getElementById('result').style.borderColor = "#FF0000";
        document.getElementById('result').style.borderStyle = "dotted";
    } else {
        document.getElementById('result').value = parseFloat(document.getElementById('number1').value) /
            parseFloat(document.getElementById('number2').value);
        reset();
    }
}
function greater() {
    if(parseFloat(document.getElementById('number1').value) >parseFloat(document.getElementById('number2').value)) {
        document.getElementById('result').value = 1;
    } else {
        document.getElementById('result').value = 0;
    }
    reset();
}
function smaller() {
    if(parseFloat(document.getElementById('number1').value) <parseFloat(document.getElementById('number2').value)) {
        document.getElementById('result').value = 1;
    } else {
        document.getElementById('result').value = 0;
    }
    reset();

}
function reset() {
    document.getElementById('error').style.visibility = "hidden";
    //document.getElementById('result').style.borderColor = "#FFFFFF";
    document.getElementById('result').style.outline = "0";
    document.getElementById('result').style.borderStyle = "none";
}



function addNumbers() {
    var a = 0;
    for(var i = 0; i < parseFloat(document.getElementById('number3').value); i++) {
        var ct = true;
        while(ct) {
            var input = prompt(i + 1 + ". Zahl");
            if(isNaN(parseFloat(input))) {
                alert("ERROR: Enter Number!!!");
            } else {
                a += parseFloat(input);
                ct = false;
            }
        }
    }
    document.getElementById('result2').value = parseFloat(a);
}