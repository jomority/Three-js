/**
 * Created by gast-c31 on 07.05.14.
 */


function getObject() {
    var object;

    object = cylinder();



    return object;
}

function cylinder() {

    var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(2,2,4,10,5),
        new THREE.MeshPhongMaterial({color: 0x0000ff, wireframe: false}));



    cylinder.position.x = Math.random()*10-5


    cylinder.position.y = 2;
    cylinder.position.z = -z -50;

    return cylinder;
}