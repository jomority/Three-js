/**
 * Created by gast-c31 on 07.05.14.
 */



var temp2 = 1;
function spawn() {
    renderer.render(scene, camera);
    meter.tick();

    var phi = Math.PI/7*temp2;
    temp2 -=0.01;

    var m = new THREE.Matrix4(
            Math.cos(phi)*0.95, 0,Math.sin(phi)*0.95,0,
        0,             0.95,0,	   0,
            -Math.sin(phi)*0.95,0,Math.cos(phi)*0.95,0,
        0,             0,0,            1);

    vector1.applyMatrix4(m);


    if (camera.rotation.x > -Math.PI/16) {
        var v = vector1.clone();
        v.x = 0;
        v.z = 0;
        camera.lookAt(v);
    }

    player.position.y = vector1.y;
    player.position.x = vector1.x;
    player.position.z = vector1.z;

    if(player.position.y < 1) {
        player.position.y = 1;
        vector1.y = 1;
        requestAnimationFrame(run);
    } else {
        requestAnimationFrame(spawn);
    }
}