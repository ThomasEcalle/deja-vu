
<script setup>

const props = defineProps({
    videoLink: String,
})

</script>

<template>
    <a :href="videoLink" target="_blank">
        <div
            id="player-container"
            class="w-[9vh] h-[9vh] pl-1 cursor-pointer rounded-full border-[1px] border-solid border-current dark:border-white hover:bg-transparent/[.1] hover:scale-[0.9] duration-1000 flex justify-center items-center"
        >
            <svg
                id="player-svg"
                class="w-[2vmax] h-[2vmax] dark:fill-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="nonzero"
                    stroke-width="2"
                    d="M1.666 1.031c.184-.096.421-.001.643.128L7.71 4.18c.466.268 1.049.606 1.655.956l.914.53 1.652.959 5.208 3.017c.14.081.252.167.323.268.018.025.038.05.038.079-.001.168-.207.27-.38.372l-5.237 3.02c-.632.367-1.5.862-2.345 1.344-.707.403-1.4.797-1.923 1.1l-5.311 3.022c-.22.127-.455.217-.637.122a.238.238 0 0 1-.098-.105L1.5 1.496c0-.14.019-.262.07-.36a.236.236 0 0 1 .096-.105z"
                />
            </svg>
        </div>
    </a>
</template>

<style scoped>
</style>
