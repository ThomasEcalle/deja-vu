
<script setup>
import { ref } from 'vue'
import { MENU } from '../../constants'
import { useStore } from "vuex";
import MenuItem from './MenuItem.vue';

const store = useStore();

const pages = store.state.pages;

const b2cPages = pages.filter(page => page.b2c);
const b2bPages = pages.filter(page => !page.b2c);

console.log(JSON.stringify(b2cPages));
console.log(JSON.stringify(b2bPages));

</script>

<template>
    <div class="absolute h-full w-full dark:text-white text-black mt-[40px] pl-[39px]" :id="MENU">
        <div class="w-[500px] grid grid-cols-2">
            <div>
                <h3 class="dejavu text-[12px] mb-[20px]">Particuliers</h3>
                <ul>
                    <li v-for="item in b2cPages">
                        <MenuItem :title="item.menuTitle" />
                    </li>
                </ul>
            </div>
            <div>
                <h3 class="dejavu text-[12px] mb-[20px]">Professionnels</h3>
                <ul>
                    <li v-for="item in b2bPages">
                         <MenuItem :title="item.menuTitle" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
