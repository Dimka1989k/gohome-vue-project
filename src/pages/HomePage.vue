<template>
  <main class="homepage">
    <SectionSpacer>
      <ContainerShared>
        <ApartmentFilterForm class="apartment-filter" @submit="filter" />
        <p class="selection">Selection according to choice</p>
      </ContainerShared>
      <ContainerShared>
        <p class="paragraph" v-if="!filteredApartments.length">Nothing found</p>
        <ApartmentsList v-else :items="filteredApartments" />
      </ContainerShared>
    </SectionSpacer>
  </main>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentFilterForm from "../components/apartment/ApartmentFilterForm.vue";
import ContainerShared from "../components/Shared/ContainerShared.vue";
import { getApartmentsList } from "../services/apartments.service.js";
import SectionSpacer from "@/components/Shared/SectionSpacer.vue";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentFilterForm,
    ContainerShared,
    SectionSpacer,
  },
  data() {
    return {
      text: "",
      apartments: [],
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
  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    filter(value) {
      if (value.type) {
        return;
      }
      this.filters = value;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;
      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return this.apartments.filter((apartment) => {
        return apartment.price >= Number(this.filters.price);
      });
    },
  },
};
</script>

<style>
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
