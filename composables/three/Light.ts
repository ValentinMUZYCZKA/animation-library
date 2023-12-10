import { Vector3,PointLight,AmbientLight, Light } from 'three';

export function useLight() {

  let _light,
      _mouse;

    function initLight(_scene, _camera, _mouse){
      _light = new PointLight();
      _light.position.set(0, 0, 15);
      _light.intensity = 1.5;
      Light.castShadow = true;
      _scene.add(_light);
      var lightAmb = new AmbientLight(0x000000);
      _scene.add(lightAmb);

      document.addEventListener('mousemove', function(event){
        onMouseMove(event, _mouse, _camera);
      }, false);
      return _light;
    }

    function cleanUpLight() {
      //gui.destroy()
    }

    function onMouseMove(event, _mouse,_camera) {

      // Update the mouse variable
      event.preventDefault();
      _mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      _mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
      // Make the sphere follow the mouse
      var vector = new Vector3(_mouse.x, _mouse.y, 0.5);
      vector.unproject(_camera);
      var dir = vector.sub(_camera.position).normalize();
      var distance = -_camera.position.z / dir.z;
      var pos = _camera.position.clone().add(dir.multiplyScalar(distance));
      //mouseMesh.position.copy(pos);
    
    
      _light.position.copy(new Vector3(pos.x, pos.y, pos.z + 2));
    };
    return {
      initLight,
      cleanUpLight,
      };
}
