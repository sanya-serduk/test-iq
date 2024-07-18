<script setup>
import StepTitle from "@/components/StepTitle.vue";
import RadiosetSimple from "@/components/RadiosetSimple.vue";
import StepTemplate from "@/components/StepTemplate.vue";
import { useStepControl } from "@/use/useStepControl.js";

const emit = defineEmits(['step-is-ready'])
const stepControl = useStepControl({
    emit,
    id: 7,
    radiobuttons: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
})
</script>

<template>
    <step-template @change="stepControl.handlerChange">
        <step-title>Какой из городов лишний?</step-title>
        <radioset-simple :radiobuttons="stepControl.radiobuttons"/>
    </step-template>
</template>