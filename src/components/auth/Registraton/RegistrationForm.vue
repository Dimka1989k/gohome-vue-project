<template>
  <AuthContainer class="registration">
    <h1 class="registration__title">Registration</h1>
    <FormApp
      class="registration__form"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <CustomInput
        v-model="formData.name"
        name="name"
        :rules="nameRules"
        class="registration__input"
        placeholder="Name"
        autocomplete="username"
      />
      <CustomInput
        v-model="formData.email"
        name="email"
        :rules="emailRules"
        class="registration__input"
        placeholder="Email"
        autocomplete="email"
      />
      <CustomInput
        class="registration__input"
        v-model="formData.password"
        name="password"
        :rules="passwordRules"
        placeholder="Password"
        type="password"
        autocomplete="current-password"
      />
      <CustomInput
        class="registration__input"
        v-model="formData.confirmPassword"
        name="password"
        :rules="confirmPassword"
        placeholder="Confirm password"
        type="password"
        autocomplete="current-password"
      />
      <ButtonSubmit class="registration__button" type="submit"
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
import AuthContainer from "../../auth//AuthContainer.vue";
import { registerUser } from "../../../services/auth.service.js";

export default {
  name: "RegistrationForm",
  components: {
    FormApp,
    CustomInput,
    ButtonSubmit,
    AuthContainer,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Password mismatch",
        }),
      ];
    },
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      const { name, password, email } = this.formData;
      if (!isFormValid) {
        try {
          const { data } = await registerUser({ name, password, email });
          console.log(data);
          form.reset();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
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
