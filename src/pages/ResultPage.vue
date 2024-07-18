<script setup>
import TextIconButton from "@/components/form/TextIconButton.vue";
import IconCall from "@/components/icons/IconCall.vue";
import HeaderDefault from "@/components/HeaderDefault.vue";
import {computed, onMounted, onUnmounted, ref} from "vue";
import { useRouter } from "vue-router";
import {addZeroFirstNumber, textFormatByNumber} from "@/helpers/index.js";
import {useTestStore} from "@/stores/test.js";

let timer = null
const minutes = ref(10)
const seconds = ref(0)
const callState = ref(false)
const jsonData = ref(null)
const router = useRouter()
const store = useTestStore()
store.clearStepData()

const callDataTemplate = [
    { name: 'Имя', key: 'name' },
    { name: 'Период вращения', key: 'rotation_period' },
    { name: 'Орбитальный период', key: 'orbital_period' },
    { name: 'Диаметр', key: 'diameter' },
    { name: 'Климат', key: 'climate' },
    { name: 'Гравитация', key: 'gravity' },
    { name: 'Территория', key: 'terrain' },
    { name: 'Поверхностная вода', key: 'surface_water' },
    { name: 'Население', key: 'population' },
    { name: 'Резиденты', key: 'residents', type: 'links' },
    { name: 'Фильмы', key: 'films', type: 'links' },
    { name: 'Дата создания', key: 'created' },
    { name: 'Дата редактирования', key: 'edited' },
    { name: 'URL', key: 'url' }
]

const formattedTime = computed(() => `${ addZeroFirstNumber(minutes.value, 10)}:${ addZeroFirstNumber(seconds.value, 10) }`)
const timeText = computed(() => textFormatByNumber(minutes.value, ['минута', 'минуты', 'минут']))


const callData = computed(() => {
    if (!jsonData.value) {
        return []
    }

    const result = []

    for (const item of callDataTemplate) {
        const jsonItemValue = jsonData.value[item.key]
        if (jsonItemValue) {
            if (item.type === 'links' && jsonItemValue.length) {
                result.push({
                    name: item.name,
                    value: jsonItemValue.map((link, i) => ({ name: i, url: link })),
                    type: 'links'
                })
            } else {
                result.push({
                    name: item.name,
                    value: jsonItemValue
                })
            }
        }
    }

    return result.length ? result : []
})

function updateTimer() {
    if (seconds.value === 0) {
        if (minutes.value === 0) {
            clearInterval(timer)
            timer = null
            router.replace('/')
            return
        }
        minutes.value -= 1
        seconds.value = 59
    } else {
        seconds.value -= 1
    }
}

function handlerClickButtonCall() {
    if (callState.value || callData.value.length) return
    callState.value = true

    fetch('https://swapi.dev/api/planets/1/?format=json')
        .then(data => data.json())
        .then(data => {
            jsonData.value = data
        })
        .catch((e) => {
            console.log(e)
            callState.value = false
        })
}

onMounted(() => {
    timer = setInterval(updateTimer, 1000)
})

onUnmounted(() => {
    clearInterval(timer)
})
</script>

<template>
    <header-default>
        <div class="result__header">
            <div class="result__header-icon">
                <img src="@/assets/img/rain_bk3_small.png" alt="header icon"/>
            </div>
            <div class="result__header-text">
                Готово!
            </div>
        </div>
    </header-default>
    <main class="result">
        <div class="result__response" v-if="callData.length">
            <template v-for="item in callData" :key="item.name">
                <div class="result__response-item" v-if="item.type === 'links'">
                    <div class="result__response-item-name">
                        {{ item.name }}:
                    </div>
                    <div class="result__response-item-value">
                        <template v-for="(link, i) in item.value" :key="link.url">
                            <span v-if="i"> • </span>
                            <a :href="link.url" target="_blank">{{ link.name }}</a>
                        </template>
                    </div>
                </div>
                <div class="result__response-item" v-else>
                    <div class="result__response-item-name">{{ item.name }}:</div>
                    <div class="result__response-item-value">{{ item.value }}</div>
                </div>
            </template>
        </div>
        <div class="result__main" v-else>
            <div class="result__title">
                Ваш результат рассчитан:
            </div>
            <div class="result__desc">
                <u>Вы относитесь к 3%</u> респондентов, чей уровень интеллекта более чем на
                15 пунктов отличается от среднего в большую или меньшую сторону!
            </div>
            <div class="result__call-title">
                Скорее получите свой результат!
            </div>
            <div class="result__call-desc">
                <div class="result__call-desc-container">
                    <div class="result__call-desc-text">
                        В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации
                        доступны в виде голосового сообщения по звонку с вашего мобильного телефона
                    </div>
                </div>
            </div>
            <div class="result__call-timer">
                Звоните скорее, запись доступна всего
                <br>
                <span class="result__call-timer-clock">{{ formattedTime }}</span> {{ timeText }}
            </div>
            <div class="result__call-button">
                <text-icon-button @click="handlerClickButtonCall" :disabled="callState">
                    <template v-slot:icon><icon-call/></template>
                    <template v-slot:text>Позвонить и прослушать результат</template>
                </text-icon-button>
            </div>
        </div>
        <div class="result__footer">
            <div class="result__text-footer">
                TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
            </div>
        </div>
    </main>
</template>

<style>
.result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: calc(var(--dvh) + 25px);
    padding-top: var(--header-height);
}

.result__header {
    display: flex;
    height: 100%;
    align-items: center;
    align-content: center;
}

.result__header-icon {
    height: 46px;
    object-fit: cover;
    display: flex;
}

.result__header-text {
    color: #FFC700;
    font-family: Yeseva One, serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin: 3px 0 0 24px;
}

.result__response {
    width: 100%;
    padding: 36px 20px;
}

.result__response-item {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
}

.result__response-item + .result__response-item {
    border-top: 1px solid #666;
}

.result__response-item-value {
    text-align: right;
    padding-left: 20px;
}

.result__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 36px;
}

.result__footer {
    padding: 15px;
}

.result__text-footer {
    font-family: Roboto, sans-serif;
    color: rgba(255, 255, 255, 0.5);
    font-size: 7px;
    line-height: 9px;
    letter-spacing: 3px;
    text-align: center;
}

.result__title {
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0 15px;
}

.result__desc {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    margin-top: 10px;
    padding: 0 26px;
}

.result__call-title {
    color: #3BDE7C;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 22px;
}

.result__call-desc {
    padding: 0 15px;
    margin-top: 15px;
}

.result__call-desc-container {
    background-color: #1C2741;
    padding: 16px;
    border-radius: 6px;
}

.result__call-desc-text {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 8px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.result__call-timer {
    color: #3BDE7C;
    font-size: 11px;
    line-height: 30px;
    letter-spacing: 0.1em;
    text-align: center;
    margin-top: 10px;
}

.result__call-timer-clock {
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 0.1em;
}

.result__call-button {
    max-width: 290px;
    margin-top: 6px;
}
</style>