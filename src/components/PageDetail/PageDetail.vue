
<script setup>
import { useStore } from "vuex";
import { PAGE_DETAIL } from '../../constants'
import VideoPlayer from "./VideoPlayer.vue"
import i18n from "../../i18n";

const store = useStore();

const page = store.getters.getSelectedPage;

</script>

<template>
    <div class="h-full sm:h-[95%] w-full bg-red-400 flex flew-row items-center">
        <div class="sm:w-[40%]">
            <div
                class="no-scrollbar text-justify w-[95%] sm:w-[317px] overflow-scroll sm:overflow-visible dark:text-white text-black sm:ml-[6vw] transition-colors duration-1000"
                :id="PAGE_DETAIL"
            >
                <div
                    id="detail-title"
                    class="flex flex-row flex-wrap font-arialblack justify-start items-center text-[7vw] sm:text-[50px] tracking-[9.57px] uppercase leading-[41px] sm:leading-[60px]"
                >
                    <h3 class="stroked mr-[12px]">{{ page.getDetailTitleStroked(i18n.getLocale()) }}</h3>
                    <h3 class="mr-[30px]">{{ page.getDetailTitleNormal(i18n.getLocale()) }}</h3>
                </div>
                <h4
                    id="detail-subtitle"
                    class="text-[4vw] sm:text-[12px] uppercase text-justify tracking-[1.92px] font-bold mb-[30px] sm:mb-[4.5vh] mt-[10px] sm:mt-[-3px]"
                >{{ page.getSubTitle(i18n.getLocale()) }}</h4>

                <div class="w-full border-t dark:border-[#fff] border-[#000] mb-[15px] transition-colors duration-1000"></div>

                <p
                    id="detail-description"
                    class="w-full sm:min-vw-[500px] text-[4vw] sm:text-[1.5vh] font-normal text-justify"
                    v-html="page.getDescription(i18n.getLocale())"
                ></p>
            </div>
        </div>
        <div class="bg-yellow-200 sm:w-[60%] h-full flex justify-center items-center">
            <VideoPlayer :videoLink="page.videoLink" />
            <!--<VideoPlayer
                v-if="page.videoLink != undefined && page.videoLink != null"
                :videoLink="page.videoLink"
            />-->
        </div>
    </div>
</template>

<style scoped>
</style>
