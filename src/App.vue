<template>

<ApartmentsItem
:descr="apartment.descr"
  :price="apartment.price"
   :rating="apartment.rating"
   imgSrc="./img/apartment/apartment-1.jpg"/>
</template>

<script>
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';





export default {
  name: 'App',
  components: { 
    ApartmentsItem,
  },
  data() {
    return {
      apartment: {            
      id: '5f689a2c09b16000e9a2f47b',
        title: 'Delectus et iste.',
        
        descr:
          'Debitis similique unde et eligendi sapiente in iure blanditiis distinctio. Cum nihil temporibus qui quam aut. Nesciunt qui eveniet eum quam voluptate numquam.',
        rating: 3,
        price: 1667,
        location: {
          city: 'Dnipro',
        },
        owner: {
          name: 'Bobbi',
          phone: '582-740-2926',
          email: 'Pete_Carter53@hotmail.com',
        },      
    },
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
</style>
