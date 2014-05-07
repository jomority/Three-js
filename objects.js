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


    if(Math.random() > 0.5) {

        cylinder.position.x = -5;
    } else {
        cylinder.position.x = 5;

    }


    cylinder.position.y = 2;
    cylinder.position.z = -z -50;

    return cylinder;
}

function sphere() {
    var loader = new THREE.JSONLoader();
    loader.load("sphere.js", function(data, material) {
        //data.computeVertexNormals();
        var material = new THREE.MeshFaceMaterial(material);
        var mesh = new THREE.Mesh (data, material);
        scene.add(mesh);
    });
}