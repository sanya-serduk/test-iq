import { reactive, watch } from 'vue'
import { defineStore } from 'pinia'

export const useTestStore = defineStore('test-iq', () => {
	const data = reactive({})
	const localStorageData = JSON.parse(localStorage.getItem('test-iq'))

	if (localStorageData) {
		for (const key in localStorageData) {
			data[key] = localStorageData[key]
		}
	}

	watch(data, () => {
		localStorage.setItem('test-iq', JSON.stringify(data))
	})

	function getStepData(name) {
		return data[name] ?? null
	}

	function setStepData(name, value) {
		data[name] = value
	}

	function clearStepData() {
		for (const key in data) {
			delete data[key]
		}
	}

	return { getStepData, setStepData, data, clearStepData }
})