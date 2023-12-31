<script setup lang="ts">

import { Mesh,PlaneGeometry , RectAreaLight,PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';

import gsap from "gsap"

// importing Composables
import { useThree } from '@/composables/three/useThree';
import { useLoader } from '@/composables/three/modelLoader';
import { useEnvironement } from '@/composables/three/environement';
import { useCamera } from '@/composables/three/camera';
import { useLightMouse } from '@/composables/three/Light-mouse';
import { useDatGUI } from '@/composables/three/debug/datGUI';
import { useBikeAnimation } from '@/composables/animations/bikeAnimation';



const canvas = computed(() => document.getElementById('mountId') as HTMLCanvasElement);
const debug = true;
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
const { initLightMouse } = useLightMouse();
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
  _light = initLightMouse(_scene, _camera, _mouse);


  const _bike = loadModel('/model/bike.glb', _scene, _camera, _renderLoopId, renderLoop,[0, -0.46, 3.58],[0, 0, 0], function(_bike,_camera){
    if(debug){
      initDatGUI(_bike,'bike', _camera, _light);
      // const controls = new OrbitControls( camera, renderer.domElement );
    }
    
    document.body.scrollTop = document.documentElement.scrollTop = 0;

      if(document.querySelector('#loader') !== undefined) {
        gsap.fromTo('#loader .loader-text', 
        { opacity: 1 }, 
        { opacity: 0,duration: 2})
      setTimeout(() => {
        gsap.fromTo('#loader', 
        { opacity: 1 }, 
        {opacity: 0,duration: 1,onComplete() {
          document.querySelector('#loader').remove()
          document.querySelector('.btn-startup').addEventListener('click',(e) => {
            var audio = new Audio('sounds/startup.mp3');
            setTimeout(() => {
              audio.play();
            }, 200);

            console.log(this);
            gsap.to('.ignition-container', {opacity: 0, delay: .5, duration: .5,onComplete(){
              document.querySelector('.ignition-container').remove()
            }})
            window.scrollTo(0, 0);                
               setTimeout(() => {
                initBikeAnimation(_bike, _camera,_renderer);
               }, 200);
            }})
            
          })
        }
      })
    }, 1000);
    }

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
      <!-- //<UtilsScrollAnimation /> -->
      <div class="btn btn-startup">
        <LazyIconesBikeIgnition />
      </div>
      <video id="bg-video" src="/VIDEO-PULSATION-ARCHEON.mp4" autoplay muted loop></video>
      <canvas id="mountId" width="700" height="500" class="m-auto h-[500px] w-[700px] rounded-md" />
    </div>
  </div>
</template>

<style lang="scss">
.dg.ac{
  z-index: 10000
}

.btn.btn-startup{
  position: absolute;
    top: 50%;
    left: 50%;
    font-size: 25px;
    transform: translate(-50%);
    text-align: center;
    line-height: 1.4em;
    opacity: .4;
    transition: all .3s ease-in-out;

    &:hover{
      opacity: 1;
      cursor: pointer;
    }
}
</style>