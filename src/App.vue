<script setup>
import { onUnmounted, reactive } from "vue";
import MenuDefault from "@/components/MenuDefault.vue";
import emitter from "@/utils/mitt.js";

const cssVars = reactive({
    '--vh': '100vh',
    '--dvh': '100dvh',
    '--header-height': '0px',
})

function updateCssVars(data = {}) {
    cssVars['--vh'] = `${ document.documentElement.clientHeight }px`
    cssVars['--dvh'] = `${ window.visualViewport?.height ?? window.innerHeight }px`
    cssVars['--header-height'] = data?.header?.height ?? cssVars['--header-height']
}

updateCssVars()
window.addEventListener('resize', updateCssVars)
emitter.on('set-css-vars', updateCssVars)

onUnmounted(() => {
    window.removeEventListener('resize', updateCssVars)
    emitter.off('set-css-vars', updateCssVars)
})
</script>

<template>
    <div class="app container" :style="cssVars">
        <router-view/>
        <menu-default/>
    </div>
</template>

<style>
.app {
    position: relative;
    background: url("@/assets/img/rain_bk2.png") repeat-y;
    background-size: 100% auto;
    box-shadow: 0 0 40px 10px #2c3e50;
}
</style>
