/**
 * Created by gast-c11 on 07.05.14.
 */

function floor() {
    var vector = new THREE.Vector2(10,100);
    plane = new THREE.Mesh(new THREE.PlaneGeometry(vector.x,vector.y), new THREE.MeshPhongMaterial({color: 0xB452CD, wireframe:false}));
    plane.rotation.x = - Math.PI/2;
    plane.position.z = - vector.y/2.2;
    scene.add(plane);

    var vector2 = new THREE.Vector2(10,100);
    wall = new THREE.Mesh(new THREE.PlaneGeometry(vector2.x,vector2.y), new THREE.MeshPhongMaterial({color: 0xffffff, wireframe:false}));
    wall.rotation.z = - Math.PI/2;
    wall.rotation.y = Math.PI/2;
    wall.position.z = - vector.y/2.2;
    wall.position.x = - vector.x/2;
    scene.add(wall);

    var vector2 = new THREE.Vector2(10,100);
    wall2 = new THREE.Mesh(new THREE.PlaneGeometry(vector2.x,vector2.y), new THREE.MeshPhongMaterial({color: 0xffffff, wireframe:false}));
    wall2.rotation.z = - Math.PI/2;
    wall2.rotation.y = - Math.PI/2;
    wall2.position.z = - vector.y/2.2;
    wall2.position.x = vector.x/2;
    scene.add(wall2);

}

