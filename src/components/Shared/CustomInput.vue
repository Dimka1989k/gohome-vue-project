<template>
    <input v-bind="$attrs" class="custom-input">   
</template>

<script>
export default {
    name: 'CustomInput',
    computed: {
        listeners() {
            return { 
                ...this.$attrs,
                input: event => this.$emit('input', event.target.value)
             }
            
        }
    }
}
    
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
.custom-input {
  min-height: 40px;  
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
  max-width: 220px;  
  
}

</style>