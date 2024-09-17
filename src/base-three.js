// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// // import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// // init scene
// const scene = new THREE.Scene();

// scene.background = new THREE.Color( 0x1F1F1F );
// scene.add( new THREE.AmbientLight( 0xE9E9E9 ));


// // init object and add to the scene
// const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
// const cubeMaterial = new THREE.MeshBasicMaterial({
//     color: "blue",
//     wireframe: true,
// })

// const changeCubeColor = (color) => {
//     return new THREE.MeshBasicMaterial({
//         color: color,
//     })
// }

// const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

// cubeMesh.scale.setScalar(0.5)

// scene.add(cubeMesh);









// // cubeMesh.rotation.y = THREE.MathUtils.degToRad(45);
// // cubeMesh.rotation.z = THREE.MathUtils.degToRad(30);
// // cubeMesh.rotation.x = THREE.MathUtils.degToRad(30);

// // cubeMesh.scale.setScalar(0.5);

// // positioning

// // const vector1 = new THREE.Vector3(-1, -1, -2);
// // cubeMesh.position.copy(vector1);
// // cubeMesh.position.set(1, 1, -1)

// // scene.add(cubeMesh);




// // group


// // const group = new THREE.Group();

// // const cubeMesh2 = new THREE.Mesh(cubeGeometry, changeCubeColor('red'));
// // cubeMesh2.position.x = 1

// // const cubeMesh3 = new THREE.Mesh(cubeGeometry, changeCubeColor('white'));
// // cubeMesh3.position.y = 1

// // const cubeMesh4 = new THREE.Mesh(cubeGeometry, changeCubeColor('aqua'));
// // cubeMesh4.position.z = 1

// // const meshes = [cubeMesh, cubeMesh2, cubeMesh3, cubeMesh4];

// // meshes.forEach(mesh => {
// //     group.add(mesh);
// // })

// // group.scale.setScalar(0.5);
// // group.rotation.y = THREE.MathUtils.radToDeg(-60)

// // scene.add(group)

// // const axesHelper = new THREE.AxesHelper(2);
// // scene.add(axesHelper);


// // init camera and add to the scene
// const camera = new THREE.PerspectiveCamera(
//     30, window.innerWidth / window.innerHeight, 0.1, 20
// )

// camera.position.z = 6;
// scene.add(camera);




// // init the renderer
// const canvas = document.querySelector('.three-cube');
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     antialias: true,
// });
// renderer.setSize(window.innerWidth, window.innerHeight);

// // init orbit controls
// const controls = new OrbitControls( camera, canvas );
// controls.maxPolarAngle = THREE.MathUtils.degToRad(90)
// controls.minPolarAngle = THREE.MathUtils.degToRad(90)
// controls.enableDamping = true;
// // controls.autoRotate = true;
// // controls.autoRotateSpeed = 5;


// // render

// // renderer.setSize(window.innerWidth, window.innerHeight);
// // renderer.render(scene, camera);


// // init clock

// const clock = new THREE.Clock();
// let previousTime = 0;

// // render loop

// const loop = () => {



//     let currentTime = clock.getElapsedTime();
//     let delta = currentTime - previousTime;
//     previousTime = currentTime;
//     let sinDelta = Math.sin(currentTime);

//     cubeMesh.rotation.y += THREE.MathUtils.degToRad(1) * delta * 100;
//     cubeMesh.rotation.x += THREE.MathUtils.degToRad(1) * delta * 100;

//     cubeMesh.position.x = (sinDelta) * 0.5;
//     cubeMesh.position.y = (sinDelta) * 0.5;
//     cubeMesh.scale.y = sinDelta * 0.5;

    


//     renderer.render(scene, camera);
//     controls.update()
//     requestAnimationFrame(loop);
// }
// loop();

// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// })