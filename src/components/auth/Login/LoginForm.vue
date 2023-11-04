<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Log in</MainTitle>
    <FormApp class="login__form" ref="form" @submit.prevent="handleSubmit">
      <CustomInput
        v-model="formData.email"
        name="email"
        :rules="emailRules"
        class="login__input"
        placeholder="Email"
        @input="handleChangeEmail"
        :value="formData.email"
      />
      <CustomInput
        class="login__input"
        v-model="formData.password"
        name="password"
        :rules="passwordRules"
        placeholder="Password"
        type="password"
        :value="formData.password"
        @input="handleChangePassword"
      />
      <ButtonSubmit class="login__button" type="submit" :loading="loading"
        >Sign in</ButtonSubmit
      >
    </FormApp>
  </AuthContainer>
</template>

<script>
import FormApp from "../../Shared/Form/FormApp.vue";
import CustomInput from "../../Shared/CustomInput.vue";
import ButtonSubmit from "../../Shared/ButtonSubmit.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules.js";
import AuthContainer from "../../auth/AuthContainer.vue";
import MainTitle from "../../Shared/Form/MainTitle.vue";

export default {
  name: "LoginForm",
  components: {
    FormApp,
    CustomInput,
    ButtonSubmit,
    AuthContainer,
    MainTitle,
  },
  data() {
    return {
      loading: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = this.$refs.form.validate();
      if (!isFormValid) {
        try {
          this.loading = true;
          await this.$store.dispatch("loginn", this.formData);
          this.$router.push({ name: "homepage" });
          form.reset();
        } catch (error) {
          this.$notify({
            type: "error",
            title: "An error has occurred",
            text: error.message,
          });
        } finally {
          this.loading = false;
        }
      }
    },

    handleChangeEmail(event) {
      this.formData.email = event.target?.value;
    },

    handleChangePassword(event) {
      this.formData.password = event.target?.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__button {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
