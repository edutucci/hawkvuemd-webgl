<template>
  <div id="app">
    <h-main-body
      :show-drawer-left="showDrawer"
      @close-drawer-left="showDrawer = $event"
    >
      <template #header>
        <h-app-toolbar bg-color="bg-primary">
          <h-app-toolbar-container>
            <h-app-toolbar-navigation text-color="text-white" @click="showDrawer = !showDrawer"/>
            <h-image avatar src="/img/icons/vtk.png" size="42px"/>
            <h-app-toolbar-title class="text-white">
              Vue VTK
            </h-app-toolbar-title>
            <h-app-toolbar-action>
              <h-btn fab size="sm" bg-color="bg-transparent">
                <h-link url="/" icon="fas fa-home" text-color="text-white"/>
              </h-btn>
              <h-btn fab size="sm" bg-color="bg-transparent">
                <h-link url="https://github.com/edutucci/hawkvuemd-webgl"
                  icon="fab fa-github" text-color="text-white" new-window/>
              </h-btn>
            </h-app-toolbar-action>
          </h-app-toolbar-container>
        </h-app-toolbar>
      </template>

    <template #left>
      <div class="col-auto text-center h-pa-md">
        <div class="column align-items-center">
          <h-image avatar src="/img/icons/vtk.png" size="64px"/>
          <div class="">WEBGL</div>
        </div>
      </div>
      <div class="col">
        <h-list>
          <h-list-item @click="$router.push('/')">
            <h-list-item-content>
              <h-list-item-text title="Home Page" caption="Main page"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="$router.push('/vtk/cube')">
            <h-list-item-content>
              <h-list-item-text title="Cube" caption="Cube Sample"/>
            </h-list-item-content>
          </h-list-item>
          <!-- <h-list-item @click="openURL('https://github.com/edutucci/hawkvuemdframework')">
            <h-list-item-content>
              <h-list-item-text title="Github" caption="Framework repository"/>
            </h-list-item-content>
          </h-list-item> -->
        </h-list>
      </div>
      <div class="col-auto">
        <div class="text-center h-pa-md">
          <h2 class="no-margin">Vue WEBGL</h2>
        </div>
      </div>

    </template>

    <router-view/>

    </h-main-body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDrawer: false,
    };
  },
  methods: {
    openURL(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
