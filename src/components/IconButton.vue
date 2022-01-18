
<script setup>
import { ref } from 'vue'

defineProps({
  onTap: Function
})

</script>

<template>
    <div @click="onTap" class="w-[60px] h-[60px] rounded-full bg-red-600 flex flex-col justify-center align-center cursor-pointer">
        A
    </div>
</template>

<style scoped>

</style>