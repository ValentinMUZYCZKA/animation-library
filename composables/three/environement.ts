import { PMREMGenerator } from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

export function useEnvironement() {

    function initEnvironement(url, _scene , _renderer, sizes){
        _renderer.setSize(sizes.width, sizes.height);
        _renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        const pmremGenerator = new PMREMGenerator( _renderer );
       // const controls = new OrbitControls( _camera, _renderer.domElement );
      
        const hdriLoader = new RGBELoader()
        hdriLoader.load( url, function ( texture ) {
          const envMap = pmremGenerator.fromEquirectangular( texture ).texture;
          texture.dispose(); 
          _scene.environment = envMap
          _scene.envito
        } );
              
        return {_renderer};
    }

    return {
        initEnvironement,
      };
}
