import { useEffect } from 'react'

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Model from './assets/workspace/DeskFull.gltf'

function App() {

useEffect (() => {

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#fbe5c8');
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
    );
    const canvas = document.getElementById('myThreeJsCanvas');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias:true,
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    camera.position.z = 10;
    camera.position.y = 4;



    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight.castShadow = true;
    scene.add( directionalLight );


// Instantiate a loader
const loader = new GLTFLoader();



// Load a glTF resource
loader.load(
	// resource URL
	Model,
	// called when the resource is loaded 
	function ( gltf ) {

		scene.add( gltf.scene );

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( error );

	}
);

    // const boxGeometry = new THREE.BoxGeometry(16,16,16);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // scene.add(boxMesh);

    const animate = () => {
      // boxMesh.rotation.x += 0.01;
      // boxMesh.rotation.y += 0.002;
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
      

    };
    animate();

}, [] );

  return (


    <div>
      <canvas id="myThreeJsCanvas" />
      <p>hello</p>
    </div>
  );
}

export default App;
