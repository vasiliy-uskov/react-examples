import {useEffect, useState} from "react";

function Timer() {
    const [time, setTime] = useState(0)
    useEffect(() => {
        let stop = false
        function updateTimer() {
            setTime(Date.now())
            if (!stop) {
                requestAnimationFrame(updateTimer)
            }
        }
        updateTimer()
        return () => {
            stop = true
        }
    }, [])
    const date = new Date(time)
    return (<div>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>)
}
export {
    Timer,
}