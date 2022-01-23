<script setup>

import {ref} from 'vue'
import { useStore } from "vuex";
import {TOGGLE_DARKMODE} from '../../constants'


const store = useStore();

function onClick() {
   store.commit(TOGGLE_DARKMODE);
};

</script>

<template>
    <div 
        @click="onClick" 
        class="
        w-[45px]
        h-[45px]
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
        duration-500
        ">
            <transition name="icons" mode="out-in">
                <svg 
                v-if="!store.state.darkMode" 
                class="w-[15px] h-[15px] sm:w-[18px] sm:h-[21px]  fill-current" 
                viewBox="0 0 18 21"
                xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.063 20.5a9.98 9.98 0 0 0 7.768-3.703.469.469 0 0 0-.452-.756c-4.852.924-9.307-2.796-9.307-7.693a7.83 7.83 0 0 1 3.965-6.812.47.47 0 0 0-.147-.869C11.39.575 10.571.5 10.063.5c-5.52 0-10 4.473-10 10 0 5.52 4.473 10 10 10z" fill="#000" fill-rule="nonzero"/>
                </svg>
                <svg 
                    v-else 
                    class="w-[20px] h-[21px] m-auto fill-current group-hover:fill-blue-500" 
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6.75a3.756 3.756 0 0 0-3.75 3.75A3.756 3.756 0 0 0 10 14.25a3.756 3.756 0 0 0 3.75-3.75A3.756 3.756 0 0 0 10 6.75zm9.625 3.145-3.7-1.848 1.31-3.922a.675.675 0 0 0-.856-.855l-3.922 1.308L10.605.875c-.25-.5-.96-.5-1.21 0l-1.848 3.7-3.926-1.31a.675.675 0 0 0-.855.856l1.308 3.922L.375 9.895c-.5.25-.5.96 0 1.21l3.7 1.848-1.31 3.926a.675.675 0 0 0 .856.855l3.922-1.308 1.848 3.699c.25.5.96.5 1.21 0l1.848-3.7 3.922 1.31a.675.675 0 0 0 .856-.856l-1.31-3.922 3.7-1.848a.677.677 0 0 0 .008-1.214zm-6.09 4.14a5.005 5.005 0 0 1-7.07 0 5.005 5.005 0 0 1 0-7.07 5.005 5.005 0 0 1 7.07 0 5.005 5.005 0 0 1 0 7.07z" fill="#FFF" fill-rule="nonzero"/>
                </svg>
            </transition>
            
    </div>
</template>

<style scoped>

</style>