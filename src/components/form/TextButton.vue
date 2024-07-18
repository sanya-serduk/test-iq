<script setup>
import { computed } from "vue";
import {useRouter} from "vue-router";

const props = defineProps({
    color: {
        type: String,
        default: 'transparent'
    },
    href: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const colors = [
    'yellow',
    'transparent'
]

const colorModification = computed(() => colors.includes(props.color) ? `text-button--${ props.color }` : '')
const classes = computed(() => ['text-button', colorModification.value])
const router = useRouter()

function handlerClick() {
    if (!props.href) return
    router.push(props.href)
}
</script>

<template>
    <button :class="classes" :disabled="props.disabled" @click="handlerClick">
        <slot>Кнопка</slot>
    </button>
</template>

<style>
.text-button {
    min-width: 189px;
    min-height: 41px;
    font-family: Merriweather, serif;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.1em;
    color: #0D0C11;
    border: none;
    border-radius: 20px;
    padding: 11px 20px;
    cursor: pointer;
    transition: .1s ease-out;
}

.text-button:disabled {
    background-color: #f2f2f2;
    color: #8E8E8E;
    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.25);
    pointer-events: none;
}

.text-button--yellow {
    background-color: #FFC700;
    color: #0D0C11;
}

.text-button--yellow:hover {
    background-color: #ffd23b;
}

.text-button--transparent {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
}

.text-button--transparent:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
</style>