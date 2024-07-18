<script setup>
import { computed } from "vue";
import ProgressBar from "@/components/ProgressBar.vue";
import TextButton from "@/components/form/TextButton.vue";
import { useRouter } from "vue-router";
import HeaderDefault from "@/components/HeaderDefault.vue";

const props = defineProps({
    maxProgress: {
        type: Number,
        required: true
    },
    progress: {
        type: Number,
        required: true
    },
    next: {
        type: String,
        required: false
    },
    nextButtonState: {
        type: Boolean,
        required: true
    }
})

const router = useRouter()
const progress = computed(() => Math.round(props.progress / props.maxProgress * 100))
</script>

<template>
    <header-default>
        <div class="step-container__header">
            <div class="step-container__header-icon">
                <img src="@/assets/img/rain_bk3_small.png" alt="header icon"/>
            </div>
            <div class="step-container__header-text">
                тест на определение IQ
            </div>
        </div>
    </header-default>
    <main class="step-container">
        <div class="step-container__progressbar">
            <progress-bar :progress="progress"/>
        </div>
        <div class="step-container__content">
            <slot>
                <div class="step-container__content-default">
                    ...
                </div>
            </slot>
        </div>
        <div class="step-container__navbar">
            <text-button
                @click="router.push(props.next)"
                color="yellow"
                :disabled="!props.nextButtonState"
                v-if="props.next"
            >
                Далее
            </text-button>
        </div>
    </main>
</template>

<style>
.step-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    width: 100%;
    min-height: var(--dvh);
    padding-top: var(--header-height);
}

.step-container__header {
    display: flex;
    height: 100%;
    align-items: center;
    align-content: center;
}

.step-container__header-icon {
    height: 46px;
    object-fit: cover;
    display: flex;
}

.step-container__header-text {
    color: #FFC700;
    font-family: Yeseva One, serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin: 3px 0 0 10px;
}

.step-container__progressbar {
    padding: 17px 30px;
}

.step-container__content {
    position: relative;
    width: 100%;
    height: 100%;
}

.step-container__content-default {
    padding: 20px;
}

.step-container__navbar {
    display: flex;
    justify-content: center;
    min-height: 91px;
    padding: 25px;
}
</style>