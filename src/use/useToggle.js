import { ref } from "vue"

export default function(initState = false) {
	const state = ref(initState)

	function on() {
		state.value = true
	}

	function off() {
		state.value = false
	}

	function toggle() {
		state.value = !state.value
	}

	function set(value) {
		state.value = value
	}

	return { set, on, off, toggle, state }
}