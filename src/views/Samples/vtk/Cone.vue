<template>
  <h-page-content padding>
    <div class="row" style="height: calc(100vh - 80px)">
      <div class="col" id="vtkcontainer" ></div>
    </div>
  </h-page-content>
</template>

<script>
import 'vtk.js/Sources/favicon';

import vtkGenericRenderWindow from 'vtk.js/Sources/Rendering/Misc/GenericRenderWindow';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkCalculator from 'vtk.js/Sources/Filters/General/Calculator';
import vtkConeSource from 'vtk.js/Sources/Filters/Sources/ConeSource';
import { AttributeTypes } from 'vtk.js/Sources/Common/DataModel/DataSetAttributes/Constants';
import { FieldDataTypes } from 'vtk.js/Sources/Common/DataModel/DataSet/Constants';

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
      const container = document.getElementById('vtkcontainer');
      // We use the wrapper here to abstract out manual
      // RenderWindow/Renderer/OpenGLRenderWindow setup
      const genericRenderWindow = vtkGenericRenderWindow.newInstance();
      genericRenderWindow.setContainer(container);
      genericRenderWindow.resize();

      const renderer = genericRenderWindow.getRenderer();
      const renderWindow = genericRenderWindow.getRenderWindow();

      const coneSource = vtkConeSource.newInstance({ height: 1.0 });
      const filter = vtkCalculator.newInstance();

      filter.setInputConnection(coneSource.getOutputPort());
      // filter.setFormulaSimple(FieldDataTypes.CELL, [], 'random', () => Math.random());
      filter.setFormula({
        // getArrays: (inputDataSets) => ({
        getArrays: () => ({
          input: [],
          output: [
            {
              location: FieldDataTypes.CELL,
              name: 'Random',
              dataType: 'Float32Array',
              attribute: AttributeTypes.SCALARS,
            },
          ],
        }),
        evaluate: (arraysIn, arraysOut) => {
          const [scalars] = arraysOut.map((d) => d.getData());
          for (let i = 0; i < scalars.length; i += 1) {
            scalars[i] = Math.random();
          }
        },
      });

      const mapper = vtkMapper.newInstance();
      mapper.setInputConnection(filter.getOutputPort());

      const actor = vtkActor.newInstance();
      actor.setMapper(mapper);

      renderer.addActor(actor);
      renderer.resetCamera();
      renderWindow.render();
    },
  },
};
</script>
