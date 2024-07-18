<script setup>
import StepTitle from "@/components/StepTitle.vue";
import StepImage from "@/components/StepImage.vue";
import StepTemplate from "@/components/StepTemplate.vue";
import imageSrc from '@/assets/img/image02.png';
import RadiosetRectNumRow from "@/components/RadiosetRectNumRow.vue";
import { useStepControl } from "@/use/useStepControl.js";

const emit = defineEmits(['step-is-ready'])
const stepControl = useStepControl({
    emit,
    id: 11,
    name: 'step11',
    radiobuttons: ['34', '36', '53', '44', '66', '62'],
})
</script>

<template>
    <step-template @change="stepControl.handlerChange">
        <step-title>Вставьте подходящее число</step-title>
        <step-image :src="imageSrc" alt="image step 11"/>
        <radioset-rect-num-row :radiobuttons="stepControl.radiobuttons"/>
    </step-template>
</template>