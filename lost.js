/**
 * Created by gast-c31 on 07.05.14.
 */
var temp3 = 0.5;

function looseInit(){

    //vector1.set(player.position.x, player.position. y, player.position.z);
    tx = vector1.x;

}

function loose() {


    var phi = Math.PI/7*temp3;
    //temp3 +=0.01;


    vector1.z -= z - 11;
    vector1.x -= tx;

    var m = new THREE.Matrix4(
        Math.cos(phi), 0,Math.sin(phi),0,
        0,             1,0,            0,
        -Math.sin(phi),0,Math.cos(phi),0,
        0,             0,0,            1);

    vector1.applyMatrix4(m);

    vector1.z += z -11;
    vector1.x += tx;


    vector1.y +=2;
//vector1.y *= 1.05;

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