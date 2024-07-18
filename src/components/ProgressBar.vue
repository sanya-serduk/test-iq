<script setup>
import { computed } from "vue";

const props = defineProps({
    progress: {
        type: Number,
        required: true
    }
})

const lineStyle = computed(() => ({
    transform: `translateX(${ props.progress - 100 }%)`
}))

</script>

<template>
    <div class="progressbar">
        <div class="progressbar__line" :style="lineStyle"></div>
    </div>
</template>

<style>
.progressbar {
    background-color: rgba(242, 243, 243, 0.6);
    width: 100%;
    height: 11px;
    border-radius: 11px;
    overflow: hidden;
}
.progressbar__line {
    background-color: #3BDE7C;
    width: 100%;
    height: 100%;
    border-radius: 11px;
    transition: 0.5s ease-out;
}
</style>