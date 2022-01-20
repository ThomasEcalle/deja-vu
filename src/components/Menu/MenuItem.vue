
<script setup>

defineProps({
    title: String,
    onClick: Function
})

</script>

<template>
    <li
        :onClick="onClick"
        class="dejavu font-montserrat font-bold cursor-pointer hover:opacity-30 hover:duration-500"
    >{{ title }}</li>
</template>

<style scoped>
</style>