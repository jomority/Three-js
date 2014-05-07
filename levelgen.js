/**
 * Created by gast-c11 on 07.05.14.
 */

function floor() {
    plane = new THREE.Mesh(new THREE.PlaneGeometry(5,5), new THREE.MeshPhongMaterial({color: 0xff0000, wireframe:false}));
    plane.rotation.x = (Math.PI/2)+1;
    scene.add(plane);

}

