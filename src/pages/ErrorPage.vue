<template>
  <section class="error">
    <h1 class="error__title">404 Page not found</h1>
  </section>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped>
.error {
  &__title {
    margin-top: 350px;
    font-size: 60px;
    text-align: center;
    color: red;
  }
}
</style>
