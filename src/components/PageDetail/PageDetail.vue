
<script setup>
import { useStore } from "vuex";
import { PAGE_DETAIL } from '../../constants'
import VideoPlayerButton from "./VideoPlayerButton.vue"

const store = useStore();

const page = store.getters.getSelectedPage;

</script>

<template>
    <div
        class="absolute h-full w-full dark:text-white text-black pt-[12vh] pl-[6vw] transition-colors duration-1000"
        :id="PAGE_DETAIL"
    >
        <div
            id="detail-title"
            class="flex flex-row font-lemonmilk justify-start items-center text-[6.3vmax] uppercase leading-[90px]"
        >
            <h3 class="stroked mr-[12px]">{{ page.detailTitleStroked }}</h3>
            <h3 class="mr-[12px]">{{ page.detailTitleNormal }}</h3>
            <VideoPlayerButton
                v-if="page.videoLink != undefined && page.videoLink != null"
                :videoLink="page.videoLink"
            />
        </div>
        <h4
            id="detail-subtitle"
            class="text-[1.5vmax] uppercase font-bold mt-[10px] mb-[3vmax]"
        >{{ page.subTitle }}</h4>
        <p
            id="detail-description"
            class="w-[60vw] min-vw-[500px] text-[0.9vmax] font-normal"
            v-html="page.description"
        ></p>
    </div>
</template>

<style scoped>
</style>
