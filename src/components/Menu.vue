
<script setup>
import { ref } from 'vue'
import { MENU } from './../constants'
</script>

<template>
    <div class="absolute h-full w-full dark:text-white text-black mt-[40px] pl-[39px]" :id="MENU">
        <div class="w-[500px] grid grid-cols-2">
            <div>
                <h3 class="dejavu text-[12px] mb-[20px]">Particuliers</h3>
                <ul>
                    <li class="dejavu" data-order="2">Titre 1</li>
                    <li class="dejavu" data-order="2">Titre 2</li>
                </ul>
            </div>
            <div>
                <h3 class="dejavu text-[12px] mb-[20px]">Professionnels</h3>
                <ul>
                    <li class="dejavu" data-order="3">Titre 3</li>
                    <li class="dejavu" data-order="3">Titre 4</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
