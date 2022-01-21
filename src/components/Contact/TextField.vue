<script setup>
import { useStore } from 'vuex';

const props = defineProps({
    type: String,
    name: String,
    labelText: String,
    missing: Boolean,
    placeHolderText: String,
});

const store = useStore();

</script>

<template>
    <div class="text-[1vmax] transition-colors duration-1000">
        <label :for="name" class="font-semibold cursor-pointer">{{ labelText }}</label>
        <input
            :type="type"
            :name="name"
            :id="name"
            :placeholder="placeHolderText"
            :class="{ dark: store.state.darkMode }"
            class="transition-colors duration-1000 text-current cursor-pointer block h-[2.8vmax] mt-[0.8vmax] shadow appearance-none border border-current rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
        />

        <p v-if="missing" class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
</template>

<style scoped>
input {
    /*transition: all 1000ms;*/
    color: black;
}
input::placeholder {
    transition-duration: 1000ms;
    transition-property: color;
    color: #00000075;
}
input.dark::placeholder {
    color: white;
}

input.dark {
    border-color: white;
    color: white;
}
</style>