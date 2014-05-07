/**
 * Created by gast-c11 on 07.05.14.
 */

function floor() {
    plane = new THREE.Mesh(new THREE.PlaneGeometry(1,20,10), new THREE.MeshPhongMaterial({color: 0xff0000, wireframe:false}));
    scene.add(plane);
}

