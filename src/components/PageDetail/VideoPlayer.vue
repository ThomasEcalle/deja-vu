
<script setup>

const props = defineProps({
    videoLink: String,
})

</script>

<template>
    <div class="h-full w-full max-h-[500px] max-w-[646px] flex flex-col justify-center">
        <div class="w-[90%] max-h-[410px] max-w-[646px] aspect-video bg-green-400"></div>
        <div class="border-t border-[#000] mt-[19.5px] mb-[16px] w-[174px]"></div>
        <!--Put icons here-->
    </div>
</template>

<style scoped>
</style>
