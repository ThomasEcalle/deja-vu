
<script setup>
import { useStore } from "vuex";
import { PAGE_DETAIL } from '../../constants'
import VideoPlayerButton from "./VideoPlayerButton.vue"

const store = useStore();

const page = store.getters.getSelectedPage;

</script>

<template>
    <div
        class="no-scrollbar absolute h-[90%] sm:h-full w-[95%] sm:w-full overflow-scroll sm:overflow-visible dark:text-white text-black pt-[4vh] sm:pt-[8vh] sm:pl-[6vw] transition-colors duration-1000"
        :id="PAGE_DETAIL"
    >
        <div
            id="detail-title"
            class="flex flex-row flex-wrap font-lemonmilk justify-start items-center text-[7.71vw] sm:text-[9vh] uppercase leading-[41px] sm:leading-[90px]"
        >
            <h3 class="stroked mr-[12px]">{{ page.detailTitleStroked }}</h3>
            <h3 class="mr-[30px]">{{ page.detailTitleNormal }}</h3>
            <VideoPlayerButton
                v-if="page.videoLink != undefined && page.videoLink != null"
                :videoLink="page.videoLink"
            />
        </div>
        <h4
            id="detail-subtitle"
            class="text-[4vw] sm:text-[2.8vh] uppercase font-bold mb-[30px] sm:mb-[4.5vh] mt-[10px] sm:mt-0"
        >{{ page.subTitle }}</h4>
        <p
            id="detail-description"
            class="w-full sm:w-[60vw] sm:min-vw-[500px] text-[4vw] sm:text-[2vh] font-normal text-justify"
            v-html="page.description"
        ></p>
    </div>
</template>

<style scoped>
</style>
