
<script setup>
import { useStore } from "vuex";

const store = useStore();

const page = store.getters.getSelectedPage;

</script>

<template>
    <div>
        {{page.detailTitle}}
    </div>
</template>

<style scoped>
</style>
