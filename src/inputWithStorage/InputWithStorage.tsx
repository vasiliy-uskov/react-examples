import {useEffect, useRef, useState} from "react";

function getStorageItem(): string {
	return window.localStorage.getItem('InputWithStorage.value') || ''
}
function setStorageItem(value: string) {
	window.localStorage.setItem('InputWithStorage.value', value)
}

function InputWithStorage() {
	const inputRef = useRef<HTMLInputElement>(null)
	const [value, setValue] = useState(getStorageItem())
	useEffect(() => {
		setStorageItem(value)
	}, [value])
	return (
<input
	style={{
		'width': 300,
	}}
	value={value}
	ref={inputRef}
	onInput={() => setValue(inputRef.current?.value || '')}
/>)
}

export {
	InputWithStorage,
}