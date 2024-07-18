<script setup>
import StepTitle from "@/components/StepTitle.vue";
import RadiosetSimple from "@/components/RadiosetSimple.vue";
import StepTemplate from "@/components/StepTemplate.vue";
import { useStepControl } from "@/use/useStepControl.js";

const emit = defineEmits(['step-is-ready'])
const stepControl = useStepControl({
    emit,
    id: 2,
    radiobuttons: [
        'До 18',
        'От 18 до 28',
        'От 29 до 35',
        'От 36'
    ]
})
</script>

<template>
    <step-template @change="stepControl.handlerChange">
        <step-title>Укажите ваш возраст:</step-title>
        <radioset-simple :radiobuttons="stepControl.radiobuttons"/>
    </step-template>
</template>