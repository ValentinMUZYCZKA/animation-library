<script setup lang="ts">

import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// importing Composables
import { useThree } from '@/composables/three/useThree';
import { useLoader } from '@/composables/three/modelLoader';
import { useEnvironement } from '@/composables/three/environement';
import { useCamera } from '@/composables/three/camera';
import { useLight } from '@/composables/three/Light';
import { useDatGUI } from '@/composables/three/debug/datGUI';
import { useBikeAnimation } from '@/composables/animations/bikeAnimation';


const canvas = computed(() => document.getElementById('mountId') as HTMLCanvasElement);
const debug = false;
const sizes = {
    width: window.innerWidth -17,
    height: window.innerHeight -4
}

let _renderer: WebGLRenderer;
let _renderLoopId: number;
let _scene: Scene;
let _light;

var _mouse = {
  x: 0,
  y: 0
};
let _camera= new PerspectiveCamera(25,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );


// importing methods from composables
const { initThree, cleanUpThree } = useThree();
const { loadModel } = useLoader();
const { initEnvironement } = useEnvironement();
const { initCamera } = useCamera();
const { initLight } = useLight();
const { initBikeAnimation, cleanUpBikeAnimation } = useBikeAnimation();
const { initDatGUI,cleanUpDatGUI } = useDatGUI();

function animateObject() {
  // console.log('bike',_bike.position);
  // console.log('camera',_camera.position);  
}

function renderLoop() {
  // will keep running for every frame since
  // we keep recreate a new requestAnimationFrame at the end of the function.
  _renderer.render(_scene, _camera);
  _renderLoopId = requestAnimationFrame(renderLoop);
}

function setupScene() {
  //initialize
  const { scene, camera, renderer } = initThree('mountId');

  _scene = scene;
  _camera = camera;
  _renderer = renderer;

  initCamera(_camera, sizes,[0,0,6.5],[0,0,0])
  initEnvironement( 'environements/7.hdr',_scene , _renderer, sizes);
  _light = initLight(_scene, _camera, _mouse);
  const _bike = loadModel('/model/bike.glb', _scene, _camera, _renderLoopId, renderLoop,[1.34, 0, 0.03],[0.15, -0.68, 0], function(_bike,_camera){
    if(debug){
      initDatGUI(_bike,'bike', _camera, _light);
      // const controls = new OrbitControls( camera, renderer.domElement );
    }
    initBikeAnimation(_bike, _camera,_renderer);

  })



  // var mouseGeometry = new SphereGeometry(1, 100, 100);
  // var mouseMaterial = new MeshLambertMaterial({});
  // mouseMesh = new Mesh(mouseGeometry, mouseMaterial);
  // mouseMesh.position.set(0, 0, 0);
  // _scene.add(mouseMesh);

}



onMounted(() => {
  if (canvas.value) {
    setupScene();
    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth -17;
      sizes.height = window.innerHeight -4;
      // Update camera
      _camera.aspect = sizes.width / sizes.height
      _camera.updateProjectionMatrix()
      // Update renderer
      _renderer.setSize(sizes.width, sizes.height);
      _renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }
});

onBeforeUnmount(() => {
  cancelAnimationFrame(_renderLoopId);
  cleanUpThree(_scene, _renderer);
  cleanUpBikeAnimation();
  if(debug){
    cleanUpDatGUI();
  }
});


</script>
<template>
  <div class="container">
    <div class="wrapper">
      <video id="bg-video" src="/VIDEO-PULSATION-ARCHEON.mp4" autoplay muted loop></video>
      <canvas id="mountId" width="700" height="500" class="m-auto h-[500px] w-[700px] rounded-md" />
    </div>
  </div>
</template>

<style lang="scss">
.dg.ac{
  z-index: 10000
}
</style>