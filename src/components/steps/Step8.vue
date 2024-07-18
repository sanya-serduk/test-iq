<script setup>
import StepTitle from "@/components/StepTitle.vue";
import StepTemplate from "@/components/StepTemplate.vue";
import imageSrc from '@/assets/img/image01.png';
import StepImage from "@/components/StepImage.vue";
import RadiosetRectNumRow from "@/components/RadiosetRectNumRow.vue";
import { useStepControl } from "@/use/useStepControl.js";

const emit = defineEmits(['step-is-ready'])
const stepControl = useStepControl({
    emit,
    id: 8,
    radiobuttons: ['1', '2', '3', '4']
})
</script>

<template>
    <step-template @change="stepControl.handlerChange">
        <step-title>Выберите правильную фигуру из четырёх пронумерованных.</step-title>
        <step-image :src="imageSrc" alt="image step 8"/>
        <radioset-rect-num-row :radiobuttons="stepControl.radiobuttons"/>
    </step-template>
</template>