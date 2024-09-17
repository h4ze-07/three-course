
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();

scene.background = new THREE.Color( 0x1F1F1F );

const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 'red'
})


const cubeMesh = new THREE.Mesh(cubeGeo, cubeMaterial);

scene.add(cubeMesh);



const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 20);
camera.position.z = 5;

scene.add(camera);


const canvas = document.querySelector('.three-cube');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})



const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;


const loop2 = () => { 
    renderer.render(scene, camera); 
    controls.update() 
    requestAnimationFrame(loop2);
} 
loop2();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})