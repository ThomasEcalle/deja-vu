<script setup>

import {ref} from 'vue'
import { useStore } from "vuex";
import {CLOSE_MENU} from '../../constants'

const props = defineProps({
  onTap: Function,
})

const store = useStore();

function onClick() {
    if(store.state.menuVisible) {
      store.commit(CLOSE_MENU);
    } else {
      props.onTap();  
    }
};

</script>

<template>
    <div 
        @click="onClick" 
        class="
        w-[60px]
        h-[60px] 
        rounded-full
        flex 
        flex-col 
        justify-center 
        items-center
        cursor-pointer 
        border-solid 
        border-2 
        border-current
        hover:bg-transparent/[.1]
        duration-500
        ">
            <transition name="icons" mode="out-in">
                <svg 
                v-if="!store.state.menuVisible" 
                ref="first"
                class="w-[26px] h-[15px]  fill-current" 
                viewBox="0 0 26 17" 
                xmlns="http://www.w3.org/2000/svg">
                <path  fill-rule="nonzero" d="M.875 3.656h16.25c.345 0 .625-.28.625-.625V1.47a.625.625 0 0 0-.625-.625H.875a.625.625 0 0 0-.625.625V3.03c0 .345.28.625.625.625zm.268 6.25h23.214c.493 0 .893-.28.893-.625V7.72c0-.345-.4-.625-.893-.625H1.143c-.493 0-.893.28-.893.625V9.28c0 .345.4.625.893.625zm-.268 6.25h16.25c.345 0 .625-.28.625-.625V13.97a.625.625 0 0 0-.625-.625H.875a.625.625 0 0 0-.625.625v1.562c0 .345.28.625.625.625z" />
                </svg>
                <svg 
                    v-else 
                    ref="second"
                    class="w-[26px] h-[15px] m-auto fill-current group-hover:fill-blue-500" 
                    viewBox="0 0 17 17" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="m10.542 8.75 5.47-5.47a.811.811 0 0 0 0-1.147l-1.27-1.27a.811.811 0 0 0-1.147 0l-5.47 5.47-5.47-5.47a.811.811 0 0 0-1.147 0l-1.27 1.27a.811.811 0 0 0 0 1.147l5.47 5.47-5.47 5.47a.811.811 0 0 0 0 1.147l1.27 1.27a.811.811 0 0 0 1.147 0l5.47-5.47 5.47 5.47a.811.811 0 0 0 1.147 0l1.27-1.27a.811.811 0 0 0 0-1.147l-5.47-5.47z" fill="currentColor" fill-rule="nonzero"/>
                </svg>
            </transition>
            
    </div>
</template>

<style scoped>
.icons-enter-active {
  animation: iconEntering ease-in-out 500ms;
}
.icons-leave-active {
  animation: iconLeaving ease-in-out 500ms;
}

@keyframes iconEntering {
  0% {
    transform: translate(0px, 20px);
    opacity: 0;
  }
  50% {
    transform: translate(0px, 10px);
    opacity: 0.8;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}

@keyframes iconLeaving {
  0% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
  50% {
    transform: translate(0px, -10px);
    opacity: 0.2;
  }
  100% {
    transform: translate(0px, -20px);
    opacity: 0;
  }
}
</style>