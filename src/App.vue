<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <tool-bar></tool-bar>
    <transition name="page">
    <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ToolBar from './components/ToolBard.vue';
import spinner from './components/NotSpinner.vue';
import bus from './utils/bus.js';

export default {
  name: 'App',
  components: {
    // HelloWorld
    ToolBar,
    spinner
  },
  data() {
    return {
      loadingStatus : false
    };
  },
  methods : {
    startSpinner () {
      this.loadingStatus = true;
    },
    endSpinner () {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
   beforeDestroy() {
        bus.$off('start:spinner', this.startSpinner);
        bus.$off('end:spinner', this.endSpinner);
    }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}

a {
  color : #34495e;
  text-decoration: none;
}
a:hover {
  color : #42b883;
  text-decoration: underline;
}
a.router-link-exact-active{
  text-decoration: underline;
}
</style>
