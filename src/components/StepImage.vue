<script setup>
defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: 'image'
    }
})
</script>

<template>
    <div class="step-image">
        <img class="step-image__item" :src="src" :alt="alt"/>
    </div>
</template>

<style>
.step-image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
}

.step-image__item {
    object-fit: cover;
    max-width: 100%;
}
</style>