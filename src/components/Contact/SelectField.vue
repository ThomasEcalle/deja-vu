<script setup>

import { useStore } from 'vuex';

const props = defineProps({
    name: String,
    labelText: String,
    missing: Boolean,
    placeHolder: String,
});

const store = useStore();

const options = store.getters.allPages;

console.log(options);

</script>

<template>
    <div class="text-[1vmax] transition-colors duration-1000">
        <label for="name" class="font-semibold cursor-pointer">{{ labelText }}</label>
        <div class="relative">
            <select
                class="transition-colors duration-1000 block w-full h-[2.8vmax] leading-tight mt-[0.8vmax] cursor-pointer appearance-none bg-transparent border border-current py-2 px-3 rounded-md focus:outline-none"
                :class="{ dark: store.state.darkMode }"
                name="name"
                id="name"
            >
                <option v-for="item in options" class="text-current" :value="item">{{ item }}</option>
            </select>
            <div
                class="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700"
            >
                <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    :class="{ dark: store.state.darkMode }"
                >
                    <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
svg {
    transition: all 1000ms;
}
svg.dark {
    fill: white;
}
select {
    color: black;
}

select.dark {
    border-color: white;
    color: white;
}
</style>