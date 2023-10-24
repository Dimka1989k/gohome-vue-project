<template>
  <FormLogin @submit.prevent="handleSubmit">
    <CustomInput v-model="formData.email" name="email" />
    <CustomInput v-model="formData.password" name="password" />
    <ButtonSubmit type="submit">Click me</ButtonSubmit>
  </FormLogin>
</template>

<script>
import FormLogin from "../../components/Shared/Form/FormLogin";
import CustomInput from "../../components/Shared/CustomInput";
import ButtonSubmit from "../Shared/ButtonSubmit";

export default {
  name: "LoginForm",
  components: {
    FormLogin,
    CustomInput,
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
  methods: {
    handleSubmit() {
      console.log(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
