import React, { useEffect, useRef, useState } from 'react'

const Coundown = () => {
    const [time , setTime] = useState({
        hour: "",
        minute: "",
        second: "",
    })

    const[btn , setbtn] = useState(false)

    const timeRef = useRef(null)

    const handelChange = (e , field) => {
        let val = parseInt(e.target.value , 10 ) || 0
        console.log(val)

        if(isNaN(val)){
            return
        } 

        let copyTimer = {...time}
        copyTimer[field] = val 
        copyTimer.minute += Math.floor(copyTimer.second / 60);
        copyTimer.second = Math.floor(copyTimer.second % 60);
        copyTimer.hour += Math.floor(copyTimer.minute / 60)
        copyTimer.minute = Math.floor(copyTimer.minute % 60)
        setTime(copyTimer)
    }

    const handelClick = () => {
        if(time.hour === 0 && time.minute === 0 && time.second === 0){
            return
        }else{
            setbtn(!btn)
        }
        
    }

    const handelReset = () => {
        clearInterval(timeRef.current)
        setbtn(false)
        setTime({hour: "" , minute: "" , second: ""})
    }

    useEffect(() => {
        if(btn){
        timeRef.current = setInterval(() => {
            setTime((pre) => {
                 let copyPreTime = {...pre}
                 copyPreTime.second--
                 console.log(copyPreTime)
                 if(copyPreTime.second < 0){
                    copyPreTime.minute--
                    copyPreTime.second = 59
                    if(copyPreTime.minute < 0){
                        copyPreTime.hour--
                        copyPreTime.minute = 59
                        if(copyPreTime.hour < 0){
                            clearInterval(timeRef.current)
                            return {hour: "" , minute: "" , second: ""}
                        }
                    }
                 }
                 return copyPreTime;
            })
        } , 1000)
        }

        return () => {
            console.log("clean up")
            clearInterval(timeRef.current)
        }
    
    }, [btn])
  return (
    <div className='coundown-conatiner'>
        <h1>Please enter the coundown</h1>
        <div className='timer'>
            <input className='timerInput' disabled = {btn} value={time.hour} onChange={(e) => handelChange(e , "hour")} type='text' placeholder='HH'/>
            <input className='timerInput' disabled = {btn} value={time.minute} onChange={(e) => handelChange(e , "minute")} type='text' placeholder='MM'/>
            <input className='timerInput' disabled = {btn} value={time.second} onChange={(e) => handelChange(e , "second")} type='text' placeholder='SS'/>
        </div>
        <div>
            <button className='btnCoundown' onClick={handelClick}>{btn ? "Pause" : "start"}</button>
            <button className='btnCoundown' onClick={handelReset}>Rest</button>
        </div>
    </div>
  )
}

export default Coundown