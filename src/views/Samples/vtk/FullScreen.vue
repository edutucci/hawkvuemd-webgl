<template>
  <h-page-content padding>
    <div class="row justify-center align-items-center full-height">
      <div class="col-auto" id="vtkcontainer"></div>
    </div>
  </h-page-content>
</template>

<script>
import 'vtk.js/Sources/favicon';

// const { vtkFullScreenRenderWindow } = window.vtk.Rendering.Misc;
// const { Actor } = window.vtk.Rendering.Core;

import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
// import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
// import vtkCubeSource from 'vtk.js/Sources/Filters/Sources/CubeSource';
// import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';

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
      this.fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
        background: [0, 0, 0],
      });
    },
  },
};
</script>
