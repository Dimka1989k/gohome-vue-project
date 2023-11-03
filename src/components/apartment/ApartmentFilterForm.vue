<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect
      :items="cities"
      v-model="city"
      class="form__select"
      @change="handleSelectForm"
    />
    <CustomInput
      v-model="price"
      placeholder="Price, from"
      @input="handleChangeInput"
      :value="valueInput"
      errorMessage="This field must not be empty"
      :rules="rules"
    />
    <ButtonSubmit class="form__submit" type="submit"
      >Find apartments</ButtonSubmit
    >
  </form>
</template>

<script>
import CustomSelect from "../Shared/CustomSelect.vue";
import CustomInput from "../Shared/CustomInput.vue";
import ButtonSubmit from "../Shared/ButtonSubmit.vue";
import { isRequired, charLimit } from "../../utils/validationRules.js";

export default {
  components: {
    CustomSelect,
    CustomInput,
    ButtonSubmit,
  },

  data() {
    return {
      price: "",
      city: "",
      valueInput: "",
    };
  },

  computed: {
    rules() {
      return [isRequired, charLimit(10)];
    },
    cities() {
      return [
        { value: "", label: "City", selected: true },
        "Kyiv",
        "Odesa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Kherson",
        "Mariupol",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", { city: this.city, price: this.price });
    },
    handleChangeInput(event) {
      this.price = event.target?.value;
      this.valueInput = event.target?.value;
    },
    handleSelectForm(event) {
      this.city = event.target?.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
