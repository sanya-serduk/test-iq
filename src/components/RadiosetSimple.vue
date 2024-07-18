<script setup>
import RadioSimple from "@/components/form/RadioSimple.vue";

const props = defineProps({
    radiobuttons: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <ul class="radioset-simple">
        <template v-for="radiobutton in props.radiobuttons" :key="radiobutton.value">
            <li class="radioset-simple__item">
                <radio-simple
                    :name="radiobutton.name"
                    :value="radiobutton.value"
                    :checked="radiobutton.checked"
                >
                    {{ radiobutton.value }}
                </radio-simple>
            </li>
        </template>
    </ul>
</template>

<style>
.radioset-simple {

}

.radioset-simple__item + .radioset-simple__item {
    margin-top: 8px;
}
</style>