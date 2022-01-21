<script setup>
import { useStore } from 'vuex';

const props = defineProps({
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
        <textarea
            class="transition-colors duration-1000 w-full h-[9vmax] block leading-tight mt-[0.8vmax] py-2 px-3 appearance-none bg-transparent border border-current rounded-md focus:outline-none resize-none"
            id="name"
            rows="3"
            :placeholder="placeHolderText"
            :class="{ dark: store.state.darkMode }"
        ></textarea>
    </div>
</template>

<style scoped>
textarea::placeholder {
    transition-duration: 1000ms;
    transition-property: color;
    color: #00000075;
}
textarea {
    color: black;
}
textarea.dark::placeholder {
    color: white;
}

textarea.dark {
    border-color: white;
    color: white;
}
</style>