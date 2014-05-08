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
var sky1;
var rendernew = true, actualfloor1 = true;
var ambientLight, directLight; //ambientLight2;
var up = false, left = false, right = false, down = false;
var z;
var objects = new Array();
var meter;
var lost = false;
var spawnnext = true;
var tx;
var lives = 1;

var MAXOBJECTS = 5;

function onLoad() {
    //initialize
    meter = new FPSMeter({graph:1});

    container = document.getElementById("container");
    container.style.width = window.innerWidth + "px";
    container.style.height = window.innerHeight + "px";

    renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x1E90FF,1);

    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x1E90FF, 50, 100);

    camera = new THREE.PerspectiveCamera(45, container.offsetWidth/container.offsetHeight, 1, 100);
    camera.position.y = 5;
    camera.position.z = 12;
    scene.add(camera);


    //create player
    vector1 = new THREE.Vector4(0,100,-30,1);
    //vector1 = new THREE.Vector3(0,1,0);
    var texture = THREE.ImageUtils.loadTexture("amiga.png", {});
    player = new THREE.Mesh(new THREE.SphereGeometry(0.8,20,10), new THREE.MeshLambertMaterial({map:texture}));
    //player = new THREE.Mesh(new THREE.BoxGeometry(1,1,1,1,1,1), new THREE.MeshLambertMaterial({color:0xCC0000}));
    player.position.y = vector1.y;
    player.position.x = vector1.x;
    player.position.z = vector1.z;
    player.speedX = 0;
    player.speedZ = 0;
    player.radius = 0.8;
    player.castShadow = true;
    //player.receiveShadow = true;
    scene.add(player);



    //create ambient light
    ambientLight = new THREE.AmbientLight(0x212223);
    scene.add(ambientLight);
    //ambientLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    //ambientLight2.position.set(0,0,1);
    //scene.add(ambientLight2);

    //create direct light
    directLight = new THREE.DirectionalLight(0xffffff, 1);
    directLight.position.y = 20;
    directLight.position.z = 10;
    directLight.position.x = 5;
    directLight.castShadow = true;

    directLight.shadowDarkness = 0.5;
    directLight.shadowCameraVisible = false;

    directLight.shadowCameraLeft = -5;
    directLight.shadowCameraRight = 2;
    directLight.shadowCameraTop = 2;
    directLight.shadowCameraBottom = -2;

    directLight.shadowCameraNear = 5;
    directLight.shadowCameraFar = 5000;
    directLight.shadowCameraFov = 45;

    directLight.shadowMapBias = 0.0039;
    directLight.shadowMapDarkness = 0.5;
    directLight.shadowMapWidth = 1024;
    directLight.shadowMapHeight = 1024;

    //directLight.shadowMapEnabled = true;
    //directLight.shadowMapSoft = true;

    scene.add(directLight);

    //shadows
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;



    //start
    addListener();
    floor();
    spawn();
    //run();
}

function run() {
    //speedZ
    if(!down) {
        player.speedZ += 0.01;
    } else {
        player.speedZ *= 0.97;
    }
    if(player.speedZ > 1) {
        player.speedZ = 1;
    }

    //camera rotation
    if(left) {
        if(camera.rotation.z > Math.PI/32) {
            camera.rotation.z *= 0.9;
        } else {
            camera.rotation.z -= 0.01;
        }
        if(player.speedX > 0)player.speedX *= 0.95;
        if(camera.rotation.z < -Math.PI/8) camera.rotation.z = -Math.PI/8;
    }
    if(right) {
        if(camera.rotation.z < -Math.PI/32) {
            camera.rotation.z *= 0.9;
        } else {
            camera.rotation.z += 0.01;
        }
        if(player.speedX < 0)player.speedX *= 0.95;
        if(camera.rotation.z > Math.PI/8) camera.rotation.z = Math.PI/8;
    }
    if(!right && !left) {
        camera.rotation.z *= 0.9;
        player.speedX *= 0.95;
    }

    //player left + right + up
    player.speedX += camera.rotation.z/100;
    vector1.x += player.speedX;
    player.rotation.z -= player.speedX;
    vector1.z -= player.speedZ;
    camera.position.z -= player.speedZ;
    //directLight.position.z -= 0.1;
    player.rotation.x -= player.speedZ;

    //collision
    if(vector1.x < -5 + player.radius) {
        vector1.x = -5 + player.radius;
        player.speedX = -player.speedX * 0.5;
    } else if(vector1.x > 5 - player.radius) {
        vector1.x = 5 - player.radius;
        player.speedX = -player.speedX * 0.5;
    }

    //set z variable
    z = player.position.z + 12;
    //console.log(z);

    //move floor & walls
    if(z % 100 < -90 && rendernew) {
        if(actualfloor1) {
            floor1.position.z -= 200;
            walll1.position.z -= 200;
            wallr1.position.z -= 200;

            actualfloor1 = false;
        } else {
            floor2.position.z -= 200;
            wallr2.position.z -= 200;
            walll2.position.z -= 200;

            actualfloor1 = true;
        }
        rendernew = false;
    } else if(z % 100 < -1 && z % 100 > -80 && !rendernew) {
        rendernew = true;
    }

    //object collision
    //*
    for(var i = MAXOBJECTS; i > 0; i--) {
        if(objects[objects.length - i] != undefined) {
            var radius = objects[objects.length - i].radius;
            var pointObjectX = objects[objects.length - i].position.x;
            var pointObjectZ = objects[objects.length - i].position.z;
            var v = new THREE.Vector2(pointObjectX - vector1.x, pointObjectZ - vector1.z);
            if(v.length() < player.radius + radius) {
                lives--;
                document.getElementById("lives").innerHTML = "lives: " + lives;
                if (lives == 0){
                    lost = true;
                } else {
                    player.speedX *= -0.5;
                    player.speedZ *= -0.5;
                    scene.remove(objects[objects.length - i]);
                    objects[objects.length - i] = null;
                }

            }
        }
    }//*/

    //objects
    //console.log(Math.round(z%100));

    if(Math.round((-z)%70) > 60) {
        spawnnext = true;
    } else if(Math.round((-z)%70) > 0 && spawnnext) {
        var object = getObject();

        objects[objects.length] = object;

        scene.add(object);

        if(objects.length >= MAXOBJECTS) {
            scene.remove(objects[objects.length-(MAXOBJECTS+1)]);
            objects[objects.length-(MAXOBJECTS+1)] = null;
        }

        spawnnext = false;
    }

    player.position.y = vector1.y;
    player.position.x = vector1.x;
    player.position.z = vector1.z;
    directLight.target = player;
    directLight.position.z = vector1.z + 10;

    renderer.render(scene, camera);
    meter.tick();
    if(!lost) {

        requestAnimationFrame(run);
    } else {
        loseInit();
        requestAnimationFrame(lose);

    }
}