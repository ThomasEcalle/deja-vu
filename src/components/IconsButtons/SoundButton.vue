<script setup>

import { useStore } from "vuex";
import { TOGGLE_SOUND } from '../../constants'


const store = useStore();

function onClick() {
    store.commit(TOGGLE_SOUND);
};

</script>

<template>
    <div
        @click="onClick"
        class="
        w-[40px]
        h-[40px]
        sm:w-[60px]
        sm:h-[60px]
        rounded-full 
        flex 
        flex-col 
        justify-center 
        items-center 
        cursor-pointer 
        border-solid 
        border-[1px] 
        border-current 
        dark:border-white 
        overflow-hidden
        sm:hover:bg-transparent/[.1]
        sm:hover:scale-[0.9]
        duration-500"
    >
        <transition name="icons" mode="out-in">
            <svg
                v-if="store.state.soundOn"
                viewBox="0 0 23 19"
                class="fill-current dark:fill-white sm:w-[23px] sm:h-[19px] w-[18px] h-[14px]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.65 2.275 5.174 5.75H1.187a.937.937 0 0 0-.937.938v5.625c0 .517.42.937.937.937h3.987l3.476 3.475c.587.587 1.6.174 1.6-.663V2.938c0-.838-1.014-1.249-1.6-.663zM17.764.28a.945.945 0 1 0-1.038 1.58A9.116 9.116 0 0 1 20.86 9.5a9.116 9.116 0 0 1-4.134 7.64.945.945 0 1 0 1.038 1.58A11.003 11.003 0 0 0 22.75 9.5c0-3.724-1.865-7.17-4.986-9.22zM19 9.5a7.212 7.212 0 0 0-3.35-6.103.934.934 0 0 0-1.294.291.949.949 0 0 0 .29 1.303A5.33 5.33 0 0 1 17.124 9.5a5.33 5.33 0 0 1-2.48 4.509.948.948 0 0 0-.29 1.303.935.935 0 0 0 1.295.291A7.212 7.212 0 0 0 19 9.5zm-5.538-3.003a.938.938 0 0 0-.905 1.643c.505.277.818.799.818 1.36 0 .562-.313 1.083-.817 1.36a.938.938 0 0 0 .904 1.643A3.435 3.435 0 0 0 15.25 9.5a3.433 3.433 0 0 0-1.788-3.003z"
                    class="fill-current dark:fill-white"
                    fill-rule="nonzero"
                />
            </svg>

            <svg
                v-else
            
                viewBox="0 0 21 15"
                class="fill-current dark:fill-white sm:w-[21px] sm:h-[15px] w-[18px] h-[14px]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.9.275 5.424 3.75H1.437a.937.937 0 0 0-.937.938v5.625c0 .517.42.937.937.937h3.987L8.9 14.725c.587.587 1.6.174 1.6-.663V.938C10.5.1 9.486-.31 8.9.275zM18.533 7.5l1.783-1.783a.63.63 0 0 0 0-.891l-.892-.892a.63.63 0 0 0-.891 0L16.75 5.717l-1.783-1.783a.63.63 0 0 0-.891 0l-.892.892a.63.63 0 0 0 0 .891L14.967 7.5l-1.782 1.782a.63.63 0 0 0 0 .892l.891.891a.63.63 0 0 0 .892 0l1.782-1.782 1.783 1.783a.63.63 0 0 0 .891 0l.892-.892a.63.63 0 0 0 0-.891L18.533 7.5z"
                    class="fill-current dark:fill-white"
                    fill-rule="nonzero"
                />
            </svg>
        </transition>
    </div>
</template>

<style scoped>
</style>