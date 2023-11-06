<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartment-main-info__photo" />
    <p class="apartment-main-info__description">{{ apartment.descr }}</p>
    <div class="apartment-main-info__btn">
      <ButtonSubmit :loading="isLoading" @click="handleApartmentsBooking"
        >Book</ButtonSubmit
      >
    </div>
  </article>
</template>

<script>
import StarRating from "../StarRating.vue";
import ButtonSubmit from "../Shared/ButtonSubmit.vue";
import { bookApartment } from "../../services/orders.service.js";

export default {
  name: "ApartmentsMainInfo",
  components: {
    StarRating,
    ButtonSubmit,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async handleApartmentsBooking() {
      const body = {
        apartmentId: this.$route.params.id,
        date: Date.now(),
      };

      try {
        this.isLoading = true;
        await bookApartment(body);

        this.$notify({
          type: "success",
          title: "Order has been added",
        });
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Error",
          text: error.message,
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-main-info {
  &__heading {
    display: flex;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }

  &__photo {
    max-width: 100%;
  }

  &__description {
    line-height: 1.3;
    margin-top: 30px;
    max-width: 740px;
  }

  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
