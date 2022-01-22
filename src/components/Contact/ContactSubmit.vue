<script setup>
import { useStore } from 'vuex';

const props = defineProps({

});

const store = useStore();

</script>

<template>
    <div
        id="contact-submit"
        :class="{ dark: store.state.darkMode }"
        class="group w-[5vmax] h-[5vmax] border border-current cursor-pointer transition-colors duration-[800ms] hover:bg-black hover:border-white rounded-full flex justify-center items-center"
    >
        <svg
            class="group-hover:fill-white"
            :class="{ dark: store.state.darkMode }"
            width="33"
            height="25"
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