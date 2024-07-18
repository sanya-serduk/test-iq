<script setup>
import { computed, defineAsyncComponent, shallowRef, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import StepContainer from "@/components/StepContainer.vue";
import useToggle from "@/use/useToggle.js";
import { useTestStore } from "@/stores/test.js";
import { findMissingStep } from "@/helpers/index.js";

const numSteps = 12
const route = useRoute()
const router = useRouter()
const store = useTestStore()
const stepComponent = shallowRef(null)
const useReadyNextStep = useToggle(false)
const currentStepNum = computed(() => Number(route.params.id))
const pathNextStep = computed(() => (currentStepNum.value < numSteps ? (currentStepNum.value + 1).toString() : ''))

function handlerChangeStep() {
    const missingStep = findMissingStep(1, currentStepNum.value, store.data)
    if (currentStepNum.value !== missingStep) {
        router.replace(missingStep.toString())
        return
    }
    changeStepComponent()
}

function changeStepComponent() {
    stepComponent.value = defineAsyncComponent(() => {
        return import(`@/components/steps/Step${ currentStepNum.value }.vue`)
            .then(module => {
                module.default.emits = ['step-is-ready']
                return module.default
            })
            .catch(() => {
                console.error(`Failed to load component: Step${ currentStepNum.value }`)
                router.replace('/')
            })
    })
}

watch(currentStepNum, handlerChangeStep, { immediate: true })
</script>

<template>
    <step-container
        :next="pathNextStep"
        :progress="currentStepNum"
        :max-progress="numSteps"
        :next-button-state="useReadyNextStep.state.value"
    >
        <transition>
            <component
                :is="stepComponent"
                @step-is-ready="useReadyNextStep.set"
            />
        </transition>
    </step-container>
</template>