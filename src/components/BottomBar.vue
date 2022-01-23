
<script setup>
import ContactButton from './IconsButtons/ContactButton.vue';
import SoundButton from './IconsButtons/SoundButton.vue';
import { useStore } from 'vuex';
import { CONTACT } from '../constants';

const store = useStore();

</script>

<template>
    <div class="flex flew-row justify-between items-center relative">
        <SoundButton />

        <transition name="toto" duration="1200">
            <ContactButton v-show="store.state.content != CONTACT" class="absolute bottom-0 right-0 sm:bottom-[20px] sm:right-[20px] scale-[0.9] sm:scale-[1]" />
        </transition>
    </div>
</template>

<style scoped>
</style>