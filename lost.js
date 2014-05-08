/**
 * Created by gast-c31 on 07.05.14.
 */

function looseInit(){
    tempx = vector1.x;

}

function loose() {


    var phi = Math.PI/14;


    //vector1.z -= z - 11;
    //vector1.x -= tempx;
    var m = new THREE.Matrix4(
        1, 0, 0, -tempx,
        0, 1, 0, 0,
        0, 0, 1, -z+11,
        0, 0, 0, 1);

    vector1.applyMatrix4(m);


    var m = new THREE.Matrix4(
        Math.cos(phi), 0,Math.sin(phi),0,
        0,             1,0,            0,
        -Math.sin(phi),0,Math.cos(phi),0,
        0,             0,0,            1);

    vector1.applyMatrix4(m);


    //vector1.z += z -11;
    //vector1.x += tempx;
    //vector1.y +=2;
    var m = new THREE.Matrix4(
        1, 0, 0, tempx,
        0, 1, 0, 2,
        0, 0, 1, z-11,
        0, 0, 0, 1);

    vector1.applyMatrix4(m);



    //set player position to vector
    player.position.y = vector1.y;
    player.position.x = vector1.x;
    player.position.z = vector1.z;

    if (true) {
        var v = vector1.clone();
        v.x = 0;
        v.z = z - 12;
        camera.lookAt(v);
    }

    if(player.position.y > 100) {
        player.position.y = 100;
        //window.alert("Lost!!!!");
        //console.log("Lost!!!");
    } else {
        renderer.render(scene, camera);
        meter.tick();
        requestAnimationFrame(loose);
    }
}