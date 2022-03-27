
<script setup>
import YouTube from 'vue3-youtube'

const props = defineProps({
    videoLink: String,
})

function onReady() {
}


const playerWidth = innerWidth * .9 > 646 ? 646 : innerWidth * .9;
const playerHeight = playerWidth / 1.77;

</script>

<template>
    <div class="sm:h-full w-full max-h-[500px] max-w-[646px] flex flex-col justify-center">
        <div class="w-[90%] max-h-[410px] max-w-[646px] aspect-video">
            <YouTube 
                src="https://www.youtube.com/watch?v=jNQXAC9IVRw" 
                @ready="onReady"
                :width="playerWidth"
                :height="playerHeight"
                ref="youtube" 
                />
        </div>
        <div class="border-t dark:border-[#fff] border-[#000] mt-[19.5px] mb-[16px] w-[174px] transition-colors duration-1000 detail-separators"></div>
        <!--Put icons here-->
    </div>
</template>

<style scoped>
</style>
