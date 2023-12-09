export function useCamera() {

    function initCamera(camera,sizes, initialPosition = null, InitialRotation = null){
      const _camera = camera;

      _camera.fov = 25;
      _camera.near = 0.1;
      _camera.aspect = sizes.width / sizes.height
      _camera.updateProjectionMatrix()
      // _camera.lookAt(0,0,0)

      if(initialPosition != null){
        _camera.position.x = (initialPosition[0]);
        _camera.position.y = (initialPosition[1]);
        _camera.position.z = (initialPosition[2]);
      }
      if(InitialRotation != null){
        _camera.rotation.x = (InitialRotation[0]);
        _camera.rotation.y = (InitialRotation[1]);
        _camera.rotation.z = (InitialRotation[2]);
      }

      return {_camera};
    }

    return {
      initCamera,
    };
}
