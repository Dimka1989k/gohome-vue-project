<template>
     <ContainerShared>
    
    <div class="apartments-list" >
       <slot name="title"></slot>
        <ApartmentsItem
        v-for="{id, descr, rating, imgUrl, price  } in items" 
        :key="id"
        :descr="descr"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
         class="apartments-list__item" />
       
    </div>
    </ContainerShared>
   
</template>

<script>

import ApartmentsItem from './ApartmentsItem.vue'
import ContainerShared from '../Shared/ContainerShared.vue'


    export default {
    name: 'ApartmentsList',
    components: { ApartmentsItem, ContainerShared },
    props: {
        items: {
            type: Array,
            default: () => [],
        }
    },
   
}
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;


  &__item {
    margin-bottom: 30px;
  }
}

</style>