<template>
  <main class="apartment-page">
    <ContainerShared>
      <div v-if="apartment" class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="aprtment-page__additional-info">
          <ApartmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <ReviewsYour :reviews="reviewsList" />
        </div>
      </div>
    </ContainerShared>
  </main>
</template>

<script>
import ContainerShared from "../components/Shared/ContainerShared";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo";
import ApartmentsOwner from "../components/apartment/ApartmentsOwner";
import ReviewsYour from "../components/reviews/ReviewsYour.vue";
import reviewsList from "../components/reviews/reviews.json";
import { getApartmentById } from "../services/apartments.service";

export default {
  name: "ApartmentPage",
  components: {
    ContainerShared,
    ApartmentsMainInfo,
    ApartmentsOwner,
    ReviewsYour,
  },
  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);
      this.apartment = data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>
