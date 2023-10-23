<template>
  <main class="apartment-page">
    <ContainerShared>
      <div class="apartment-page__content">
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
import apartments from "../components/apartment/apartments";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo";
import ApartmentsOwner from "../components/apartment/ApartmentsOwner";
import ReviewsYour from "../components/reviews/ReviewsYour.vue";
import reviewsList from "../components/reviews/reviews.json";

export default {
  name: "ApartmentPage",
  components: {
    ContainerShared,
    ApartmentsMainInfo,
    ApartmentsOwner,
    ReviewsYour,
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },

    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
  },
  mounted() {
    console.log(this.apartment);
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
