
<script setup>
import { ref } from 'vue';
import './../i18n'
import i18n from './../i18n';

const currentLocale = ref(i18n.getLocale());

function onFrenchClicked() {
    i18n.setLocale("fr");
    localStorage.selectedLocale = "fr";
    currentLocale.value = "fr";
}

function onEnglishClicked() {
    i18n.setLocale("en");
    localStorage.selectedLocale = "en";
    currentLocale.value = "en";
}

</script>

<template>
    <div class="flex items-center">
        <div
            @click="onFrenchClicked"
            :class="currentLocale.includes('fr') ? 'font-bold' : 'font-normal'"
            class="cursor-pointer font-lemonmilk hover:text-white dark:text-white hover:dark:text-black"
        >FR</div>
        <div class="w-[1px] h-[15px] bg-black mx-2 dark:bg-white"></div>
        <div
            @click="onEnglishClicked"
            :class="currentLocale.includes('en') ? 'font-bold' : 'font-normal'"
            class="cursor-pointer font-lemonmilk hover:text-white dark:text-white hover:dark:text-black"
        >EN</div>
    </div>
</template>

<style scoped>
</style>