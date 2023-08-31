<template>
     <ContainerShared>         
    <div class="apartments-list">     
           <template v-for="apartment in items">
            <slot name="apartment" v-bind:apartment="apartment"></slot>
         </template>
       
    </div>    
    </ContainerShared>   
</template>

<script>
import ContainerShared from '../Shared/ContainerShared.vue';


    export default {
    name: 'ApartmentsList',
    components: {ContainerShared},
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


 
}

</style>