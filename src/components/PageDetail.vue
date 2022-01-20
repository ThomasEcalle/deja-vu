
<script setup>
import { useStore } from "vuex";
import { Page } from "../models/Page";
import { PAGE_DETAIL } from './../constants'

const store = useStore();

const page = store.getters.getSelectedPage;

</script>

<template>
    <div class="absolute h-full w-full dark:text-white text-black pt-[12vh] pl-[6vw]" :id="PAGE_DETAIL">
        <div class="flex flex-row">
            <h3 class="stroked text-[10vh] uppercase mr-[12px] leading-[82px]">{{page.detailTitleStroked}}</h3>
            <h3 class="text-[10vh] uppercase leading-[82px]">{{page.detailTitleNormal}}</h3>
        </div>
        <h4 class="text-[3vh] uppercase mt-[10px] font-bold mb-[6vh]">{{page.subTitle}}</h4>
        <p class="w-[60vw] min-vw-[500px] text-[1.8vh]" v-html="page.description"></p>
    </div>
</template>

<style scoped>
.stroked {
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
}
</style>
