/**
 * Created by gast-c11 on 07.05.14.
 */

function floor() {
    var vector = new THREE.Vector2(10,100);
    floor1 = new THREE.Mesh(new THREE.PlaneGeometry(vector.x,vector.y), new THREE.MeshPhongMaterial({color: 0xB452CD, wireframe:false}));
    floor1.rotation.x = - Math.PI/2;
    floor1.position.z = - vector.y/2.2;
    scene.add(floor1);

    var vector2 = new THREE.Vector2(10,100);
    walll1 = new THREE.Mesh(new THREE.PlaneGeometry(vector2.x,vector2.y), new THREE.MeshPhongMaterial({color: 0xffffff, wireframe:false}));
    walll1.rotation.z = - Math.PI/2;
    walll1.rotation.y = Math.PI/2;
    walll1.position.z = - vector2.y/2.2;
    walll1.position.x = - vector2.x/2;
    scene.add(walll1);

    var vector3 = new THREE.Vector2(10,100);
    wallr1 = new THREE.Mesh(new THREE.PlaneGeometry(vector3.x,vector3.y), new THREE.MeshPhongMaterial({color: 0xffffff, wireframe:false}));
    wallr1.rotation.z = - Math.PI/2;
    wallr1.rotation.y = - Math.PI/2;
    wallr1.position.z = - vector3.y/2.2;
    wallr1.position.x = vector3.x/2;
    scene.add(wallr1);



    var vector = new THREE.Vector2(10,100);
    floor2 = new THREE.Mesh(new THREE.PlaneGeometry(vector.x,vector.y), new THREE.MeshPhongMaterial({color: 0xB452CD, wireframe:false}));
    floor2.rotation.x = - Math.PI/2;
    floor2.position.z = - vector.y/2.2 - vector.y;
    scene.add(floor2);

    var vector2 = new THREE.Vector2(10,100);
    walll2 = new THREE.Mesh(new THREE.PlaneGeometry(vector2.x,vector2.y), new THREE.MeshPhongMaterial({color: 0xffffff, wireframe:false}));
    walll2.rotation.z = - Math.PI/2;
    walll2.rotation.y = Math.PI/2;
    walll2.position.z = - vector2.y/2.2 - vector2.y;
    walll2.position.x = - vector2.x/2;
    scene.add(walll2);

    var vector3 = new THREE.Vector2(10,100);
    wallr2 = new THREE.Mesh(new THREE.PlaneGeometry(vector3.x,vector3.y), new THREE.MeshPhongMaterial({color: 0xffffff, wireframe:false}));
    wallr2.rotation.z = - Math.PI/2;
    wallr2.rotation.y = - Math.PI/2;
    wallr2.position.z = - vector3.y/2.2  - vector3.y;
    wallr2.position.x = vector3.x/2;
    scene.add(wallr2);
}

