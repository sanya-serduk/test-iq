import { useTestStore } from "@/stores/test.js";

export function useStepControl({ id, radiobuttons, emit }) {
	const name = id.toString()
	const store = useTestStore()
	const storeData = store.getStepData(name)

	radiobuttons = radiobuttons.map(value => ({ name, value }))
	const radioChecked = radiobuttons.find(btn => storeData === btn.value)

	if (radioChecked) {
		radioChecked.checked = true
		emit('step-is-ready', true)
	} else {
		emit('step-is-ready', false)
	}

	function handlerChange(e) {
		store.setStepData(name, e.target.value)
		emit('step-is-ready', true)
	}

	return {
		radiobuttons,
		handlerChange
	}
}