<script setup>
import { useStore } from 'vuex';

const props = defineProps({
    name: String,
    labelText: String,
    missing: Boolean,
    placeHolderText: String,
    model: String,
});

const store = useStore();

</script>

<template>
    <div class="sm:text-[2vh] text-[2.8vw] transition-colors duration-1000">
        <label :for="name" class="font-semibold cursor-pointer contact-label">{{ labelText }}</label>
        <textarea
            class="contact-input transition-colors duration-1000 w-full sm:h-[18vh] h-[22vw] block leading-tight mt-[0.8vh] py-4 px-3 appearance-none bg-transparent border border-current rounded-md focus:outline-none resize-none"
            id="name"
            :value="model"
            @input="$emit('update:model', $event.target.value)"
            rows="3"
            :name="name"
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