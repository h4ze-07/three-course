import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// init scene
const scene = new THREE.Scene();


// init object and add to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: "blue"
})

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);


// init camera and add to the scene
const camera = new THREE.PerspectiveCamera(
    90, window.innerWidth / window.innerHeight, 0.1, 20
)

camera.position.z = 2;

scene.add(camera);



// init the renderer
const canvas = document.querySelector('.three-cube');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

// init orbit controls
const controls = new OrbitControls( camera, canvas );
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 10;
// controls.maxPolarAngle = THREE.Math.degToRad(270);


// render

// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.render(scene, camera);

// render loop

const loop = () => {
    renderer.render(scene, camera);
    controls.update()
    requestAnimationFrame(loop);
}
loop();