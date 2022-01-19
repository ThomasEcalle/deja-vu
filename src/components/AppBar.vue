
<script setup>
import { ref } from 'vue'
import IconButton from './IconButton.vue';

defineProps({
  onMenuClicked: Function,
  onRandomClicked: Function,
  onModeClicked: Function,
})

</script>

<template>
    <div class="h-[90px] bg-amber-600 flex flex-row justify-between items-center">
        <IconButton v-bind:onTap="onMenuClicked"/>
        <IconButton v-bind:onTap="onRandomClicked"/>
        <IconButton v-bind:onTap="onModeClicked"/>
    </div>
</template>

<style scoped>

</style>