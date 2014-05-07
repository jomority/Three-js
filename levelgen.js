/**
 * Created by gast-c11 on 07.05.14.
 */

function floor() {
    //floor
    //y=length, x=height
    var size1 = new THREE.Vector2(10,100);
    var position1 = new THREE.Vector3(0,0, -size1.y/2 + 10);


    var texture = THREE.ImageUtils.loadTexture("wood2.jpg", {});
    //floor1 = new THREE.Mesh(new THREE.PlaneGeometry(size1.x,size1.y), new THREE.MeshLambertMaterial({color: 0xB452CD}));
    floor1 = new THREE.Mesh(new THREE.PlaneGeometry(size1.x,size1.y), new THREE.MeshLambertMaterial({map: texture}));
    floor1.rotation.x = - Math.PI/2;
    floor1.position.z = position1.z;
    floor1.position.y = position1.y;
    floor1.receiveShadow = true;
    scene.add(floor1);

    //floor2 = new THREE.Mesh(new THREE.PlaneGeometry(size1.x,size1.y), new THREE.MeshLambertMaterial({color: 0xB452CD, wireframe:false}));
    floor2 = new THREE.Mesh(new THREE.PlaneGeometry(size1.x,size1.y), new THREE.MeshLambertMaterial({map: texture}));
    floor2.rotation.x = - Math.PI/2;
    floor2.position.z = position1.z - size1.y;
    floor2.position.y = position1.y;
    floor2.receiveShadow = true;
    scene.add(floor2);



    //walls
    //y=length, x=height
    var size2 = new THREE.Vector2(5,100);
    var position2 = new THREE.Vector3(- size2.x,size2.x/2, position1.z);

    var texture = THREE.ImageUtils.loadTexture("steel.png", {});
    walll1 = new THREE.Mesh(new THREE.PlaneGeometry(size2.x,size2.y), new THREE.MeshLambertMaterial({map: texture}));
    walll1.rotation.z = - Math.PI/2;
    walll1.rotation.y = Math.PI/2;
    walll1.position.z = position2.z;
    walll1.position.x = position2.x;
    walll1.position.y = position2.y;
    walll1.receiveShadow = true;
    scene.add(walll1);

    wallr1 = new THREE.Mesh(new THREE.PlaneGeometry(size2.x,size2.y), new THREE.MeshLambertMaterial({map: texture}));
    wallr1.rotation.z = - Math.PI/2;
    wallr1.rotation.y = - Math.PI/2;
    wallr1.position.z = position2.z;
    wallr1.position.x = -position2.x;
    wallr1.position.y = position2.y;
    wallr1.receiveShadow = true;
    scene.add(wallr1);

    walll2 = new THREE.Mesh(new THREE.PlaneGeometry(size2.x,size2.y), new THREE.MeshLambertMaterial({map: texture}));
    walll2.rotation.z = - Math.PI/2;
    walll2.rotation.y = Math.PI/2;
    walll2.position.z = position2.z - size2.y;
    walll2.position.x = position2.x;
    walll2.position.y = position2.y;
    walll2.receiveShadow = true;
    scene.add(walll2);

    wallr2 = new THREE.Mesh(new THREE.PlaneGeometry(size2.x,size2.y), new THREE.MeshLambertMaterial({map: texture}));
    wallr2.rotation.z = - Math.PI/2;
    wallr2.rotation.y = - Math.PI/2;
    wallr2.position.z = position2.z  - size2.y;
    wallr2.position.x = -position2.x;
    wallr2.position.y = position2.y;
    wallr2.receiveShadow = true;
    scene.add(wallr2);
}

