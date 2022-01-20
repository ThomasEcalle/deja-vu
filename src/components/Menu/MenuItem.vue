
<script setup>

defineProps({
    title: String,
    onClick: Function
})

</script>

<template>
    <li
        :onClick="onClick"
        class="menu-item font-montserrat font-bold cursor-pointer hover:ml-[10px] hover:opacity-60 hover:duration-700 leading-[34px]"
    >{{ title }}</li>
</template>

<style scoped>
</style>