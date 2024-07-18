<script setup>
import StepTitle from "@/components/StepTitle.vue";
import RadiosetSimple from "@/components/RadiosetSimple.vue";
import StepTemplate from "@/components/StepTemplate.vue";
import StepImage from "@/components/StepImage.vue";
import imageSrc from "@/assets/img/image03.png";
import { useStepControl } from "@/use/useStepControl.js";

const emit = defineEmits(['step-is-ready'])
const stepControl = useStepControl({
    emit,
    id: 10,
    radiobuttons: [
        'Оно остроконечное',
        'Оно устойчиво',
        'Оно находится в состоянии равновесия',
    ]
})
</script>

<template>
    <step-template @change="stepControl.handlerChange">
        <step-title>Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:</step-title>
        <step-image :src="imageSrc" alt="image step 10"/>
        <radioset-simple :radiobuttons="stepControl.radiobuttons"/>
    </step-template>
</template>