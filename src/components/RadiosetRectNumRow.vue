<script setup>
import RadioRectNum from "@/components/form/RadioRectNum.vue";

defineProps({
    radiobuttons: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="radioset-rect-num-row">
        <template v-for="radiobutton in radiobuttons" :key="radiobutton.value">
            <div class="radioset-rect-num-row__item">
                <radio-rect-num
                    :name="radiobutton.name"
                    :value="radiobutton.value"
                    :checked="radiobutton.checked"
                />
            </div>
        </template>
    </div>
</template>

<style>
.radioset-rect-num-row {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
}

.radioset-rect-num-row__item {
    width: 41px;
    height: 41px;
}

.radioset-rect-num-row__item + .radioset-rect-num-row__item {
    margin-left: 8px;
}
</style>