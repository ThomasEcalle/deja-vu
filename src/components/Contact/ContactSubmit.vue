<script setup>
import { useStore } from 'vuex';

const props = defineProps({
    onClick: Function,
});

const store = useStore();

</script>

<template>
    <div
        @click="onClick"
        id="contact-submit"
        :class="{ dark: store.state.darkMode }"
        class="group z-10 w-[16vw] h-[16vw] sm:w-[5vmax] sm:h-[5vmax] border border-current cursor-pointer active:bg-transparent/[.9] transition-colors duration-[800ms] sm:hover:bg-black sm:hover:border-white rounded-full flex justify-center items-center"
    >
        <svg
            class="group-active:fill-white sm:group-hover:fill-white sm:w-[2vw] sm:h-[2.2vw] w-[3vh] h-[3vh]"
            :class="{ dark: store.state.darkMode }"
            viewBox="0 0 33 25"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.422 24.137a1.6 1.6 0 0 0 2.263 0l18.4-18.4a1.6 1.6 0 0 0 0-2.262l-2.263-2.263a1.6 1.6 0 0 0-2.263 0L12.554 16.218 5.548 9.212a1.6 1.6 0 0 0-2.263 0l-2.263 2.263a1.6 1.6 0 0 0 0 2.262l10.4 10.4z"
                fill-rule="nonzero"
            />
        </svg>
    </div>
</template>

<style scoped>
svg {
    transition-property: fill;
    transition-duration: 1000ms;
}
svg.dark {
    fill: white;
}
.dark {
    border-color: white;
}

.dark:hover {
    border-color: black;
}
</style>