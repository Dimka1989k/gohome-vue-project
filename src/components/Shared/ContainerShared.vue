<template>
    <div class="container">
        <slot>Default value</slot>
    </div>
</template>

<script>
export default {
        name: 'ContainerShared',
        
    }
</script>

<style lang="scss" scoped>
.container {
    width: 1110px;
    margin: 0 auto;

}

</style>