<template>
  <AuthContainer class="login">
    <h1 class="login__title">Login</h1>
    <FormApp class="login__form" ref="form" @submit.prevent="handleSubmit">
      <CustomInput
        v-model="formData.email"
        name="email"
        :rules="emailRules"
        class="login__input"
        placeholder="Email"
      />
      <CustomInput
        class="login__input"
        v-model="formData.password"
        name="password"
        :rules="passwordRules"
        placeholder="Password"
        type="password"
      />
      <ButtonSubmit class="login__button" type="submit">Sign in</ButtonSubmit>
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
import AuthContainer from "../../auth//AuthContainer.vue";
import { loginUser } from "../../../services/auth.service.js";

export default {
  name: "LoginForm",
  components: {
    FormApp,
    CustomInput,
    ButtonSubmit,
    AuthContainer,
  },
  data() {
    return {
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
      const isFormValid = this.$refs.form.validate();
      if (!isFormValid) {
        try {
          const { data } = await loginUser(this.formData);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
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
