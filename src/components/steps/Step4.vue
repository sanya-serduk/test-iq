<script setup>
import StepTitle from "@/components/StepTitle.vue";
import RadiosetSimple from "@/components/RadiosetSimple.vue";
import StepTemplate from "@/components/StepTemplate.vue";
import { useStepControl } from "@/use/useStepControl.js";

const emit = defineEmits(['step-is-ready'])
const stepControl = useStepControl({
    emit,
    id: 4,
    radiobuttons: [ '62', '48', '74', '57', '60', '77' ]
})
</script>

<template>
    <step-template @change="stepControl.handlerChange">
        <step-title>
            Продолжите числовой ряд:
            <br>
            18 20 24 32
        </step-title>
        <radioset-simple :radiobuttons="stepControl.radiobuttons"/>
    </step-template>
</template>