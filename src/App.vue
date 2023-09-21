<template>
  <div>
    <ContainerShared>  
    <ApertmentFilterForm 
    class="apartment-filter" 
    @submit="loger"/>
    </ContainerShared>   
    <ApartmentsList :items="apartments">          
      <template v-slot:apartment="{apartment}">
        <ApartmentsItem         
          :key="apartment.id"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
         
          />
      </template>         
    </ApartmentsList>  
  </div>     
</template>

<script>
import ApartmentsList from './components/apartment/ApartmentsList.vue'
import apartments from './components/apartment/apartments'
import ApartmentsItem from './components/apartment/ApartmentsItem.vue'
import ApertmentFilterForm from './components/apartment/ApertmentFilterForm.vue'
import ContainerShared from './components/Shared/ContainerShared.vue'


export default {
  name: 'App',
  components: { ApartmentsList, ApartmentsItem, ApertmentFilterForm, ContainerShared },
  data() {
    return {
      text: '',
      apartments,
     
    }
  }, 
  methods: {
    loger(value) {
      console.log(value, '----value form');
    },
   
  }
}
 
  


</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.apartment-filter {
  margin-bottom: 40px;
}
</style>
