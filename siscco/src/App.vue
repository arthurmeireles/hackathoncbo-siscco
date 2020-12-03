<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

import './assets/css/style.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

export default {
    name: 'app',
    use: {
        'BootstrapVue': BootstrapVue,
        'IconsPlugin': IconsPlugin,  
    },
}
</script>
<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  height: 100%;
  width: 100%;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
