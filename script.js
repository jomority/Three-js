/**
 * Created by gast-c31 on 06.05.14
 */

var container;
var renderer;
var scene;
var camera;
var player, vector1;
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

    camera = new THREE.PerspectiveCamera(45, container.offsetWidth/container.offsetHeight, 1, 900);
    camera.position.y = 5;
    camera.position.z = 12;
    camera.rotation.x = -Math.PI/16;
    scene.add(camera);


    //create player
    vector1 = new THREE.Vector3(0,10,-2);
    player = new THREE.Mesh(new THREE.SphereGeometry(1,20,10), new THREE.MeshPhongMaterial({color: 0xff0000, wireframe:false}));
    player.position.y = vector1.y;
    player.position.x = vector1.x;
    player.position.z = vector1.z;
    player.speedX = 0;
    player.radius = 1;
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
    spawn();
}

var temp2 = 1;
function spawn() {
    renderer.render(scene, camera);

    var phi = Math.PI/10*temp2;
    temp2 -=0.01;

    var m = new THREE.Matrix3(
        Math.cos(phi), 0,Math.sin(phi),
        0,             0.95,0,
        -Math.sin(phi),0,Math.cos(phi));

    vector1.applyMatrix3(m);

    player.position.y = vector1.y;
    player.position.x = vector1.x;
    player.position.z = vector1.z;

    if(player.position.y < 1) {
        player.position.y = 1;
        requestAnimationFrame(spawn2);
    } else {
        requestAnimationFrame(spawn);
    }
}

var temp1 = 0;
function spawn2() {
    renderer.render(scene, camera);

    var phi = Math.PI/10*temp2;
    temp1 += phi;

    var m = new THREE.Matrix3(
        Math.cos(phi), 0,Math.sin(phi),
        0,             1,0,
        -Math.sin(phi),0,Math.cos(phi));

    vector1.applyMatrix3(m);

    player.position.y = vector1.y;
    player.position.x = vector1.x;
    player.position.z = vector1.z;

    if(temp1 > Math.PI && player.position.x > -0.1 && player.position.x < 0.1) {
        requestAnimationFrame(run);
    } else {
        requestAnimationFrame(spawn2);
    }
}

function run() {
    renderer.render(scene, camera);

    //camera rotation
    if(up) {
        player.position.z -= 0.1;
        camera.position.z -= 0.1;
        player.rotation.x += 0.1;
    }
    if(left) {
        if(camera.rotation.z > Math.PI/32) {
            camera.rotation.z *= 0.9;
        } else {
            camera.rotation.z -= 0.01;
        }
        if(camera.rotation.z < -Math.PI/8) camera.rotation.z = -Math.PI/8;
    }
    if(right) {
        if(camera.rotation.z < -Math.PI/32) {
            camera.rotation.z *= 0.9;
        } else {
            camera.rotation.z += 0.01;
        }
        if(camera.rotation.z > Math.PI/8) camera.rotation.z = Math.PI/8;
    }
    if(!right && !left) {
        camera.rotation.z *= 0.9;
    }

    //player left + right
    player.speedX += camera.rotation.z/100;
    player.position.x += player.speedX;

    //collision
    if(player.position.x < -5 + player.radius) {
        player.position.x = -5 + player.radius;
        player.speedX = -player.speedX * 0.5;
    } else if(player.position.x > 5 - player.radius) {
        player.position.x = 5 - player.radius;
        player.speedX = -player.speedX * 0.5;
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