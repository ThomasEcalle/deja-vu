<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import AppBar from './components/AppBar.vue';
import BottomBar from './components/BottomBar.vue';
import Home from './components/Home.vue';
import Menu from './components/Menu/Menu.vue';
import CustomTransitions from './components/CustomTransitions.vue';
import { useStore } from "vuex";
import {HOME, SET_CONTENT, OPEN_MENU, MENU, PAGE_DETAIL} from './constants'
import PageDetail from './components/PageDetail.vue';

const store = useStore();

function onMenuClicked() {
  store.commit(OPEN_MENU);
}

function onModeClicked() {
  store.commit(SET_CONTENT, HOME);
}

</script>

<template>
  <div>

    <!--<transition name="fade" mode="out-in">
      <video v-show="!store.state.darkMode" class="absolute w-full h-full object-cover" autoplay muted loop>
        <source src="./assets/beige_1080_adjusted.mov" type="video/mp4">
      </video>
    </transition>-->

    <!--<transition name="fade" mode="out-in">
      <div v-show="!store.state.darkMode" class="absolute w-full h-full bg-[#ddd2bc] opacity-50" />
    </transition>-->

    <div class="absolute w-full h-full bg-[#ddd2bc]" />

    <div class="absolute z-2 h-screen w-screen flex flex-col justify-around p-[25px]">
      <AppBar
          :onMenuClicked="onMenuClicked"
          :onModeClicked="onModeClicked"
        />
        <div class="relative h-full w-full">
          <CustomTransitions>
            <Home v-if="store.state.content === HOME"/>
            <Menu v-else-if="store.state.content === MENU"/>
            <PageDetail v-else-if="store.state.content === PAGE_DETAIL"/>
          </CustomTransitions>
        </div>
    
      <BottomBar/>
    </div>
    </div>
</template>

<style>

</style>
