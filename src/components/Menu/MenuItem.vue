
<script setup>

defineProps({
    title: String,
})

</script>

<template>
    <li
        class="dejavu font-montserrat  font-bold cursor-pointer hover:translate-x-[10px] hover:opacity-30 hover:duration-500"
    >{{ title }}</li>
</template>

<style scoped>
</style>