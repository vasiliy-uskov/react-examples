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

function Timer() {
    const [time, setTime] = useState(0)
    useEffect(() => initTimer(now => setTime(now)), [])
    const date = new Date(time)
    return (<div>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>)
}
export {
    Timer,
}