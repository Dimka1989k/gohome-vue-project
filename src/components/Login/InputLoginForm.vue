<template>
  <div class="wraper-input">
    <input
      v-on:input="handleInput"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "InputLoginForm",
  data() {
    return {
      isValid: true,
      error: "",
    };
  },
  inject: ["form"],
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },

  watch: {
    value(value) {
      this.validate(value);
    },
  },
  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },
  beforeUnmount() {
    if (!this.form) return;
    this.form.unRegisterInput(this);
  },

  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    validate(value) {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(value);
        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }
        return hasPassed;
      });
    },
    reset() {
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.wraper-input {
  position: relative;
  display: inline-block;
}
.custom-input {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 10px;
    color: red;
    line-height: 1.3;
  }
}
</style>
