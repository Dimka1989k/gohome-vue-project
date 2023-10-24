<template>
  <header class="header">
    <ContainerShared>
      <router-link to="/">
        <LogoApp />
      </router-link>
    </ContainerShared>
  </header>
</template>

<script>
import ContainerShared from "./ContainerShared.vue";
import LogoApp from "./LogoApp.vue";

export default {
  name: "HeaderApp",
  components: {
    ContainerShared,
    LogoApp,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
}
</style>
