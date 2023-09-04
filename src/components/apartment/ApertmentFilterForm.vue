<template>
    <div class="form">
        <CustomSelect :items="['apple', 'bananna', 'kiwi']" class="form__select"/>
        <CustomInput/>
        <ButtonSubmit class="form__submit">Housing selection</ButtonSubmit>       
    </div>
</template>

<script>
import CustomSelect from '../Shared/CustomSelect.vue';
import CustomInput from '../Shared/CustomInput.vue';
import ButtonSubmit from '../Shared/ButtonSubmit.vue'


export default {
    components: { CustomSelect, CustomInput, ButtonSubmit }
}
</script>

<style lang="scss" scoped>

.form {
    display: flex;

    &__select {
        margin-right: 30px;

      


}

  &__submit {
            margin-left: auto;

        }

}
        
</style>