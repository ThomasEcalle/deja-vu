
<script setup>
import { useStore } from "vuex";
import { PAGE_DETAIL } from '../../constants'
import VideoPlayer from "./VideoPlayer.vue"
import i18n from "../../i18n";

const store = useStore();

const page = store.getters.getSelectedPage;


function strokedTitle(locale) {
    return page.getDetailTitleStroked(locale) != null ? page.getDetailTitleStroked(locale).substring(0, 7) : "";
}

function normalTitle(locale) {
    return page.getDetailTitleNormal(locale) != null ? page.getDetailTitleNormal(locale).substring(0, 7) : "";
}

</script>

<template>
    <div
        class="absolute sm:h-full h-full w-full flex flex-col sm:flex-row sm:pt-[12vh] overflow-scroll no-scrollbar"
        :id="PAGE_DETAIL"
    >
        <div class="sm:w-[40%] sm:h-[80%]">
            <div
                class="text-justify w-[95%] sm:w-[328px] dark:text-white text-black ml-[10px] sm:ml-[25%] transition-colors duration-1000"
            >
                <div
                    class="text-justify font-arialblack text-[40px] sm:text-[50px] sm:mt-[-8px] tracking-[12.06px] sm:tracking-[9.57px] uppercase leading-[1.1em] sm:leading-[50px]"
                    id="detail-title"
                >
                    <h3 class="stroked">{{ strokedTitle(i18n.getLocale()) }}</h3>
                    <h3>{{ normalTitle(i18n.getLocale()) }}</h3>
                </div>

                <h4
                    id="detail-subtitle"
                    class="text-[9.6px] sm:text-[12px] uppercase tracking-[1.92px] font-bold mb-[21px] sm:mb-[4.5vh] mt-[2px] sm:mt-[-3px]"
                >{{ page.getSubTitle(i18n.getLocale()) }}</h4>

                <div
                    class="w-full border-t dark:border-[#fff] border-[#000] mb-[4px] sm:mb-[15px] transition-colors duration-1000 detail-separators"
                ></div>

                <p
                    id="detail-description"
                    class="w-full sm:min-vw-[500px] text-[10px] sm:text-[1.4vh] leading-[16px] sm:leading-[20px] font-normal text-justify"
                    v-html="page.getDescription(i18n.getLocale())"
                ></p>

                <div
                    v-if="page.getApproach(i18n.getLocale()) != undefined && page.getApproach(i18n.getLocale()) != null"
                >
                    <div
                        class="w-[133px] sm:w-[166px] border-t dark:border-[#fff] border-[#000] mb-[8px] mt-[7px] sm:mb-[12px] sm:mt-[14px] transition-colors duration-1000 detail-separators"
                    ></div>
                    <p
                        id="detail-approach"
                        class="w-full sm:min-vw-[500px] text-[10px] sm:text-[1.4vh] leading-[16px] sm:leading-[20px] font-normal text-justify"
                        v-html="page.getApproach(i18n.getLocale())"
                    ></p>
                </div>
            </div>
        </div>
        <div
            class="sm:w-[60%] flex justify-center items-start pt-[16px] sm:pt-[0px] sm:h-[80%]"
            id="player-container"
        >
            <VideoPlayer
                v-if="page.videoLink != undefined && page.videoLink != null"
                :videoLink="page.videoLink"
            />
        </div>
    </div>
</template>

<style scoped>
</style>
