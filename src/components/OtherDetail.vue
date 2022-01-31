
<script setup>
import { PAGE_OTHER } from '../constants';
import { useStore } from 'vuex';
import i18n from '../i18n';

const store = useStore();

const selectedOther = store.getters.getSelectedOther;

</script>

<template>
    <div
        class="absolute h-full w-full sm:pt-0 pt-[30px] pl-[15px] sm:pl-20 flex flex-col items-center sm:justify-center dark:text-white text-black font-normal transition-colors duration-1000"
        :id="PAGE_OTHER"
    >
        <div class="sm:h-full h-[95%] w-full">
            <div class="h-[85%] sm:h-full w-[95%] sm:w-[70%] overflow-scroll sm:overflow-none no-scrollbar sm:flex sm:flex-col sm:justify-center">
                <h2 id="other-detail-title" class="stroked text-[5.5vh] font-lemonmilk">{{ selectedOther.getTitle(i18n.getLocale()) }}</h2>
                <div id="other-detail-description" class="text-[4vw] sm:text-[1.8vh] font-normal sm:mt-0 mt-[10px]" 
                v-html="selectedOther.getDescription(i18n.getLocale())"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
