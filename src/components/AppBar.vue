
<script setup>
import { ref } from 'vue'
import IconButton from './IconButton.vue';
import MenuButton from './IconsButtons/MenuButton.vue'
import SwitchMode from './IconsButtons/SwitchMode.vue';
import Logo from './Logo.vue';

defineProps({
  onMenuClicked: Function,
  onRandomClicked: Function,
  onModeClicked: Function,
})

</script>

<template>
    <div class="h-[90px] flex flex-row justify-between items-center">
        <MenuButton v-bind:onTap="onMenuClicked" />
        <Logo />
        <SwitchMode v-bind:onTap="onModeClicked"/>
    </div>
</template>

<style scoped>

</style>