<template>
  <form v-on="$attrs" class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "FormLogin",
  provide() {
    return {
      form: this,
    };
  },
  data() {
    return {
      inputs: [],
    };
  },
  methods: {
    registerInput(input) {
      this.inputs.push(input);
    },
    unregisterInput(input) {
      this.inputs.filter((item) => item !== input);
    },
    validate() {
      return this.inputs.every((input) => input.validate());
    },
    reset() {
      this.inputs.forEach((input) => input.reset());
    },
  },
};
</script>

<style lang="scss" scoped></style>
