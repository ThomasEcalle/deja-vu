
<script setup>
import { HOME } from '../constants';
import { useI18n } from "vue3-i18n";
const i18n = useI18n();

</script>

<template>
    <div
        class="
        absolute 
        h-full 
        w-full 
        flex flex-col items-center justify-center
        text-[2.8vh]
        sm:text-[2.3vmax] 
        leading-[1.5em] 
        dark:text-white 
        text-black 
        font-lemonmilk 
        font-normal 
        uppercase 
        sm:px-0
        transition-colors duration-1000"
        :id="HOME"
    >
        <h2
            class="home-title text-center overflow-hidden"
        >{{ $t("homeTitle1") }}</h2>
        <h2
            class="home-title text-center overflow-hidden"
        >{{ $t("homeTitle2") }}</h2>
    </div>
</template>

<style scoped>
</style>
