import {Dispatch, SetStateAction, useEffect, useState} from "react";


function getStorageItem(key: string): string|null {
    return window.localStorage.getItem(key)
}
function setStorageItem(key: string, value: string) {
    window.localStorage.setItem(key, value)
}

function useStoredState(initialState: string, key: string): [string, Dispatch<SetStateAction<string>>] {
    const storedValue = getStorageItem(key)
    const [value, setValue] = useState(storedValue === null ? initialState : storedValue)
    useEffect(() => {
        setStorageItem(key, value)
    }, [key, value])
    return [value, setValue]
}

export {
    useStoredState,
}