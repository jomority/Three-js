/**
 * Created by gast-c31 on 07.05.14.
 */
var temp3 = 0.1;
function loose() {


    var phi = Math.PI/10*temp3;
    temp3 +=0.01;


    vector1.z += z;

    var m = new THREE.Matrix3(
        Math.cos(phi), 0,Math.sin(phi),
        0,             1,0,
        -Math.sin(phi),0,Math.cos(phi));

    vector1.applyMatrix3(m);

    vector1.z -= z;
    vector1.y +=2;

    player.position.y = vector1.y;
    player.position.x = vector1.x;
    player.position.z = vector1.z;

    camera.lookAt(vector1);

    if(player.position.y > 100) {
        player.position.y = 100;
        window.alert("Lost!!!!");
    } else {
        renderer.render(scene, camera);
        meter.tick();
        requestAnimationFrame(loose);
    }
}