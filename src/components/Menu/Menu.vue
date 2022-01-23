
<script setup>
import { MENU, OPEN_OTHER_DETAIL, OPEN_PAGE_DETAIL, SET_CONTENT } from '../../constants'
import { useStore } from "vuex";
import MenuItem from './MenuItem.vue';

const store = useStore();

const b2cPages = store.getters.b2cPages;
const b2bPages = store.getters.b2bPages;
const others = store.getters.allOthers;

function onClick(itemId) {
    store.commit(OPEN_PAGE_DETAIL, itemId);
}

function onOtherClicked(itemId) {
    store.commit(OPEN_OTHER_DETAIL, itemId);
}

</script>

<template>
    <div
        class="absolute h-full w-full dark:text-white text-black mt-[20px] sm:mt-[40px] pl-[25px] sm:pl-[39px] duration-1000"
        :id="MENU"
    >
        <div class="w-[500px] grid sm:grid-cols-2 grid-cols-1 ">
            <div>
                <h3 class="menu-category font-normal text-[12px] sm:text-[15px] mb-[0px] sm:mb-[10px] leading-[34px]">Professionnels</h3>
                <ul>
                    <li v-for="item in b2bPages">
                        <MenuItem :title="item.menuTitle" :onClick="() => onClick(item.id)" />
                    </li>
                </ul>
            </div>
            <div>
                <h3 class="menu-category text-[12px] sm:text-[15px] mb-[0px] sm:mb-[10px] leading-[34px] mt-[22px] sm:mt-0">Particuliers</h3>
                <ul>
                    <li v-for="item in b2cPages">
                        <MenuItem :title="item.menuTitle" :onClick="() => onClick(item.id)" />
                    </li>
                </ul>
            </div>
        </div>
        <div
            class="separator w-[40px] h-[2px] my-[20px] border border-current dark:border-white transition-colors duration-1000"
        ></div>
        <ul>
            <li v-for="item in others">
                <h4
                    :onClick="() => onOtherClicked(item.id)"
                    class="menu-item font-montserrat font-bold cursor-pointer text-[12px] sm:text-[15px] dark:hover:text-black hover:text-white hover:duration-700 leading-[34px] hover:ml-[5px] uppercase"
                >{{ item.title }}</h4>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>
