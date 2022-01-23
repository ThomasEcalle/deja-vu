<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { HOME, SET_CONTENT, isSmallDevice } from "../../constants";

const store = useStore();

function onClick() {
    store.commit(SET_CONTENT, HOME);
}

var hovering = ref(false);

const smallDevice = isSmallDevice();

</script>

<template>
    <div class="group">
        <svg
            :onClick="onClick"
            @mouseenter="smallDevice ? hovering = false : hovering = true"
            @mouseleave="hovering = false"
            class="cursor-pointer duration-1000 sm:hover:scale-[0.95] sm:group-hover:white sm:w-[256px] sm:h-[43px] w-[20vh] h-[8vh]"
            viewBox="0 0 256 43"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fill-rule="evenodd">
                <path
                    class="duration-1000 path"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.422"
                    :class="{ dark: ((store.state.darkMode && !hovering) || (!store.state.darkMode && hovering)) }"
                    fill="currentColor"
                    d="M0 41.098h12.625c3.166 0 5.977-.623 8.43-1.87 2.454-1.246 4.358-2.995 5.714-5.248 1.354-2.251 2.032-4.836 2.032-7.754 0-2.917-.678-5.502-2.032-7.755-1.356-2.252-3.26-4-5.714-5.247-2.453-1.247-5.264-1.87-8.43-1.87H0v29.744zM4.28 37.4v-22.35h8.088c2.424 0 4.558.467 6.398 1.402 1.84.935 3.259 2.246 4.258 3.93.998 1.686 1.498 3.633 1.498 5.843s-.5 4.158-1.498 5.842c-.999 1.686-2.418 2.996-4.258 3.931-1.84.935-3.974 1.402-6.398 1.402H4.279zM243.333 41.438c3.994 0 7.104-1.126 9.329-3.378 2.226-2.252 3.338-5.517 3.338-9.794V11.354l-4.151 3.012v13.73c0 3.23-.728 5.63-2.183 7.202-1.455 1.572-3.552 2.358-6.29 2.358-5.621 0-8.431-3.186-8.431-9.56v-13.73l-4.28-3.012v16.912c0 4.249 1.113 7.507 3.339 9.773 2.225 2.266 5.334 3.399 9.329 3.399M102.805 31.537V11.354l-4.242 3.011.005 17.385c0 1.983-.435 3.484-1.305 4.504-.87 1.02-2.148 1.53-3.83 1.53-2.022 0-3.762-.776-5.229-2.301l-2.691 2.672a9.623 9.623 0 0 0 2.913 2.157c1.54.75 3.21 1.125 5.006 1.125 3.082 0 5.415-.828 6.998-2.485 1.583-1.657 2.375-4.128 2.375-7.415"
                />
                <path
                    class="duration-1000 path"
                    stroke="currentColor"
                    :class="{ dark: ((store.state.darkMode && !hovering) || (!store.state.darkMode && hovering)) }"
                    stroke-width="1.422"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m125.286 42 13.796-31.119L152.866 42M141.33 6.474l-5.721-5.425"
                />
                <path
                    class="duration-1000 path"
                    :class="{ dark: ((store.state.darkMode && !hovering) || (!store.state.darkMode && hovering)) }"
                    fill="currentColor"
                    d="M50.85 15.051h17.46l-3.033-3.697H46.57v29.744h18.707l3.033-3.697H50.85zM55.187 6.523h3.851L65.015 1h-4.008z"
                />
                <path
                    class="duration-1000 path"
                    :class="{ dark: ((store.state.darkMode && !hovering) || (!store.state.darkMode && hovering)) }"
                    stroke="currentColor"
                    stroke-width="1.422"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m212.98 11.198-13.61 30.486-13.502-30.486M164.215 26.729h8.001"
                />
            </g>
        </svg>
    </div>
</template>

<style scoped>
path.dark {
    color: white;
}

@media (min-width: 700px) {
    path.hoverDark {
        color: white;
    }
}

.path {
    color: black;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 10000ms linear forwards;
}

@keyframes dash {
    to {
        stroke-dashoffset: 0;
    }
}
</style>