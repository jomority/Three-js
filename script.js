/**
 * Created by gast-c31 on 06.05.14
 */

var container;
var renderer;
var scene;
var camera;
var player;
var floor1, floor2;
var walll1, walll2, wallr1, wallr2;
var ambientLight, directLight;
var up = false, left = false, right = false;

function onLoad() {
    //initialize
    container = document.getElementById("container");
    container.style.width = window.innerWidth + "px";
    container.style.height = window.innerHeight + "px";

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0xffffff,1);

    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, container.offsetWidth/container.offsetHeight, 1, 1000);
    camera.position.y = 5;
    camera.position.z = 12;
    camera.rotation.x = -Math.PI/16;
    scene.add(camera);


    //create player
    player = new THREE.Mesh(new THREE.SphereGeometry(1,20,10), new THREE.MeshPhongMaterial({color: 0xff0000, wireframe:false}));
    player.position.y = 1;
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

    if(up) {
        player.position.z -= 0.1;
        camera.position.z -= 0.1;
    }
    if(left) {
        player.position.x -= 0.1;
        camera.rotation.z -= 0.01;
        if(camera.rotation.z < -Math.PI/8) camera.rotation.z = -Math.PI/8;
    }
    if(right) {
        player.position.x += 0.1;
        camera.rotation.z += 0.01;
        if(camera.rotation.z > Math.PI/8) camera.rotation.z = Math.PI/8;
    }
    if(!right && !left) {
        camera.rotation.z *= 0.9;
    }



    requestAnimationFrame(run);
}

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