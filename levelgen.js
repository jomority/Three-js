/**
 * Created by gast-c11 on 07.05.14.
 */

function floor() {
    var vector = new THREE.Vector2(10,100);
    plane = new THREE.Mesh(new THREE.PlaneGeometry(vector.x,vector.y), new THREE.MeshPhongMaterial({color: 0xB452CD, wireframe:false}));
    plane.rotation.x = - Math.PI/2;
    plane.position.z = - vector.y/2.2;
    scene.add(plane);
    var vector = new THREE.Vector2(10,100);
    plane = new THREE.Mesh(new THREE.PlaneGeometry(vector.x,vector.y), new THREE.MeshPhongMaterial({color: 0xB452CD, wireframe:false}));
    plane.rotation.x = - Math.PI/2;
    plane.rotation.z =  - Math.PI/2;
    plane.position.z = - vector.y/2.2;
    scene.add(plane);

}

