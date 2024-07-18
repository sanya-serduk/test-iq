<script setup>
import StepTitle from "@/components/StepTitle.vue";
import StepTemplate from "@/components/StepTemplate.vue";
import RadiosetRectColorGrid from "@/components/RadiosetRectColorGrid.vue";
import { useStepControl } from "@/use/useStepControl.js";

const emit = defineEmits(['step-is-ready'])
const stepControl = useStepControl({
    emit,
    id: 5,
    radiobuttons: [
        '#A8A8A8', '#0000A9', '#00A701',
        '#F60100', '#FDFF19', '#A95403',
        '#000000', '#850068', '#46B2AC',
    ]
})
</script>

<template>
    <step-template @change="stepControl.handlerChange">
        <step-title>Выберите цвет, который сейчас наиболее Вам приятен:</step-title>
        <radioset-rect-color-grid :radiobuttons="stepControl.radiobuttons"/>
    </step-template>
</template>