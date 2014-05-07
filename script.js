/**
 * Created by gast-c31 on 06.05.14
 */

var container;
var renderer;
var scene;
var camera;
var player;
var ambientLight, directLight;

function onLoad() {
    //initialize
    container = document.getElementById("container");
    container.style.width = window.innerWidth + "px";
    container.style.height = window.innerHeight + "px";

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(container.offsetWidth, container.offsetHeight);

    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, container.offsetWidth/container.offsetHeight, 1, 1000);
    camera.position.y = 12;
    camera.position.z = 8;
    camera.rotation.x = -Math.PI/4;
    scene.add(camera);


    //create player
    player = new THREE.Mesh(new THREE.SphereGeometry(1,20,10), new THREE.MeshPhongMaterial({color: 0xff0000, wireframe:false}));
    player.position.y = 0.5;
    scene.add(player);

    //create ambient light
    ambientLight = new THREE.AmbientLight(0x505050);
    scene.add(ambientLight);

    //create direct light
    directLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directLight);



    //start
    addListener();
    floor();
    run();
}

function run() {
    renderer.render(scene, camera);



    requestAnimationFrame(run);
}

function createRoom() {

}

function addListener() {
    var dom = renderer.domElement;
    //dom.addEventListener('onKeyDown', onKeyDown(e), false);
    //dom.addEventListener('onKeyUp', onKeyUp(e), false);
    dom.addEventListener('onMouseUp', onMouseUp(), false);
}

function onKeyUp(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    console.log(key);
}
function onKeyDown(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    console.log(key);
}
function onMouseUp() {

}


var mouse = {x: 0, y: 0};

document.addEventListener('mousemove', function(e){
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
}, false);