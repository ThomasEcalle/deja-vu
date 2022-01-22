<script setup>

import { useStore } from 'vuex';
import { HOME } from '../constants';

const store = useStore();


</script>

<template>
    <transition name="toto">
        <div
            v-if="!store.state.darkMode"
            class="overlay absolute w-full h-full"
            :class="{ menuOverlay: store.state.content != HOME }"
        />
    </transition>
</template>

<style scoped>
.overlay {
    background-color: #ddd2bc80;
    transition: background-color 800ms ease-in-out;
}

.overlay.menuOverlay {
    background-color: #ddd2bcD9;
}
</style>