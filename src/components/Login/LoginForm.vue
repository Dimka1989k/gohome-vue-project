<template>
  <FormApp ref="form" @submit.prevent="handleSubmit">
    <InputLoginForm v-model="formData.email" name="email" :rules="emailRules" />
    <InputLoginForm
      v-model="formData.password"
      name="password"
      :rules="passwordRules"
    />
    <ButtonSubmit type="submit">Click me</ButtonSubmit>
  </FormApp>
</template>

<script>
import FormApp from "../../components/Shared/Form/FormApp.vue";
import InputLoginForm from "../../components/Login/InputLoginForm.vue";
import ButtonSubmit from "../Shared/ButtonSubmit.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../utils/validationRules";

export default {
  name: "LoginForm",
  components: {
    FormApp,
    InputLoginForm,
    ButtonSubmit,
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
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
  },
  methods: {
    handleSubmit() {
      const isFormValid = this.$refs.form.validate();
      if (isFormValid) {
        console.log(this.formData);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
