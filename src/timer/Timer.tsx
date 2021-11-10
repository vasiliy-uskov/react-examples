import {useEffect, useState} from "react";

function Timer() {
    const [time, setTime] = useState(0)
    const [stop, setStop] = useState(false)
    useEffect(() => {
        function updateTimer() {
            setTime(Date.now())
            if (!stop) {
                requestAnimationFrame(updateTimer)
            }
        }
        updateTimer()
        return () => {
            setStop(true)
        }
    }, [stop])
    const date = new Date(time)
    return (<div>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>)
}
export {
    Timer,
}