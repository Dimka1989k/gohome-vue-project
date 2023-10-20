<template>
  <main class="homepage">
    <ContainerShared>
      <ApartmentFilterForm class="apartment-filter" @submit="filter" />
      <p class="selection">Selection according to choice</p>
    </ContainerShared>
    <ContainerShared>
      <p class="paragraph" v-if="!filteredApartments.length">Nothing found</p>
      <ApartmentsList v-else :items="filteredApartments">
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :key="apartment.id"
            :descr="apartment.descr"
            :rating="apartment.rating"
            :imgSrc="apartment.imgUrl"
            :price="apartment.price"
          />
        </template>
      </ApartmentsList>
    </ContainerShared>
  </main>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import apartments from "../components/apartment/apartments";
import ApartmentsItem from "../components/apartment/ApartmentsItem.vue";
import ApartmentFilterForm from "../components/apartment/ApartmentFilterForm.vue";
import ContainerShared from "../components/Shared/ContainerShared.vue";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    ContainerShared,
  },
  data() {
    return {
      text: "",
      apartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },

    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}

.apartment-filter {
  margin-bottom: 40px;
}

.paragraph {
  display: flex;
  justify-content: center;
  padding-top: 200px;
  font-size: 22px;
  color: red;
}

.selection {
  display: flex;
  margin-top: 38px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: #000;
}
</style>
