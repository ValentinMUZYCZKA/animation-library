import { GUI } from 'dat.gui'

export function useDatGUI() {

  let gui = new GUI()

    function initDatGUI(_model,modelName, _camera, _light = null, _renderer=null, _bloom=null, _bloomParams=null){
      const cubeFolder = gui.addFolder(modelName)

      cubeFolder.add(_model.position, 'x', -20, 20, 0.01).name("Move - X")
      cubeFolder.add(_model.position, 'y', -20, 20, 0.01).name("Move - Y")
      cubeFolder.add(_model.position, 'z', -20, 20, 0.01).name("Move - Z")
      cubeFolder.add(_model.rotation, 'x', -Math.PI * 5, Math.PI * 5, 0.01).name("Rotate - X")
      cubeFolder.add(_model.rotation, 'y', -Math.PI * 5, Math.PI * 5, 0.01).name("Rotate - Y")
      cubeFolder.add(_model.rotation, 'z', -Math.PI * 5, Math.PI * 5, 0.01).name("Rotate - Z")


      const cameraFolder = gui.addFolder('Camera')
      cameraFolder.add(_camera.position, 'x', -20, 20, 0.01).name("Move - X")
      cameraFolder.add(_camera.position, 'y', -20, 20, 0.01).name("Move - Y")
      cameraFolder.add(_camera.position, 'z', -20, 20, 0.01).name("Move - Z")
      cameraFolder.add(_camera.rotation, 'x', -Math.PI * 5, Math.PI * 5, 0.01).name("Rotate - X")
      cameraFolder.add(_camera.rotation, 'y', -Math.PI * 5, Math.PI * 5, 0.01).name("Rotate - Y")
      cameraFolder.add(_camera.rotation, 'z', -Math.PI * 5, Math.PI * 5, 0.01).name("Rotate - Z")

      console.log(_light);

      if(_light != null){
        const lightFolder = gui.addFolder('Light')
        
        lightFolder.add(_light, 'intensity', 0, 2, .01).name("intensity")
        lightFolder.addColor(_light, 'color').name("Color")
          .onChange( function() { _light.color.set( _bloomParams.color ); } );
      }

      if (_bloom != null){
        const bloomFolder = gui.addFolder( 'bloom' );
        bloomFolder.add( _bloomParams, 'threshold', 0.0, 1.0 ).onChange( function ( value ) {

          _bloom.threshold = Number( value );
          } );

          bloomFolder.add( _bloomParams, 'strength', 0.0, 3.0 ).onChange( function ( value ) {

            _bloom.strength = Number( value );

          } );

          gui.add( _bloomParams, 'radius', 0.0, 1.0 ).step( 0.01 ).onChange( function ( value ) {

            _bloom.radius = Number( value );

          } );

          const toneMappingFolder = gui.addFolder( 'tone mapping' );

          toneMappingFolder.add( _bloomParams, 'exposure', 0.1, 2 ).onChange( function ( value ) {

            _renderer.toneMappingExposure = Math.pow( value, 4.0 );

          } );
      }

    }

    function cleanUpDatGUI() {
      gui.destroy()
    }
    return {
      initDatGUI,
      cleanUpDatGUI,
      };
}
