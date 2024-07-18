<script setup>
import RadioRectColor from "@/components/form/RadioRectColor.vue";

defineProps({
    radiobuttons: {
        type: Array,
        required: true
    }
})

</script>

<template>
    <div class="radioset-rect-grid">
        <template v-for="radiobutton in radiobuttons" :key="radiobutton.value">
            <div class="radioset-rect-grid__item">
                <div class="radioset-rect-grid__button">
                    <RadioRectColor
                        :name="radiobutton.name"
                        :value="radiobutton.value"
                        :checked="radiobutton.checked"
                    />
                </div>
            </div>
        </template>
    </div>
</template>

<style>
.radioset-rect-grid {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(3, minmax(auto, 75px));
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 23px;
    padding: 0 25px;
}

.radioset-rect-grid__item {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
}

.radioset-rect-grid__button {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
</style>