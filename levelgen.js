/**
 * Created by gast-c11 on 07.05.14.
 */

function floor() {
    plane = new THREE.Mesh(new THREE.PlaneGeometry(5,10), new THREE.MeshPhongMaterial({color: 0xB452CD, wireframe:false}));
    plane.rotation.x = -(Math.PI/2);
    scene.add(plane);

}

