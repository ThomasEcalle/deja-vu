
<script setup>
import { PAGE_OTHER } from '../constants';
import { useStore } from 'vuex';

const store = useStore();

const selectedOther = store.getters.getSelectedOther;

</script>

<template>
    <div
        class="absolute h-full w-full flex flex-col items-center justify-center dark:text-white text-black font-normal transition-colors duration-1000"
        :id="PAGE_OTHER"
    >
        <div class="h-full w-full flex justify-center items-center">
            <div class=" w-[55%]">
                <h2 class="stroked text-[3vmax] font-lemonmilk">{{ selectedOther.title }}</h2>
                <div class="text-[0.8vmax]" font-normal v-html="selectedOther.description"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
