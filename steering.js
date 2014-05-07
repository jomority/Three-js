/**
 * Created by gast-c31 on 07.05.14.
 */

function addListener() {
    var dom = renderer.domElement;
    //dom.addEventListener('onKeyDown', onKeyDown(event), false);
    //dom.addEventListener('onKeyUp', onKeyUp(event), false);
    dom.addEventListener('onMouseUp', onMouseUp(), false);
    window.onkeyup = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if(key == 87){
            up = false;
        } else if(key == 65) {
            left = false;
        } else if(key == 68) {
            right = false;
        } else if(key == 83) {
            down = false;
        }
    }
    window.onkeydown = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if(key == 87){
            up = true;
        } else if(key == 65) {
            left = true;
        } else if(key == 68) {
            right = true;
        } else if(key == 83) {
            down = true;
        }
    }
}
function onMouseUp() {

}


var mouse = {x: 0, y: 0};

document.addEventListener('mousemove', function(e){
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
}, false);