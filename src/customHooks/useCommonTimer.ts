import {useEffect, useState} from "react";

const setters = new Set<(a: number) => void>()

const update = () => {
    const now = Date.now()
    Array
        .from(setters.values())
        .map(setNow => setNow(now))
    requestAnimationFrame(update)
}
update()

function useCommonTimer(): Date {
    const [time, setTime] = useState(0)
    useEffect(() => {
        setters.add(setTime)
        return () => {
            setters.delete(setTime)
        }
    }, [])
    return new Date(time)
}

export {
    useCommonTimer,
}