let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 6;
scene.add(camera);

let box = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial({color: "red"});
let mesh = new THREE.Mesh(box, material);

//mesh.rotation.x
//mesh.scale.x
//mesh.position.x

scene.add(mesh);

const canvas = document.querySelector("canvas");
let renderer = new THREE.WebGLRenderer({canvas ,antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

let clock = new THREE.Clock();

const animate = () => {
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.y = clock.getElapsedTime();
}

animate();