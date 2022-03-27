
<script setup>
import YouTube from 'vue3-youtube'

const props = defineProps({
    videoLink: String,
})

function onReady() {
    console.log("Youtube player ready");
}


const playerWidth = innerWidth * .9 > 646 ? 646 : innerWidth * .9;
const playerHeight = playerWidth / 1.77;

console.log(playerWidth);
console.log(playerHeight);

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
        <div class="border-t border-[#000] mt-[19.5px] mb-[16px] w-[174px]"></div>
        <!--Put icons here-->
    </div>
</template>

<style scoped>
</style>
