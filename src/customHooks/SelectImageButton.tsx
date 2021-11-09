import "../button/SelectImageButton.css"
import {Button} from "../button/Button";
import {RefObject, useEffect, useRef, useState} from "react";

function useImageLoader(inputRef: RefObject<HTMLInputElement|null>) {
	const selectedImageUrlRef = useRef<string>()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		function revokeImageUrl() {
			if (selectedImageUrlRef.current != null) {
				window.URL.revokeObjectURL(selectedImageUrlRef.current)
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

		inputRef.current?.addEventListener('change', updateSelectedImage)
		return () => {
			inputRef.current?.removeEventListener('change', updateSelectedImage)
			revokeImageUrl()
		}
	}, [inputRef])

	return {
		loading,
		url: selectedImageUrlRef.current,
		uploadImage: () => {
			if (!loading) {
				setLoading(true)
				inputRef.current?.click()
			}
		},
	}
}

function SelectImageButton() {
	const inputRef = useRef(null as HTMLInputElement|null)
	const {uploadImage, loading, url} = useImageLoader(inputRef)

	return (
<div className={"selected-image-button"}>
	<Button
		onClick={uploadImage}
		loading={loading}
		text={"Выбрать картинку"}
	/>
	<input
		ref={inputRef}
		type="file"
		style={{'display': 'none'}}
	/>
	{url && <img
		alt={url}
		className={"selected-image"}
		src={url}
	/>}
</div>)
}

export {
	SelectImageButton
};