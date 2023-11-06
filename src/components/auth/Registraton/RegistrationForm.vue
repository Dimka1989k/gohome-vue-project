<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Registration</MainTitle>
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
        @input="handleChangeName"
        :value="formData.name"
      />
      <CustomInput
        v-model="formData.email"
        name="email"
        :rules="emailRules"
        class="registration__input"
        placeholder="Email"
        @input="handleChangeEmail"
        :value="formData.email"
      />
      <CustomInput
        class="registration__input"
        v-model="formData.password"
        name="password"
        :rules="passwordRules"
        placeholder="Password"
        type="password"
        @input="handleChangePassword"
      />
      <CustomInput
        class="registration__input"
        v-model="formData.confirmPassword"
        name="password"
        :rules="confirmPasswordRules"
        :value="formData.confirmPassword"
        placeholder="Confirm password"
        type="password"
        @input="handleChangeConfirmPassword"
      />
      <ButtonSubmit
        class="registration__button"
        type="submit"
        :loading="loading"
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
  name: "RegistrationForm",
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
    confirmPasswordRules() {
      return [
        (val) => ({
          hasPassed: val === this.formData.confirmPassword,
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
          this.loading = true;
          await this.$store.dispatch("registration", { name, password, email });
          this.$router.push({ name: "homepage" });
          form.reset();
        } catch (error) {
          this.$notify({
            type: "error",
            title: "An error has occurred",
            text: error.massage,
          });
        }
        this.loading = false;
      }
    },
    formReset() {
      this.formData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
    handleChangeName(event) {
      if (event === true) {
        this.formData.name = "";
        return;
      }
      this.formData.name = event.target?.value;
    },

    handleChangeEmail(event) {
      if (event === true) {
        this.formData.email = "";
        return;
      }
      this.formData.email = event.target?.value;
    },

    handleChangePassword(event) {
      if (event === true) {
        this.formData.password = "";
        return;
      }
      this.formData.password = event.target?.value;
    },

    handleChangeConfirmPassword(event) {
      if (event === true) {
        this.formData.confirmPassword = "";
        return;
      }
      this.formData.confirmPassword = event.target?.value;
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
