<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect v-model="city" :items="cities"  class="form__select" />
    <CustomInput v-model="price" placeholder="Price" />
    <ButtonSubmit class="form__submit" type="submit"
      >Housing selection</ButtonSubmit
    >
  </form>
</template>

<script>
import CustomSelect from "../Shared/CustomSelect.vue";
import CustomInput from "../Shared/CustomInput.vue";
import ButtonSubmit from "../Shared/ButtonSubmit.vue";

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
    };
  },
  computed: {
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
      console.log("City:", this.city, "Price:", this.price);
      this.$emit("submit", {
        city: this.city,
        price: this.price,
      });
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
