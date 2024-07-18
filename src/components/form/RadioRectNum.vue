<script setup>
defineProps({
    name: {
        type: String,
        default: 'radio'
    },
    value: {
        type: [Number, String],
        default: 0
    },
    checked: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <label
        class="radio-rect-num"
        :style="{ backgroundColor: value }"
    >
        <input
            class="radio-rect-num__input"
            type="radio"
            :name="name"
            :value="value"
            :checked="checked"
            v-visually-hidden
        />
        <span class="radio-rect-num__label">
            <slot>{{ value }}</slot>
        </span>
    </label>
</template>

<style>
.radio-rect-num {
    position: relative;
    display: block;
    background-color: #fff;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.radio-rect-num__label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-family: PTSerif, serif;
    font-size: 18px;
    color: #0D0C11;
    padding: 15px;
}

.radio-rect-num__input:hover ~ .radio-rect-num__label {
    background-color: rgba(0,0,0,0.2);
}

.radio-rect-num__input:checked ~ .radio-rect-num__label {
    border: 6px solid #FFC700;
}
</style>