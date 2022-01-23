<script setup>
import { useStore } from 'vuex';

const props = defineProps({
    type: String,
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
        <input
            :type="type"
            :name="name"
            :id="name"
            :value="model"
            @input="$emit('update:model', $event.target.value)"
            :placeholder="placeHolderText"
            :class="{ dark: store.state.darkMode, missing: missing }"
            class="contact-input transition-colors duration-1000 text-current cursor-pointer block sm:h-[6vh] h-[11vw] mt-[0.8vmax] shadow appearance-none border border-current rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
        />

        <p v-if="missing" class="contact-label text-red-500 text-[2.5vw] italic">Veuillez remplir ce champ.</p>
    </div>
</template>

<style scoped>
input {
    /*transition: all 1000ms;*/
    color: black;
}

input.missing {
    border-color: red;
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