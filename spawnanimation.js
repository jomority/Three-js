/**
 * Created by gast-c31 on 07.05.14.
 */



var temp2 = 1;
function spawn() {
    renderer.render(scene, camera);

    var phi = Math.PI/10*temp2;
    temp2 -=0.01;

    var m = new THREE.Matrix3(
        Math.cos(phi), 0,Math.sin(phi),
        0,             0.95,0,
        -Math.sin(phi),0,Math.cos(phi));

    vector1.applyMatrix3(m);

    player.position.y = vector1.y;
    player.position.x = vector1.x;
    player.position.z = vector1.z;

    if(player.position.y < 1) {
        player.position.y = 1;
        requestAnimationFrame(spawn2);
    } else {
        requestAnimationFrame(spawn);
    }
}

var temp1 = 0;
function spawn2() {
    renderer.render(scene, camera);

    var phi = Math.PI/10*temp2;
    temp1 += phi;

    var m = new THREE.Matrix3(
        Math.cos(phi), 0,Math.sin(phi),
        0,             1,0,
        -Math.sin(phi),0,Math.cos(phi));

    vector1.applyMatrix3(m);

    player.position.y = vector1.y;
    player.position.x = vector1.x;
    player.position.z = vector1.z;

    if(temp1 > Math.PI && player.position.x > -0.1 && player.position.x < 0.1) {
        player.position.y = 1;
        requestAnimationFrame(run);
    } else {
        requestAnimationFrame(spawn2);
    }
}