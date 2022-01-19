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
  <div class="h-screen bg-current flex flex-col justify-around p-[25px]">
    <AppBar
        v-bind:onMenuClicked="onMenuClicked"
        v-bind:onModeClicked="onModeClicked"
        v-bind:onRandomClicked="onRandomClicked"
      />
      <div class="relative h-full">
        <CustomTransitions>
          <Home v-if="content === 'Home'"/>
          <Menu v-else-if="content === 'Menu'"/>
          <RandomComponent v-else-if="content === 'Random'"/>
        </CustomTransitions>
      </div>
  
    <BottomBar/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
