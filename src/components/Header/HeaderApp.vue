<template>
  <header class="header">
    <ContainerShared>
      <div class="header__content">
        <router-link to="/">
          <LogoApp />
        </router-link>
        <AccountActions v-if="isLoggedIn" />
        <AuthActions v-else />
      </div>
    </ContainerShared>
  </header>
</template>

<script>
import ContainerShared from "../Shared/ContainerShared.vue";
import LogoApp from "../Shared/LogoApp.vue";
import AuthActions from "./AuthActions.vue";
import AccountActions from "./AccountActions.vue";
import { mapGetters } from "vuex";

export default {
  name: "HeaderApp",
  components: {
    ContainerShared,
    LogoApp,
    AuthActions,
    AccountActions,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
  z-index: 100;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
