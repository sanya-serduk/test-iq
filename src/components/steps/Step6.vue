<script setup>
import StepTitle from "@/components/StepTitle.vue";
import RadiosetRectColorGrid from "@/components/RadiosetRectColorGrid.vue";
import StepTemplate from "@/components/StepTemplate.vue";
import { useStepControl } from "@/use/useStepControl.js";

const emit = defineEmits(['step-is-ready'])
const stepControl = useStepControl({
    emit,
    id: 6,
    radiobuttons: [
        '#A8A8A8', '#46B2AC', '#A95403',
        '#00A701', '#000000', '#F60100',
        '#850068', '#FDFF19', '#0000A9',
    ]
})
</script>

<template>
    <step-template @change="stepControl.handlerChange">
        <step-title>Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:</step-title>
        <radioset-rect-color-grid :radiobuttons="stepControl.radiobuttons"/>
    </step-template>
</template>