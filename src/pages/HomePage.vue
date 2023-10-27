<template>
  <main class="homepage">
    <SectionSpacer>
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
              :id="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
            />
          </template>
        </ApartmentsList>
      </ContainerShared>
    </SectionSpacer>
  </main>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentsItem from "../components/apartment/ApartmentsItem.vue";
import ApartmentFilterForm from "../components/apartment/ApartmentFilterForm.vue";
import ContainerShared from "../components/Shared/ContainerShared.vue";
import { getApartmentsList } from "../services/apartments.service.js";
import SectionSpacer from "@/components/Shared/SectionSpacer.vue";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentsItem,
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
