/**
 * Created by gast-c31 on 06.05.14.hasköhfköhfasos
 */

var container;
var renderer;
var scene;
var camera;
var cube;
var sphere;
var cylinder;
var plane, plane2, plane3, plane4;
var light, light2;
var animating = true;
var animating2 = true;
var animating3 = true;
var vector, vector2, vector3;
var rs1 = Math.random()*5,rs2 = Math.random()*5,rs3 = Math.random()*5;
var rb1 = false, rb2 = true, rb3 = true;

function onLoad() {

    container = document.getElementById("container");
    container.style.width = window.innerWidth + "px";
    container.style.height = window.innerHeight + "px";

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(container.offsetWidth, container.offsetHeight);

    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();


    camera = new THREE.PerspectiveCamera(45, container.offsetWidth/container.offsetHeight, 1, 100000);
    camera.position.set(0,3,10);
    camera.rotation.x = (-Math.PI/10);
    scene.add(camera);

    light = new THREE.DirectionalLight(0xffffff,1);
    light.position.set(0,1,0);
    scene.add(light);

    light2 = new THREE.AmbientLight(0xaaaaaa);
    scene.add(light2);

    vector3 = new THREE.Vector3(1, 0, 0);

    var geometry = new THREE.BoxGeometry(1,1,1,2,2,2);
    var texture = THREE.ImageUtils.loadTexture('wood2.png', {});
    //var material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
    var material = new THREE.MeshPhongMaterial({map: texture});
    cube = new THREE.Mesh(geometry, material);
    cube.position.x = vector3.x;
    //cube.rotation.y = Math.PI/5;
    scene.add(cube);

    vector = new THREE.Vector3(3, 0, 0);

    var geometry = new THREE.SphereGeometry(1,100,50);
    var texture = THREE.ImageUtils.loadTexture('iron.jpg', {});
    var material = new THREE.MeshPhongMaterial({map: texture});
    //var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = vector.x;
    //sphere.rotation.y = Math.PI/5;directionalLight.castShadow = true;
    scene.add(sphere);

    vector2 = new THREE.Vector3(-3,2,0);

    var geometry = new THREE.CylinderGeometry(1,1,2,100,50);
    var texture = THREE.ImageUtils.loadTexture('lava.png', {});
    var material = new THREE.MeshPhongMaterial({map: texture});
    //var material = new THREE.MeshPhongMaterial({color: 0x0000ff, wireframe: true});
    cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.x = vector2.x;
    cylinder.position.y = vector2.y;
    //sphere.rotation.y = Math.PI/5;
    scene.add(cylinder);


    //createRoom();

    addMouseHandler();

    renderer.render(scene,camera);
    //addMouseHandler();
    run();
}

function run() {
    renderer.render(scene, camera);

    if (animating) {

        cube.rotation.z -= 0.01;
        cube.rotation.y -= 0.01;
        cube.rotation.z -= 0.01;

        if(rb2) {
            rs2 += 0.1;
            if(rs2 >= 5)rb2 = false;
        } else {
            rs2 -= 0.1;
            if(rs2 <= 0.5) {
                rb2 = true;
                rs2 = 0.5;
            }
        }

        var phi = Math.PI/100*rs2;

        var m = new THREE.Matrix3(
            Math.cos(phi),-Math.sin(phi),0,
            Math.sin(phi),Math.cos(phi),0,
            0,0,1);

        vector3.applyMatrix3(m);

        cube.position.x = vector3.x;
        cube.position.y = vector3.y;
        cube.position.z = vector3.z;
    }
    if (animating2) {
        sphere.rotation.z += 0.01;
        sphere.rotation.x += 0.01;
        sphere.rotation.z += 0.01;

        if(rb1) {
            rs1 += 0.1;
            if(rs1 >= 5)rb1 = false;
        } else {
            rs1 -= 0.1;
            if(rs1 <= 0.5) {
                rb1 = true;
                rs1 = 0.5;
            }
        }

        //rs1 += Math.random()-0.5;
        //rs1 *= 0.99;

        var phi = Math.PI/100*rs1;

        var m = new THREE.Matrix3(
            Math.cos(phi), 0,Math.sin(phi),
            0,             1,0,
            -Math.sin(phi),0,Math.cos(phi));

        vector.applyMatrix3(m);

        sphere.position.x = vector.x;
        sphere.position.y = vector.y;
        sphere.position.z = vector.z;
    }
    if(animating3) {
        cylinder.rotation.z += 0.01;
        cylinder.rotation.x -= 0.01;
        cylinder.rotation.z += 0.01;

        if(rb3) {
            rs3 += 0.1;
            if(rs3 >= 5)rb3 = false;
        } else {
            rs3 -= 0.1;
            if(rs3 <= 0.5) {
                rb3 = true;
                rs3 = 0.5;
            }
        }
        //console.log(rs3);

        var phi = Math.PI/100*rs3;

        var m = new THREE.Matrix3(
            1,0,0,
            0,Math.cos(phi),-Math.sin(phi),
            0,Math.sin(phi),Math.cos(phi));

        vector2.applyMatrix3(m);

        cylinder.position.x = vector2.x;
        cylinder.position.y = vector2.y;
        cylinder.position.z = vector2.z;
    }

    //camera.position.z += 0.002;
    //}

    console.log(rs1 + "  " + rs2 + "  " + rs3);

    requestAnimationFrame(run);
}

function createRoom() {
    var geometry = new THREE.PlaneGeometry(10, 10, 1, 1);
    var texture = THREE.ImageUtils.loadTexture('stone.jpg', {});
    var material = new THREE.MeshPhongMaterial({map: texture});
    //var material = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: true});
    plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI/2;
    plane.position.y = -5;
    scene.add(plane);

    var geometry = new THREE.PlaneGeometry(10, 10, 1, 1);
    var texture = THREE.ImageUtils.loadTexture('sand.jpg', {});
    var material = new THREE.MeshPhongMaterial({map: texture});
    //var material = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: true});
    plane2 = new THREE.Mesh(geometry, material);
    //plane2.rotation.x = -Math.PI/2;
    plane2.position.z = -5;
    scene.add(plane2);

    var geometry = new THREE.PlaneGeometry(10, 10, 1, 1);
    var texture = THREE.ImageUtils.loadTexture('sand.jpg', {});
    var material = new THREE.MeshPhongMaterial({map: texture});
    //var material = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: true});
    plane3 = new THREE.Mesh(geometry, material);
    plane3.rotation.y = +Math.PI/2;
    plane3.position.x = -5;
    scene.add(plane3);

    var geometry = new THREE.PlaneGeometry(10, 10, 1, 1);
    var texture = THREE.ImageUtils.loadTexture('sand.jpg', {});
    var material = new THREE.MeshPhongMaterial({map: texture});
    //var material = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: true});
    plane4 = new THREE.Mesh(geometry, material);
    plane4.rotation.y = -Math.PI/2;
    plane4.position.x = 5;
    scene.add(plane4);
}

function addMouseHandler() {
    var dom = renderer.domElement;
    dom.addEventListener('onMouseUp', onMouseUp(), false);
}

function onMouseUp(e) {
    if(mouse.x > window.innerWidth/3 && mouse.x < window.innerWidth/3*2){

        animating = !animating;
    } else if(mouse.x > window.innerWidth*2/3 && mouse.x < window.innerWidth){

        animating2 = !animating2;
    } else if(mouse.x > 0 && mouse.x < window.innerWidth/3){

        animating3 = !animating3;
    }
}


var mouse = {x: 0, y: 0};

document.addEventListener('mousemove', function(e){
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
}, false);