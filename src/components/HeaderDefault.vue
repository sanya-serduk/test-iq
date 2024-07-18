<script setup>
import emitter from "@/utils/mitt.js";
import {onMounted, onUnmounted, ref} from "vue";

const header = ref(null)

function handlerClickMenuButton() {
    emitter.emit('menu-default__open')
}

function handlerResize() {
    emitter.emit('set-css-vars', {
        header: {
            height: header.value.clientHeight + 'px'
        }
    })
}

onMounted(() => {
    handlerResize()
    window.addEventListener('resize', handlerResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handlerResize)
})
</script>

<template>
    <header class="header-default" ref="header">
        <div class="header-default__container container">
            <button class="header-default__menu-button" @click="handlerClickMenuButton">
                <span class="header-default__menu-button-icon"></span>
            </button>
            <div class="header-default__content">
                <slot/>
            </div>
        </div>
    </header>
</template>

<style>
.header-default {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: var(--index-header);
}

.header-default__container {
    display: flex;
    background-color: #181818;
    min-height: 46px;
    box-shadow: 0 4px 4px 0 #00000040;
}

.header-default__content {
    width: 100%;
}

.header-default__menu-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    width: 46px;
    height: 46px;
    cursor: pointer;
}

.header-default__menu-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.header-default__menu-button-icon {
    position: relative;
    background-color: #696969;
    width: 24px;
    height: 3px;
}

.header-default__menu-button-icon:before,
.header-default__menu-button-icon:after {
    content: "";
    display: block;
    position: absolute;
    background-color: inherit;
    width: inherit;
    height: inherit;
    left: 0;
}

.header-default__menu-button-icon:before {
    top: calc(-4px - 100%);
}

.header-default__menu-button-icon:after {
    bottom: calc(-4px - 100%);
}
</style>