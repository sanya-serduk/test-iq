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
        class="radio-rect-grid"
        :style="{ backgroundColor: value }"
    >
        <input
            class="radio-rect-grid__input"
            type="radio"
            :name="name"
            :value="value"
            :checked="checked"
            v-visually-hidden
        />
        <span class="radio-rect-grid__checked"></span>
    </label>
</template>

<style>
.radio-rect-grid {
    position: relative;
    display: block;
    background-color: #fff;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.radio-rect-grid__checked {
    display: block;
    width: 100%;
    height: 100%;
}

.radio-rect-grid__checked:hover {
    outline: 4px solid #FFC700;
}

.radio-rect-grid__input:checked ~ .radio-rect-grid__checked {
    outline: 6px solid #FFC700;
}
</style>