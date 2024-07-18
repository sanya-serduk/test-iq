<script setup>
import StepTitle from "@/components/StepTitle.vue";
import RadiosetSimple from "@/components/RadiosetSimple.vue";
import StepTemplate from "@/components/StepTemplate.vue";
import { useStepControl } from "@/use/useStepControl.js";

const emit = defineEmits(['step-is-ready'])
const stepControl = useStepControl({
    emit,
    id: 1,
    radiobuttons: [ 'Мужчина', 'Женщина' ]
})
</script>

<template>
    <step-template @change="stepControl.handlerChange">
        <step-title>Ваш пол:</step-title>
        <radioset-simple :radiobuttons="stepControl.radiobuttons"/>
    </step-template>
</template>