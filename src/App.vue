<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { ref } from 'vue'
import AppBar from './components/AppBar.vue';
import BottomBar from './components/BottomBar.vue';
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import CustomTransitions from './components/CustomTransitions.vue';
import RandomComponent from './components/RandomComponent.vue';

var content = ref("Home");

function onRandomClicked() {
  content.value = "Random";
}

function onMenuClicked() {
  content.value = "Menu";
}

function onModeClicked() {
  content.value = "Home";
}

</script>

<template>
  <div>
    <video class="absolute w-full h-full object-cover" autoplay muted loop>
      <source src="./assets/test.mp4" type="video/mp4">
    </video>
    <div class="absolute z-2 h-screen w-screen flex flex-col justify-around p-[25px]">
      <AppBar
          v-bind:onMenuClicked="onMenuClicked"
          v-bind:onModeClicked="onModeClicked"
          v-bind:onRandomClicked="onRandomClicked"
        />
        <div class="relative h-full w-full">
          <CustomTransitions>
            <Home v-if="content === 'Home'"/>
            <Menu v-else-if="content === 'Menu'"/>
            <RandomComponent v-else-if="content === 'Random'"/>
          </CustomTransitions>
        </div>
    
      <BottomBar/>
    </div>
    </div>
</template>

<style>

</style>
