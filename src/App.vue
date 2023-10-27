<template>
  <div id="app">
    <div class="content">
      <HeaderApp />
      <router-view></router-view>
    </div>
    <FooterApp />
  </div>
</template>

<script>
import FooterApp from "./components/Shared/FooterApp.vue";
import HeaderApp from "./components/Shared/HeaderApp.vue";

export default {
  name: "App",
  components: {
    FooterApp,
    HeaderApp,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
}
</style>
