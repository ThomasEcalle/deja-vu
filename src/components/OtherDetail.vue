
<script setup>
import { PAGE_OTHER } from '../constants';
import { useStore } from 'vuex';

const store = useStore();

const selectedOther = store.getters.getSelectedOther;

</script>

<template>
    <div
        class="absolute h-full w-full pl-20 flex flex-col items-center justify-center dark:text-white text-black font-normal transition-colors duration-1000"
        :id="PAGE_OTHER"
    >
        <div class="h-full w-full flex justify-center items-center">
            <div class=" w-[60%]">
                <h2 id="other-detail-title" class="stroked text-[5.5vh] font-lemonmilk">{{ selectedOther.title }}</h2>
                <div id="other-detail-description" class="text-[1.7vh]" font-normal v-html="selectedOther.description"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
