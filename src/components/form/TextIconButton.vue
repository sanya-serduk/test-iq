<script setup>
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <button class="text-icon-button" :disabled="props.disabled">
        <span class="text-icon-button__icon">
            <slot name="icon"></slot>
        </span>
        <span class="text-icon-button__text">
            <slot name="text">Кнопка</slot>
        </span>
    </button>
</template>

<style>
.text-icon-button {
    display: flex;
    align-items: center;
    background-color: #EB1B00;
    min-height: 92px;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
}

.text-icon-button__icon {
    display: block;
}

.text-icon-button__text {
    display: block;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    letter-spacing: 0.05em;
    text-align: left;
    margin-left: 18px;
}
</style>