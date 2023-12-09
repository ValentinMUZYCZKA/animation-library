import { GUI } from 'dat.gui'

export function useDatGUI() {

  let gui = new GUI()

    function initDatGUI(_model,modelName, _camera){
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
    }

    function cleanUpDatGUI() {
      gui.destroy()
    }
    return {
      initDatGUI,
      cleanUpDatGUI,
      };
}
