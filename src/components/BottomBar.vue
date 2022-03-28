
<script setup>
import ContactButton from './IconsButtons/ContactButton.vue';
import SoundButton from './IconsButtons/SoundButton.vue';
import { useStore } from 'vuex';
import { CONTACT, PAGE_DETAIL } from '../constants';
import LanguagesSwitch from './LanguagesSwitch.vue';

const store = useStore();

</script>

<template>
    <div class="flex flew-row justify-between items-center relative">

        <div class="flex items-center">
            <SoundButton class="sm:mr-10 mr-5"/>
            <LanguagesSwitch />
        </div>
        

        <transition name="toto" duration="1200">
            <ContactButton v-show="store.state.content != CONTACT && store.state.content != PAGE_DETAIL" 
            class="absolute bottom-0 right-0 sm:bottom-[20px] sm:right-[20px] active:scale-[0.8] duration-500 scale-[0.85] sm:scale-[1]" />
        </transition>
    </div>
</template>

<style scoped>
</style>