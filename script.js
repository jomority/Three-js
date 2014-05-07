/**
 * Created by gast-c31 on 06.05.14
 */

var container;
var renderer;
var scene;
var camera;

function onLoad() {

    container = document.getElementById("container");
    container.style.width = window.innerWidth + "px";
    container.style.height = window.innerHeight + "px";

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(container.offsetWidth, container.offsetHeight);

    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();


    addMouseHandler();
    run();
}

function run() {
    renderer.render(scene, camera);



    requestAnimationFrame(run);
}

function createRoom() {

}

function addMouseHandler() {
    var dom = renderer.domElement;
    dom.addEventListener('onMouseUp', onMouseUp(), false);
}

function onMouseUp() {

}


var mouse = {x: 0, y: 0};

document.addEventListener('mousemove', function(e){
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
}, false);