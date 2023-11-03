<template>
  <ContainerShared>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, descr, rating, imgUrl, price } in items"
        :key="id"
        :id="id"
        :descr="descr"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
      />
    </div>
  </ContainerShared>
</template>

<script>
import ContainerShared from "../Shared/ContainerShared.vue";
import ApartmentsItem from "../apartment/ApartmentsItem.vue";

export default {
  name: "ApartmentsList",
  components: {
    ApartmentsItem,
    ContainerShared,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
