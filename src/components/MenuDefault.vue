<script setup>
import {onMounted, onUnmounted, watch} from "vue";
import useToggle from "@/use/useToggle.js";
import emitter from "@/utils/mitt.js";
import { useRoute } from "vue-router";
import IconMenuClose from "@/components/icons/IconMenuClose.vue";

const toggle = useToggle(false)
const route = useRoute()

onMounted(() => emitter.on('menu-default__open', toggle.on))
onUnmounted(() => emitter.off('menu-default__open', toggle.off))
watch(() => route.path, toggle.off)
</script>

<template>
    <div class="menu-default" :class="{ 'menu-default--open': toggle.state.value }" @click.self="toggle.off">
        <div class="menu-default__container container">
            <div class="menu-default__content">
                <div class="menu-default__header">
                    <button class="menu-default__header-button-close" @click="toggle.off">
                        <icon-menu-close/>
                    </button>
                </div>
                <ul class="menu-default__links">
                    <li class="menu-default__links-item">
                        <router-link class="menu-default__link" to="/">Главная</router-link>
                    </li>
                    <li class="menu-default__links-item">
                        <router-link class="menu-default__link" to="/">Информация о тесте</router-link>
                    </li>
                    <li class="menu-default__links-item">
                        <router-link class="menu-default__link" to="/step/1">Пройти тест</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.menu-default {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    z-index: var(--index-menu);
}

.menu-default--open {
    height: var(--dvh);
    overflow-y: auto;
}

.menu-default__container {
    width: 100%;
    overflow-x: hidden;
}

.menu-default__content {
    min-height: var(--dvh);
    background-color: #181818;
    transform: translateX(-100%);
    transition: transform 0.25s ease-out;
}

.menu-default--open .menu-default__content {
    transform: translateX(0);
}

.menu-default__header {
    display: flex;
    justify-content: flex-end;
    min-height: 64px;
}

.menu-default__header-button-close {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    background: none;
    border: none;
    cursor: pointer;
}

.menu-default__header-button-close:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.menu-default__link {
    display: block;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    padding: 12px 23px;
}

.menu-default__link:hover {
    color: #F4CE0C;
    text-decoration: none;
}
</style>