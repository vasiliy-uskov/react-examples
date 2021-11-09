import {useEffect, useState} from "react";

function initTimer(nowCallback: (a: number) => void) {
    let stop = false
    requestAnimationFrame(() => {
        nowCallback(Date.now())
        if (!stop) {
            initTimer(nowCallback)
        }
    })
    return () => {
        stop = true
    }
}

function useTimer(): Date {
    const [time, setTime] = useState(0)
    useEffect(() => initTimer(now => setTime(now)), [])
    return new Date(time)
}

export {
    useTimer,
}