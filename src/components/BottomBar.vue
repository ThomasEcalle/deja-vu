
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
            <ContactButton v-show="store.state.content != CONTACT" class="absolute bottom-[20px] right-[20px]" />
        </transition>
    </div>
</template>

<style scoped>
</style>