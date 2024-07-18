export function findMissingStep(start, end, steps) {
	for (let i = start; i < end; i++) {
		if (!steps[i]) {
			return i
		}
	}
	return end
}

export function textFormatByNumber(number, words) {
	const cases = [2, 0, 1, 1, 1, 2]
	const index = (number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)]
	return words[index]
}

export function addZeroFirstNumber(number, limit) {
	return number < limit ? `0${number}` : `${number}`;
}