import "./SelectImageButton.css"
import {Button} from "./Button";
import {useCallback, useEffect, useRef, useState} from "react";

function SelectImageButton() {
	const inputRef = useRef(null as null|HTMLInputElement)
	const selectedImageUrlRef = useRef(null as null|string)
	const [loading, setLoading] = useState(false)

	const revokeImageUrl = useCallback(() => {
		if (selectedImageUrlRef.current != null) {
			window.URL.revokeObjectURL(selectedImageUrlRef.current)
		}
	}, [selectedImageUrlRef])

	function openSelectImageModal() {
		if (inputRef.current) {
			setLoading(true)
			inputRef.current.click()
		}
	}

	function updateSelectedImage() {
		revokeImageUrl()
		if (inputRef.current && inputRef.current.files) {
			const image = inputRef.current.files[0]
			selectedImageUrlRef.current = window.URL.createObjectURL(image)
		}
		setLoading(false)
	}

	useEffect(() => revokeImageUrl, [revokeImageUrl])

	return (
<div className={"selected-image-button"}>
	<Button
		onClick={openSelectImageModal}
		loading={loading}
		text={"Выбрать картинку"}
	/>
	<input
		ref={inputRef}
		type="file"
		onChange={updateSelectedImage}
		style={{'display': 'none'}}
	/>
	{selectedImageUrlRef.current && <img
		alt={selectedImageUrlRef.current}
		className={"selected-image"}
		src={selectedImageUrlRef.current}
	/>}
</div>)
}

export {
	SelectImageButton
};