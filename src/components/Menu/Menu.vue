
<script setup>
import { MENU, OPEN_PAGE_DETAIL } from '../../constants'
import { useStore } from "vuex";
import MenuItem from './MenuItem.vue';

const store = useStore();

const b2cPages = store.getters.b2cPages;
const b2bPages = store.getters.b2bPages;

function onClick(itemId) {
    store.commit(OPEN_PAGE_DETAIL, itemId);
}

</script>

<template>
    <div class="absolute h-full w-full dark:text-white text-black mt-[40px] pl-[39px]" :id="MENU">
        <div class="w-[500px] grid grid-cols-2">
            <div>
                <h3 class="menu-category text-[12px] mb-[20px]">Particuliers</h3>
                <ul>
                    <li v-for="item in b2cPages">
                        <MenuItem :title="item.menuTitle" :onClick="() => onClick(item.id)" />
                    </li>
                </ul>
            </div>
            <div>
                <h3 class="menu-category text-[12px] mb-[20px]">Professionnels</h3>
                <ul>
                    <li v-for="item in b2bPages">
                        <MenuItem :title="item.menuTitle" :onClick="() => onClick(item.id)" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
