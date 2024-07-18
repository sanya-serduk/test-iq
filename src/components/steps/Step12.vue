<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
let timeout = null

timeout = setTimeout(() => {
    clearTimeout(timeout)
    timeout = null
    router.replace('/result')
}, 3000)

</script>

<template>
    <div class="step-process">
        <div class="step-process__title">
            Обработка результатов
        </div>
        <div class="step-process__spinner">
            <img class="step-process__spinner-image" src="@/assets/img/spinner.png" alt="spinner"/>
        </div>
        <div class="step-process__desc">
            <span class="step-process__desc-text">Определение стиля мышления</span>
            <span class="step-process__desc-points">.......................................................................</span>
        </div>
    </div>
</template>

<style>
.step-process {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 23px;
}

.step-process__title {
    font-size: 23px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    max-width: 237px;
    padding: 0 15px;
}

.step-process__desc {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.05em;
    max-width: 276px;
    margin-top: 27px;
}

.step-process__desc-text {
    white-space: nowrap;
}

.step-process__desc-points {
    word-break: break-word;
}

.step-process__spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 33px;
}

.step-process__spinner-image {
    animation: step-process__spinner-image 0.8s linear infinite;
}

@keyframes step-process__spinner-image {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
}
</style>