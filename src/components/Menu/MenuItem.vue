
<script setup>

defineProps({
    title: String,
    onClick: Function
})

</script>

<template>
    <li
        :onClick="onClick"
        class="menu-item font-montserrat font-bold cursor-pointer uppercase text-[12px] sm:text-[15px] sm:hover:ml-[5px] dark:hover:text-black hover:text-white hover:duration-700 leading-[34px]"
    >{{ title }}</li>
</template>

<style scoped>
</style>