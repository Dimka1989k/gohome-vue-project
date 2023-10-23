<template>
  <main class="apartment-page">
    <ContainerShared>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <ApartmentsOwner
          class="apartment-page__owner"
          :owner="apartment.owner"
        />
      </div>
    </ContainerShared>
  </main>
</template>

<script>
import ContainerShared from "../components/Shared/ContainerShared.vue";
import apartments from "../components/apartment/apartments";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "@/components/apartment/ApartmentsOwner.vue";
export default {
  name: "ApartmentPage",
  components: {
    ContainerShared,
    ApartmentsMainInfo,
    ApartmentsOwner,
  },
  computed: {
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
