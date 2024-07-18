<script setup>
import { computed, useSlots } from "vue";

const slots = useSlots()
const defaultSlots = computed(() => (slots.default ? slots.default() : []))
</script>

<template>
    <form class="step-template">
        <div class="step-template__item" v-for="(item, i) in defaultSlots" :key="i">
            <component :is="item"/>
        </div>
    </form>
</template>

<style>
.step-template {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: auto;
    align-content: center;
    width: 100%;
    height: 100%;
}

.step-template__item + .step-template__item {
    margin-top: 24px;
}
</style>