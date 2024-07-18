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
    <label class="radio-simple">
        <input
            class="radio-simple__input"
            type="radio"
            :name="name"
            :value="value"
            :checked="checked"
            v-visually-hidden
        />
        <span class="radio-simple__back"></span>
        <span class="radio-simple__checked"></span>
        <span class="radio-simple__label">
            <slot>Выбрать</slot>
        </span>
    </label>
</template>

<style>
.radio-simple {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    background-color: rgba(242, 243, 243, 0.15);
    min-height: 50px;
    cursor: pointer;
}

.radio-simple:hover {
    background-color: rgba(242, 243, 243, 0.3);
}

.radio-simple__back {
    grid-row: 1 / -1;
    grid-column: 1 / -1;
    width: 100%;
    height: 100%;
    background-color: #FFC700;
    opacity: 0;
}

.radio-simple__checked {
    grid-row: 1;
    grid-column: 1;
    display: block;
    min-width: 20px;
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin: 15px 20px 15px 35px;
}

.radio-simple__label {
    grid-row: 1;
    grid-column: 2;
    display: block;
    font-family: PTSerif, serif;
    font-size: 18px;
    line-height: 20px;
    color: #fff;
    margin: 15px;
}

.radio-simple__input:checked ~ .radio-simple__back {
    opacity: 1;
}

.radio-simple__input:checked ~ .radio-simple__checked {
    background-color: #2950C2;
    border-color: #272727;
}

.radio-simple__input:checked ~ .radio-simple__label {
    color: #272727;
}
</style>