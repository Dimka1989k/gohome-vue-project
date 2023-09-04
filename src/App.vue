<template>
  <div>
    <ContainerUp>  
    <ApertmentFilterForm class="apartment-filter"/>
    </ContainerUp>   
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
// import CustomInput from './components/Shared/CustomInput.vue'
// import CustomSelect from './components/Shared/CustomSelect.vue'
import ApertmentFilterForm from './components/apartment/ApertmentFilterForm.vue'
import ContainerUp from './components/Shared/ContainerUp.vue'


export default {
  name: 'App',
  components: { ApartmentsList, ApartmentsItem, ApertmentFilterForm, ContainerUp },
  data() {
    return {
      text: "",
      apartments,
      
     
        }
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
