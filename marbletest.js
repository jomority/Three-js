/**
 * Created by gast-c11 on 07.05.14.
 */
var container;
var renderer;
var scene;
var camera;
var plane, plane2, plane3, plane4;

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