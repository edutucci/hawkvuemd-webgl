<template>
  <h-page-content
    @onResize="onResize"
  >
    <div id="container" class="full-height bg-gray"></div>
  </h-page-content>
</template>

<script>
import * as Three from 'three';

export default {
  name: 'ThreeTest',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
    };
  },
  computed: {
    windowSize() {
      return document.getElementById('container');
    },
  },
  mounted() {
  },
  methods: {
    onResize(size) {
      console.log('onresize: ', size);
      const container = this.windowSize;
      if (this.renderer) {
        container.removeChild(this.renderer.domElement);
        this.camera = new Three.PerspectiveCamera(
          70,
          container.clientWidth / container.clientHeight,
          0.01,
          10,
        );
        this.camera.position.z = 1;
        this.renderer = new Three.WebGLRenderer({ antialias: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
      } else {
        this.init(container);
        this.animate();
      }
    },
    init(container) {
      console.log('container.clientWidth: ', container.clientWidth);

      this.camera = new Three.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10,
      );
      this.camera.position.z = 1;

      this.scene = new Three.Scene();

      const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      const material = new Three.MeshNormalMaterial();

      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    },
  },

};
</script>

<style scoped>
</style>
