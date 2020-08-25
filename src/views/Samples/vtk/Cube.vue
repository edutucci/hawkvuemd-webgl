<template>
  <h-page-content>
    VTK CUBE SAMPLE
  </h-page-content>
</template>

<script>
import 'vtk.js/Sources/favicon';

// const { vtkFullScreenRenderWindow } = window.vtk.Rendering.Misc;
// const { Actor } = window.vtk.Rendering.Core;

// import { vtkFullScreenRenderWindow } from 'vtk.js/Sources/Rendering/Misc';
// import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
// import vtkCubeSource from 'vtk.js/Sources/Filters/Sources/CubeSource';
// import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';

// import controlPanel from './controlPanel.html';
export default {
  data() {
    return {
      fullScreenRenderer: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // this.fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
      //   background: [0, 0, 0],
      // });
    },
  },
};
</script>
