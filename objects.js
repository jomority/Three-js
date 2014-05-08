/**
 * Created by gast-c31 on 07.05.14.
 */


function getObject() {
    var object;

    object = cylinder();



    return object;
}

function cylinder() {
    var texture = THREE.ImageUtils.loadTexture("barrel.jpg", {});
    var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(1,1,2.5,10,5),
        new THREE.MeshLambertMaterial({map: texture}));
    cylinder.radius = 1;

    cylinder.points = true;

    cylinder.position.x = Math.random()*8-4;


    cylinder.position.y = 1.25;
    cylinder.position.z = z -100;

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