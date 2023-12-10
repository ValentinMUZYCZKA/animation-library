import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Box3, Vector3, GridHelper } from 'three';

export function useLoader() {

    function loadModel(url, _scene, _camera, _renderLoopId, renderLoop, initialPosition = null, InitialRotation = null, loadedCallback){
        const loader = new GLTFLoader();

        loader.load(url,function ( gltf ) {

            var center = new Vector3();
            var box = new Box3();           
            box.setFromObject( gltf.scene )
            box.getCenter(center);
            let _model = gltf.scene;
            _model.position.sub(center);

            _scene.add( gltf.scene );
            // var grid = new GridHelper();
            // _scene.add(grid);
            

            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object
            _model = _scene;            
            
                
            if(initialPosition != null){
                _model.position.x = (initialPosition[0]);
                _model.position.y = (initialPosition[1]);
                _model.position.z = (initialPosition[2]);
            }
            if(InitialRotation != null){
                _model.rotation.x = (InitialRotation[0]);
                _model.rotation.y = (InitialRotation[1]);
                _model.rotation.z = (InitialRotation[2]);
            }
                // start the renderLoop
            _renderLoopId = requestAnimationFrame(renderLoop);
            loadedCallback(_model,_camera);
            return { _model };

            },

            // called while loading is progressing
            function ( xhr ) {                
                document.querySelector("#loader .loader-counter").innerHTML = Math.floor( xhr.loaded / xhr.total * 100 );                
                //console.log( Math.floor( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            // called when loading has errors
            function ( error ) {
            console.log( error );
            }
        ); 
    }

    return {
        loadModel,
      };
}
